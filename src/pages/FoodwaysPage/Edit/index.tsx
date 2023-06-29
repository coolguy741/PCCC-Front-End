import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import SwiperType, { Mousewheel, Scrollbar } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Button from "../../../components/Button";
import { LanguageToggle } from "../../../components/ContentBuilder/Components/ContentInfo/LangToggle";
import { Tags } from "../../../components/ContentBuilder/Components/ContentInfo/Tag";
import { EditFoodwayTimeline } from "../../../components/ContentCreation/EditFoodwayTimeline";
import { FoodwayStop } from "../../../components/ContentCreation/FoodwayStop";
import { FoodwayTitle } from "../../../components/ContentCreation/FoodwayTitle";
import { BackButton } from "../../../components/Global/BackButton";
import { Icon } from "../../../components/Global/Icon";
import { Typography } from "../../../components/Global/Typography";
import { useAPI } from "../../../hooks/useAPI";
import { PccServer23FoodwaysFoodwayDto } from "../../../lib/api/api";
import { useFoodwayStore } from "../../../stores/foodwaysStore";
import { STORAGE_KEY_JWT } from "../../consts";

const TAGS = [
  "vegan",
  "vegetarian",
  "gluten-free",
  "dairy-free",
  "pescatarian",
];

const SlideOnUpdate = ({ totalSlides }: { totalSlides: number }) => {
  const swiper = useSwiper();

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(totalSlides);
    }
  }, [totalSlides, swiper]);

  return null;
};

export const EditFoodwaysPage = () => {
  const { api } = useAPI();
  const navigate = useNavigate();
  const params = useParams();
  const foodway = useLoaderData() as PccServer23FoodwaysFoodwayDto;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState(["foraging", "seeds"]);
  const [stopTitle, setStopTitle] = useState<undefined[] | string[]>([]);
  const [stopTime, setStopTime] = useState<undefined[] | string[]>([]);
  const [stopDescription, setStopDescription] = useState<
    undefined[] | string[]
  >([]);
  const {
    activeSlide,
    addFoodwaySlide,
    init,
    setActiveSlide,
    totalSlides,
    setTotalSlides,
  } = useFoodwayStore();

  // const [title, setTitle] = useState(foodway.title);

  const handleEdit = async () => {
    if (params.id && title) {
      const response = await api.appFoodwaysUpdate(
        params.id,
        {
          english: {
            title: title,
          },
          french: {
            title: title,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
          },
        },
      );

      if (response.status === 200) navigate("/dashboard/accounts/groups");
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
    init();
    setStopTitle([]);
    setStopDescription([]);
    setStopTime([]);
  }, []);

  useEffect(() => {
    setTotalSlides(
      (foodway.foodwayStops?.length && foodway.foodwayStops?.length + 1) || 1,
    );
  }, []);

  return (
    <Style.Container>
      <div className="buttons-container">
        <BackButton onClick={() => navigate("/dashboard/foodways")} />
        <Button>Preview</Button>
      </div>

      <Typography variant="h4" as="h4" weight="semi-bold">
        Edit foodways
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
              speed={500}
              modules={[Mousewheel, Scrollbar]}
              className="theme-swiper-slide"
            >
              <SwiperSlide key="slide-0">
                <FoodwayTitle
                  setTitle={setTitle}
                  setDescription={setDescription}
                  title={foodway.title}
                  description={foodway.info}
                />
              </SwiperSlide>
              {totalSlides &&
                new Array(totalSlides - 1).fill(null).map((stop, index) => (
                  <SwiperSlide key={`slide-${index + 1}`}>
                    <Style.Content>
                      <FoodwayStop
                        index={index}
                        initialStopTitle={
                          foodway.foodwayStops && foodway.foodwayStops[index]
                            ? foodway.foodwayStops[index].location
                            : "Click to edit2"
                        }
                        initialStopDescription={
                          foodway.foodwayStops && foodway.foodwayStops[index]
                            ? foodway.foodwayStops[index].description
                            : "Click to edit"
                        }
                        initialTimePeriod={
                          foodway.foodwayStops && foodway.foodwayStops[index]
                            ? foodway.foodwayStops[index].timePeriod
                            : "Edit"
                        }
                        stopTitle={stopTitle}
                        stopDescription={stopDescription}
                        setStopDescription={setStopDescription}
                        setStopTitle={setStopTitle}
                      />
                    </Style.Content>
                  </SwiperSlide>
                ))}
              <SlideOnUpdate totalSlides={totalSlides} />
            </Swiper>
          </Style.Slide>
        </div>
        <div className="timeline">
          <EditFoodwayTimeline
            totalSlides={totalSlides}
            activeSlide={activeSlide}
            stopTime={stopTime}
            setStopTime={setStopTime}
            initialStopTimes={foodway.foodwayStops?.map(
              (stop) => stop.timePeriod,
            )}
          />
        </div>
      </Style.ContentBuilder>
      <Style.ActionContainer>
        <Button variant="yellow" onClick={handleAddSlide}>
          Add Slide
        </Button>
        <div className="flex">
          <Button variant="yellow" className="mr-4" onClick={handleEdit}>
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
