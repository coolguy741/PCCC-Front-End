import { useMemo, useState } from "react";
import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";
import styled from "styled-components";
import SwiperType, { Mousewheel, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../../components/Button";
import { PreviewAction } from "../../../components/ContentBuilder/Components/Actions/PreviewAction";
import { FoodwayStop } from "../../../components/Foodways/FoodwayStop";
import { FoodwayTimeline } from "../../../components/Foodways/FoodwayTimeline";
import { FoodwayTitle } from "../../../components/Foodways/FoodwayTitle";
import { BackButton } from "../../../components/Global/BackButton";
import { Spinner } from "../../../components/Global/Spinner";
import { PccServer23SharedIMultiLingualDto1PccServer23FoodwaysPublicFoodwayDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull } from "../../../lib/api/api";
import { useFoodwayStore } from "../../../stores/foodwaysStore";
import { useUIStore } from "../../../stores/uiStore";
import { Language } from "../../types";

export const FoodwaysOverviewPage = () => {
  const response = useRouteLoaderData(
    "foodway",
  ) as PccServer23SharedIMultiLingualDto1PccServer23FoodwaysPublicFoodwayDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull;
  const { lang } = useUIStore();
  const [nav, setNav] = useState(0);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const { setActiveSlide, activeSlide } = useFoodwayStore();
  const navigate = useNavigate();

  const onSlideChange = (swiper: SwiperType) => {
    setActiveSlide(swiper.activeIndex);

    setNav(swiper.activeIndex);
  };

  const foodway = useMemo(() => {
    return response[
      (lang === Language.EN
        ? "english"
        : "french") as keyof PccServer23SharedIMultiLingualDto1PccServer23FoodwaysPublicFoodwayDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
    ];
  }, [response, lang]);

  return (
    <Style.Container>
      <div className="buttons-container">
        <BackButton onClick={() => navigate("/foodways")} />
        <div className="row">
          <Link to="edit">
            <Button variant="yellow">Edit</Button>
          </Link>
          <Button variant="yellow" onClick={() => setShowCalendarModal(true)}>
            Publish
          </Button>
          <Link
            to={`/foodways/${foodway?.id}/${activeSlide}/print`}
            target="_blank"
          >
            <Button variant="yellow">Print</Button>
          </Link>
        </div>
      </div>

      {foodway ? (
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
                allowTouchMove={false}
                className="theme-swiper-slide"
              >
                <SwiperSlide key={`slide-${0}`}>
                  <Style.Content>
                    <FoodwayTitle foodway={foodway} />
                  </Style.Content>
                </SwiperSlide>
                {foodway.foodwayStops &&
                  foodway.foodwayStops.map((stop, index) => {
                    return (
                      <SwiperSlide key={`slide-${index + 1}`}>
                        <Style.Content>
                          <FoodwayStop stop={stop} />
                        </Style.Content>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </Style.Slide>
          </div>
          <div className="timeline">
            {foodway.foodwayStops && (
              <FoodwayTimeline
                totalSlides={foodway.foodwayStops?.length + 1}
                activeSlide={nav}
                foodway={foodway}
              />
            )}
          </div>
        </Style.ContentBuilder>
      ) : (
        <Spinner />
      )}
      <Style.ActionContainer>
        <PreviewAction />
        <div className="scroll-icon">
          <img src="/images/icons/scroll.svg" alt="scroll" width="35" />
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

      .row {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: center;
        align-items: center;

        button {
          margin: 1.2vh 0;
        }
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
    align-items: center;

    .scroll-icon {
      position: absolute;
      left: 50%;
    }
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
