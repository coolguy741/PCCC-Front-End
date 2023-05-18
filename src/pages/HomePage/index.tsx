import styled from "styled-components";
import { Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Icon } from "../../components/Global/Icon";
import { FooterTile } from "./FooterTile";
import { PowerFullKidsTile } from "./PowerFullKidsTile";

import "swiper/css";
import "swiper/css/pagination";
import { useUserStore } from "../../stores/userStore";
import { dashboardScrollAnimation } from "../../styles/animations/dashboardScroll";
import { AnimatedTile } from "./AnimatedTile";
import { dummy_tiles, meal_planner_tile } from "./tile_data";

export const HomePage = () => {
  const user = useUserStore((state) => state.user);

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
        {dummy_tiles.map((tile) => (
          <SwiperSlide>
            <AnimatedTile key={tile.titleFirstLine} tile={tile} />
          </SwiperSlide>
        ))}
        {!!user && (
          <SwiperSlide>
            <AnimatedTile tile={meal_planner_tile} />
          </SwiperSlide>
        )}
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

    .swiper {
      width: 100%;
      height: 100vh;
      position: relative;
    }

    .swiper-slide {
      & .image-container {
        transform: scale(0.7) translate(0, -5%);
        transition: transform 1.5s ease-in;
      }

      &.swiper-slide-active .image-container {
        transform: scale(1) translate(0, -5%);
        transition: transform 1.5s ease-in;
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
        transition: all 0.5s ease-out;

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
    opacity: 0;
    ${() => dashboardScrollAnimation(2.5, 15, 3)};
  `,
};
