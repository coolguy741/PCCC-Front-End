import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import SwiperType, { Mousewheel, Scrollbar } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Button from "../../../components/Button";
import { LanguageToggle } from "../../../components/ContentBuilder/Components/ContentInfo/LangToggle";
import { Tags } from "../../../components/ContentBuilder/Components/ContentInfo/Tag";
import { FoodwayStop } from "../../../components/ContentCreation/FoodwayStop";
import { FoodwayTitle } from "../../../components/ContentCreation/FoodwayTitle";
import { BackButton } from "../../../components/Global/BackButton";
import { Icon } from "../../../components/Global/Icon";
import { Typography } from "../../../components/Global/Typography";
import { useAPI } from "../../../hooks/useAPI";
import { useFoodwayStore } from "../../../stores/foodwaysStore";
import { STORAGE_KEY_JWT } from "../../consts";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import { FoodwayTimeline } from "../../../components/ContentCreation/FoodwayTimeline";

const SlideOnUpdate = ({ totalSlides }: { totalSlides: number }) => {
  const swiper = useSwiper();

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(totalSlides);
    }
  }, [totalSlides, swiper]);

  return null;
};

export const CreateFoodwaysPage = () => {
  const {
    activeSlide,
    addFoodwaySlide,
    setActiveSlide,
    totalSlides,
    setTitle,
    setDescription,
    title,
    description,
    setContents,
    setStopTitle,
    setStopDescription,
    setStopTime,
    stopTitle,
    stopDescription,
    stopTime,
  } = useFoodwayStore();
  const { api } = useAPI();
  const navigate = useNavigate();
  const [_title, _setTitle] = useState(title || "");
  const [_description, _setDescription] = useState(description || "");
  const [_stopTitle, _setStopTitle] = useState<undefined[] | string[]>(
    stopTitle || [],
  );
  const [_stopTime, _setStopTime] = useState<undefined[] | string[]>(
    stopTime || [],
  );
  const [_stopDescription, _setStopDescription] = useState<
    undefined[] | string[]
  >(stopDescription || []);
  const [tags, setTags] = useState(["foraging", "seeds"]);

  const handleCreate = async () => {
    const response = await api.appFoodwaysCreate(
      {
        image: "/images/chocolate.jpg",
        english: {
          title: title,
          info: description,
          featureDate: "2023-05-26T19:41:06.252Z",
          description: "Test description.",
        },
        french: {
          title: title,
          info: description,
          featureDate: "2023-05-26T19:41:06.252Z",
          description: "Test description.",
        },
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
        },
      },
    );

    _stopTitle.shift();
    _stopDescription.shift();
    _stopTime.shift();

    if (response.status === 200) {
      let _response;
      _stopTitle.forEach(async (_, index) => {
        _response = await api.appFoodwayStopsCreate(
          {
            foodwayId: response.data.english?.id,
            image: "/images/moment.jpg",
            order: index,
            english: {
              location: _stopTitle[index],
              description: _stopDescription[index],
              timePeriod: _stopTime[index] || "",
            },
            french: {
              location: _stopTitle[index],
              description: _stopDescription[index],
              timePeriod: _stopTime[index] || "",
            },
          },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
            },
          },
        );

        if (_response.status === 200) {
          navigate("/dashboard/foodways");
        }
      });
    }
  };

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

  const handleAddSlide = () => {
    addFoodwaySlide();
  };

  const onSlideChange = (swiper: SwiperType) => {
    setActiveSlide(swiper.activeIndex);
  };

  useEffect(() => {
    setTitle(_title);
    setDescription(_description);
    setStopTitle(_stopTitle);
    setStopDescription(_stopDescription);
    setStopTime(_stopTime);

    setContents(_stopTitle, _stopDescription, _stopTime);
  }, [
    _title,
    _description,
    _stopTitle,
    _stopDescription,
    _stopTime,
    totalSlides,
  ]);

  return (
    <Style.Container>
      <div className="buttons-container">
        <BackButton onClick={() => navigate("/dashboard/foodways")} />
        <Button onClick={() => navigate("../preview")}>Preview</Button>
      </div>

      <Typography variant="h4" as="h4" weight="semi-bold">
        Create foodways
      </Typography>

      <Style.Info>
        <div className="flex">
          <Style.SlideDeleteButton>
            <Typography variant="h6" as="h6" weight="semi-bold">
              Slide - {activeSlide + 1}
            </Typography>
            <Icon name="trash" />
          </Style.SlideDeleteButton>
          <LanguageToggle />
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
              {new Array(totalSlides).fill(null).map((_, index) => (
                <SwiperSlide key={`slide-${index}`}>
                  <Style.Content>
                    {index === 0 ? (
                      <FoodwayTitle
                        setTitle={_setTitle}
                        setDescription={_setDescription}
                        title={_title}
                        description={_description}
                      />
                    ) : (
                      <FoodwayStop
                        index={index}
                        stopTitle={_stopTitle}
                        stopDescription={_stopDescription}
                        setStopDescription={_setStopDescription}
                        setStopTitle={_setStopTitle}
                        initialStopDescription={stopDescription[index]}
                        initialStopTitle={stopTitle[index]}
                        initialTimePeriod={stopTime[index]}
                      />
                    )}
                  </Style.Content>
                </SwiperSlide>
              ))}
              <SlideOnUpdate totalSlides={totalSlides} />
            </Swiper>
          </Style.Slide>
        </div>
        <div className="timeline">
          <FoodwayTimeline
            totalSlides={totalSlides}
            activeSlide={activeSlide}
            stopTime={_stopTime}
            setStopTime={_setStopTime}
          />
        </div>
      </Style.ContentBuilder>
      <Style.ActionContainer>
        <Button variant="yellow" onClick={handleAddSlide}>
          Add Slide
        </Button>
        <div className="flex">
          <Button variant="yellow" className="mr-4" onClick={handleCreate}>
            Save changes and exit
          </Button>
          <Button variant="orange" onClick={handleSaveAndContinue}>
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
