import { useState } from "react";
import styled from "styled-components";
import SwiperType, { Mousewheel, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../../components/Button";
import { LanguageToggle } from "../../../components/ContentBuilder/ThemeInfo/LangToggle";
import { Tags } from "../../../components/ContentBuilder/ThemeInfo/Tag";
import { FoodwayStop } from "../../../components/ContentCreation/FoodwayStop";
import { FoodwayTitle } from "../../../components/ContentCreation/FoodwayTitle";
import { BackButton } from "../../../components/Global/BackButton";
import { Icon } from "../../../components/Global/Icon";
import { Typography } from "../../../components/Global/Typography";
import { useFoodwayStore } from "../../../stores/foodwaysStore";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";

export const CreateFoodwaysPage = () => {
  // const { api } = useAPI();
  // const [title, setTitle] = useState("");
  // const [stopTimePeriod, setStopTimePeriod] = useState("");
  // const [stopDescription, setStopDescription] = useState("");
  // const [description, setDescription] = useState("");
  // const navigate = useNavigate();

  // const handleCreate = async () => {
  //   const response = await api.appFoodwaysCreate(
  //     {
  //       image: "/images/chocolate.jpg",
  //       english: {
  //         title: title,
  //         info: description,
  //         featureDate: "2023-05-26T19:41:06.252Z",
  //         description: "Test description.",
  //       },
  //       french: {
  //         title: title,
  //         info: description,
  //         featureDate: "2023-05-26T19:41:06.252Z",
  //         description: "Test description.",
  //       },
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
  //       },
  //     },
  //   );

  //   console.log(response);

  //   if (response.status === 200) {
  //     const _response = await api.appFoodwayStopsCreate(
  //       {
  //         foodwayId: response.data.english?.id,
  //         image: "/images/moment.jpg",
  //         english: {
  //           timePeriod: stopTimePeriod,
  //           description: stopDescription,
  //           location: "Canada",
  //         },
  //         french: {
  //           timePeriod: stopTimePeriod,
  //           description: stopDescription,
  //           location: "Canada",
  //         },
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
  //         },
  //       },
  //     );

  //     console.log(_response);

  //     await api.appFoodwayStopsCreate(
  //       {
  //         foodwayId: response.data?.english?.id,
  //         image: "/images/moment.jpg",
  //         english: {
  //           timePeriod: stopTimePeriod,
  //           description: stopDescription,
  //           location: "Canada",
  //         },
  //         french: {
  //           timePeriod: stopTimePeriod,
  //           description: stopDescription,
  //           location: "Canada",
  //         },
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
  //         },
  //       },
  //     );

  //     await api.appFoodwayStopsCreate(
  //       {
  //         foodwayId: response.data?.english?.id,
  //         image: "/images/moment.jpg",
  //         english: {
  //           timePeriod: stopTimePeriod,
  //           description: stopDescription,
  //           location: "Canada",
  //         },
  //         french: {
  //           timePeriod: stopTimePeriod,
  //           description: stopDescription,
  //           location: "Canada",
  //         },
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
  //         },
  //       },
  //     );

  //     if (_response.status === 200) {
  //       navigate("/dashboard/foodways");
  //     }
  //   }
  // };
  const [tags, setTags] = useState(["foraging", "seeds"]);
  const { slide, addFoodwaySlide, setSlide } = useFoodwayStore();

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
    setSlide(swiper.activeIndex);
  };

  return (
    <Style.Container>
      <div className="buttons-container">
        <BackButton />
        <Button>Preview</Button>
      </div>

      <Typography variant="h4" as="h4" weight="semi-bold">
        Create foodways
      </Typography>

      <Style.Info>
        <div className="flex">
          <Style.SlideDeleteButton>
            <Typography variant="h6" as="h6" weight="semi-bold">
              Slide - {slide + 1}
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
            <SwiperSlide>
              <Style.Content>
                <FoodwayTitle key="title" />
              </Style.Content>
            </SwiperSlide>
            <SwiperSlide>
              <Style.Content>
                <FoodwayStop />
              </Style.Content>
            </SwiperSlide>
          </Swiper>
        </Style.Slide>
      </Style.ContentBuilder>
      <Style.ActionContainer>
        <Button variant="yellow" onClick={handleAddSlide}>
          Add Slide
        </Button>
        <div className="flex">
          <Button variant="yellow" className="mr-4" onClick={handleSaveAndExit}>
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

    * {
      white-space: nowrap;
    }
  `,
  Language: styled.div`
    display: flex;
  `,
  ContentBuilder: styled.div`
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 16px;
    width: 100%;
    height: 100%;
    padding: 1rem;
  `,
  ActionContainer: styled.section`
    padding: 2vh 0;
    display: flex;
    justify-content: space-between;
  `,
  Slide: styled.section`
    display: flex;
    flex-direction: column;

    .theme-swiper-slide {
      flex: 1;
      margin: 0;
    }
  `,
  Content: styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 1.87vh 1vw;
    column-gap: 1.7%;
    row-gap: 3.2%;
    position: relative;
    background: #ffffff50;
    border-radius: 0.5rem;
    .grid {
      height: 100%;
      background: gray;
    }
  `,
};
