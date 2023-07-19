import Cookies from "js-cookie";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { useLoaderData, useNavigation } from "react-router-dom";
import styled from "styled-components";
import SwiperType, { Mousewheel, Scrollbar } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import Button from "../../../components/Button";
import { LanguageToggle } from "../../../components/ContentBuilder/Components/ContentInfo/LangToggle";
import { Tags } from "../../../components/ContentBuilder/Components/ContentInfo/Tag";
import { FoodwayStop } from "../../../components/ContentCreation/FoodwayStop";
import { FoodwayTimeline } from "../../../components/ContentCreation/FoodwayTimeline";
import { FoodwayTitle } from "../../../components/ContentCreation/FoodwayTitle";
import { BackButton } from "../../../components/Global/BackButton";
import { Icon } from "../../../components/Global/Icon";
import { Typography } from "../../../components/Global/Typography";
import { useAPI } from "../../../hooks/useAPI";
import { useFoodwayStore } from "../../../stores/foodwaysStore";
import { STORAGE_KEY_JWT } from "../../consts";
import { Language } from "../../types";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import { useFetch } from "../../../hooks/useFetch";
import {
  PccServer23FoodwaysFoodwayDto,
  PccServer23SharedIMultiLingualDto1PccServer23FoodwaysPublicFoodwayDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
} from "../../../lib/api/api";

const SlideOnUpdate = ({
  totalSlides,
  currentLang,
  setActiveSlide,
}: {
  totalSlides: number;
  currentLang: Language;
  setActiveSlide: (slide: number) => void;
}) => {
  const swiper = useSwiper();

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(totalSlides - 1);
    }
  }, [totalSlides, swiper, currentLang]);

  return null;
};

export const CreateFoodwaysPage = () => {
  const {
    activeSlide,
    addFoodwaySlide,
    setActiveSlide,
    setLang,
    setFoodway,
    deleteSlide,
    currentLang,
    en,
    fr,
    id,
    concurrencyStamp,
  } = useFoodwayStore();
  const { api } = useAPI();
  const navigate = useNavigate();
  const { state } = useNavigation();
  const foodway = useLoaderData() as PccServer23FoodwaysFoodwayDto;
  const [tags, setTags] = useState(["foraging", "seeds"]);
  const { data: newFoodway, fetchData: createFoodway } =
    useFetch<PccServer23SharedIMultiLingualDto1PccServer23FoodwaysPublicFoodwayDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull>(
      "appFoodwaysCreate",
      {},
    );
  const { data: updatedFoodway, fetchData: updateFoodway } =
    useFetch<PccServer23SharedIMultiLingualDto1PccServer23FoodwaysPublicFoodwayDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull>(
      "appFoodwaysUpdate",
      {},
    );

  useEffect(() => {
    foodway && setFoodway(foodway);
  }, [foodway]);

  const totalSlidesCount = useMemo(
    () => ((currentLang === "en" ? en : fr).stops?.length ?? 0) + 1,
    [currentLang, en, fr],
  );

  const handleCreate = async () => {
    const data = {
      image: "/images/chocolate.jpg",
      english: {
        title: en.title ?? "",
        info: en.info ?? "",
        featureDate: new Date().toISOString(),
        description: en.description,
      },
      french: {
        title: fr.title ?? "",
        info: fr.info ?? "",
        featureDate: new Date().toISOString(),
        description: fr.description,
      },
    };

    id
      ? updateFoodway?.(
          {
            ...data,
            concurrencyStamp: concurrencyStamp || "",
          },
          undefined,
          undefined,
          id,
        )
      : createFoodway?.(data);
  };

  useEffect(() => {
    if (newFoodway || updatedFoodway) {
      let _response;
      en.stops?.forEach(async (stop, index) => {
        const data = {
          foodwayId: (newFoodway || updatedFoodway)?.english?.id,
          image: "/images/moment.jpg",
          order: index + 1,
          english: {
            location: en.stops?.[index].title,
            description: en.stops?.[index].description,
            timePeriod: en.stops?.[index].time ?? "",
          },
          french: {
            location: fr.stops?.[index].title,
            description: fr.stops?.[index].description,
            timePeriod: fr.stops?.[index].time ?? "",
          },
        };

        _response = stop.id
          ? await api.appFoodwayStopsUpdate(
              stop.id,
              { ...data, concurrencyStamp: concurrencyStamp || "" },
              {
                headers: {
                  Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
                },
              },
            )
          : await api.appFoodwayStopsCreate(data, {
              headers: {
                Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
              },
            });

        if (_response.status === 200) {
          navigate("/dashboard/foodways");
        }
      });
    }
  }, [newFoodway, updatedFoodway]);

  const addTag = (tag: string) => {
    setTags((prev) => [...prev, tag]);
  };

  const deleteTag = (tag: string) => {
    setTags((prev) => [...prev.filter((current) => current !== tag)]);
  };

  const handleSaveAndContinue = () => {
    console.log("Save and continue");
  };

  const handleSaveAndExit = () => {
    console.log("Save and exit");
  };

  const handleAddSlide = useCallback(() => {
    addFoodwaySlide();
  }, []);

  const handleDeleteSlide = useCallback(() => {
    deleteSlide();
  }, []);

  const onSlideChange = (swiper: SwiperType) => {
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <Style.Container>
      <div className="buttons-container">
        <BackButton onClick={() => navigate("/dashboard/foodways")} />
        <Button onClick={() => navigate("../preview")}>Preview</Button>
      </div>

      <Typography variant="h4" as="h4" weight="semi-bold">
        {foodway ? "Edit" : "Create"} foodways
      </Typography>

      <Style.Info>
        <div className="flex">
          <Style.SlideDeleteButton onClick={handleDeleteSlide}>
            <Typography variant="h6" as="h6" weight="semi-bold">
              Slide - {activeSlide + 1}
            </Typography>
            <Icon name="trash" />
          </Style.SlideDeleteButton>
          <LanguageToggle lang={currentLang} setLang={setLang} />
        </div>
        <span>Move the marker on the globe to the desired location</span>
        <div className="flex">
          <Tags tags={tags} addTag={addTag} deleteTag={deleteTag} />
        </div>
      </Style.Info>
      <Style.ContentBuilder>
        <div className="content">
          <Style.Slide>
            <Swiper
              slidesPerView={1}
              mousewheel={true}
              pagination={false}
              effect="fade"
              onSlideChange={onSlideChange}
              direction={"vertical"}
              allowTouchMove={false}
              speed={500}
              modules={[Mousewheel, Scrollbar]}
              className="theme-swiper-slide"
            >
              {new Array(totalSlidesCount).fill(null).map((_, index) => (
                <SwiperSlide key={`slide-${index}`}>
                  <Style.Content>
                    {index === 0 ? (
                      <FoodwayTitle
                        state={
                          currentLang === "en"
                            ? en.componentState
                            : fr.componentState
                        }
                      />
                    ) : (
                      <FoodwayStop
                        index={index}
                        state={
                          currentLang === "en"
                            ? en.stops?.[index - 1].componentState
                            : fr.stops?.[index - 1].componentState
                        }
                      />
                    )}
                  </Style.Content>
                </SwiperSlide>
              ))}
              <SlideOnUpdate
                totalSlides={totalSlidesCount}
                currentLang={currentLang}
                setActiveSlide={setActiveSlide}
              />
            </Swiper>
          </Style.Slide>
        </div>
        <div className="timeline">
          <FoodwayTimeline totalSlides={totalSlidesCount} />
        </div>
      </Style.ContentBuilder>
      <Style.ActionContainer>
        <Button
          variant="yellow"
          onClick={handleAddSlide}
          disabled={state === "loading"}
        >
          Add Slide
        </Button>
        <div className="flex">
          <Button
            variant="yellow"
            className="mr-4"
            onClick={handleCreate}
            disabled={state === "loading"}
          >
            Save changes and exit
          </Button>
          <Button
            variant="orange"
            onClick={handleSaveAndContinue}
            disabled={state === "loading"}
          >
            Save changes and continue
          </Button>
        </div>
      </Style.ActionContainer>
    </Style.Container>
  );
};

const Style = {
  Container: styled.section`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    height: 100vh;

    .buttons-container {
      display: flex;
      justify-content: space-between;
      padding: 0 0 0.5rem;
      height: 6rem;

      button {
        margin: 1.2vh 0;
      }
    }
  `,
  Info: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0 1rem;

    span {
      color: var(--blue-500);
    }
  `,
  SlideDeleteButton: styled.button`
    display: flex;
    gap: 10%;
    align-items: center;
    background: rgba(255, 255, 255, 0.75);
    margin-right: 2rem;
    padding: 0.1vh 1vw;
    border-radius: 0.5rem;
    width: 100%;

    * {
      white-space: nowrap;
    }
  `,
  Language: styled.div`
    display: flex;
  `,
  ContentBuilder: styled.div`
    overflow: hidden;
    width: 100%;
    display: flex;
    height: 100%;

    .content {
      display: flex;
      height: 100%;
      width: 90%;
      overflow: hidden;
      width: 90%;
    }

    .timeline {
      width: 10%;
      height: 100%;
    }
  `,
  ActionContainer: styled.section`
    padding: 2vh 0;
    display: flex;
    justify-content: space-between;
  `,
  Slide: styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;

    .theme-swiper-slide {
      flex: 1;
      margin: 0;
    }
  `,
  Content: styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    border-radius: 0.5rem;
    padding: 0.5rem 0;
  `,
};
