import styled from "styled-components";
import { Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Icon } from "../../components/Global/Icon";
import { CookTogetherTile } from "./CookTogetherTile";
import { DiscoverTogetherTile } from "./DiscoverTogetherTile";
import { FoodwaysTile } from "./FoodwaysTile";
import { FooterTile } from "./FooterTile";
import { GrowTogetherTile } from "./GrowTogetherTile";
import { MadKitchenTile } from "./MadKitchenTile";
import { MealPlannerTile } from "./MealPlannerTile";
import { MealtimeMomentsTile } from "./MealtimeMomentsTile";
import { PowerFullKidsTile } from "./PowerFullKidsTile";

import "swiper/css";
import "swiper/css/pagination";

export const HomePage = () => {
  return (
    <Style.PageContainer className="dashboard-home">
      <Swiper
        slidesPerView={1}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        direction={"vertical"}
        speed={1500}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <PowerFullKidsTile />
        </SwiperSlide>
        <SwiperSlide>
          <DiscoverTogetherTile />
        </SwiperSlide>
        <SwiperSlide>
          <GrowTogetherTile />
        </SwiperSlide>
        <SwiperSlide>
          <CookTogetherTile />
        </SwiperSlide>
        <SwiperSlide>
          <MadKitchenTile />
        </SwiperSlide>
        <SwiperSlide>
          <FoodwaysTile />
        </SwiperSlide>
        <SwiperSlide>
          <MealtimeMomentsTile />
        </SwiperSlide>
        <SwiperSlide>
          <MealPlannerTile />
        </SwiperSlide>
        <SwiperSlide>
          <FooterTile />
        </SwiperSlide>
      </Swiper>
      <Style.ScrollIconContainer>
        <Icon name="scroll" />
      </Style.ScrollIconContainer>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    margin: 0;
    border: 10px solid green;

    .swiper {
      width: calc(100% + 32px);
      height: 100vh;
      left: -32px;
      padding-left: 32px;
      position: relative;
      border: 5px solid yellow;
    }

    .swiper-slide {
      & .image-container.tile-image {
        transform: scale(0.7) translate(0, -50%);
        transition: transform 1s ease-in-out;
      }
      &.swiper-slide-active .image-container.tile-image {
        transform: scale(1) translate(0, -50%);
        transition: transform 1s ease-in-out;
      }
    }

    .swiper-pagination {
      right: 36px;
      width: 16px;
      .swiper-pagination-bullet {
        background: var(--neutral-900);
        opacity: 1;
        width: 8px;
        height: 8px;
        margin: 16px;
        transform: translate(-50%);
        transition: all 0.2s ease-in-out;

        &.swiper-pagination-bullet-active {
          width: 16px;
          height: 16px;
          margin: 16px;
          transform: translate(-50%);
        }
      }
    }
  `,
  MainContent: styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
  `,
  BigText: styled.p`
    font-family: "Open Sans";
    margin: -108px 0px 0px 0px;
    font-family: "Noir Std";
    font-style: normal;
  `,
  ScrollIconContainer: styled.div`
    position: absolute;
    left: calc((100% - 42px) / 2);
    bottom: 45px;
    z-index: 10;
  `,
};
