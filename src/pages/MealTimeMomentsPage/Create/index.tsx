import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import SwiperType from "swiper";
import { useSwiper } from "swiper/react";
import Button from "../../../components/Button";
import { LanguageToggle } from "../../../components/ContentBuilder/Components/ContentInfo/LangToggle";
import { Tags } from "../../../components/ContentBuilder/Components/ContentInfo/Tag";
import { MedaltimeMomentTitle } from "../../../components/ContentCreation/MealtimeMomentTitle";
import { BackButton } from "../../../components/Global/BackButton";
import { Icon } from "../../../components/Global/Icon";
import { Typography } from "../../../components/Global/Typography";
import { useAPI } from "../../../hooks/useAPI";
import { useFoodwayStore } from "../../../stores/foodwaysStore";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";

const SlideOnUpdate = ({ totalSlides }: { totalSlides: number }) => {
  const swiper = useSwiper();

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(totalSlides);
    }
  }, [totalSlides, swiper]);

  return null;
};

export const CreateMealtimeMomentPage = () => {
  const { api } = useAPI();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState(["foraging", "seeds"]);
  const { activeSlide, addFoodwaySlide, init, setActiveSlide, totalSlides } =
    useFoodwayStore();

  const addTag = (tag: string) => {
    setTags((prev) => [...prev, tag]);
  };

  const deleteTag = (tag: string) => {
    setTags((prev) => [...prev.filter((current) => current !== tag)]);
  };

  const handleSaveAndContinue = () => {
    console.log("Save and continue");
  };

  const handleCreate = () => {
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
  }, []);

  return (
    <Style.Container>
      <div className="buttons-container">
        <BackButton onClick={() => navigate("/dashboard/mealtime-moments")} />
        <Button>Preview</Button>
      </div>

      <Typography variant="h4" as="h4" weight="semi-bold">
        Create mealtime moment
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
        <div className="flex">
          <Tags tags={tags} addTag={addTag} deleteTag={deleteTag} />
        </div>
      </Style.Info>
      <Style.ContentBuilder>
        <MedaltimeMomentTitle
          setTitle={setTitle}
          setDescription={setDescription}
        />
      </Style.ContentBuilder>
      <Style.ActionContainer>
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
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 16px;
    overflow: hidden;
    width: 100%;
    display: flex;
    height: 100%;
    padding: 1rem;
  `,
  ActionContainer: styled.section`
    padding: 2vh 0;
    display: flex;
    justify-content: flex-end;
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
    padding: 1.87vh 1vw;
    position: relative;
    background: #ffffff50;
    border-radius: 0.5rem;
  `,
};
