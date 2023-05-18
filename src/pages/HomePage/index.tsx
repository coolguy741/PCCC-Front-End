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
import { convertToRelativeUnit } from "../../styles/helpers/convertToRelativeUnits";
import { AnimatedTile } from "./AnimatedTile";
import { dummy_tiles, meal_planner_tile } from "./tile_data";

export const HomePage = () => {
  const user = useUserStore((state) => state.user);

  return (
    <Style.Container className="dashboard-home">
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
      <Style.ScrollIcon>
        <Icon name="scroll" />
      </Style.ScrollIcon>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
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
      right: ${convertToRelativeUnit(36, "vw")};
      width: ${convertToRelativeUnit(16, "vw")};

      .swiper-pagination-bullet {
        background: var(--neutral-900);
        opacity: 1;
        width: ${convertToRelativeUnit(8, "vw")};
        height: ${convertToRelativeUnit(8, "vh")};
        margin: ${convertToRelativeUnit(16, "vh")};
        transform: translate(-50%);
        transition: all 0.5s ease-out;

        &.swiper-pagination-bullet-active {
          width: ${convertToRelativeUnit(16, "vw")};
          height: ${convertToRelativeUnit(16, "vh")};
          margin: ${convertToRelativeUnit(16, "vh")};
          transform: translate(-50%);
        }
      }
    }
  `,
  ScrollIcon: styled.div`
    position: absolute;
    left: calc((100% - ${convertToRelativeUnit(42, "vw")}) / 2);
    bottom: ${convertToRelativeUnit(45, "vh")};
    z-index: 10;
    opacity: 0;
    ${() => dashboardScrollAnimation(2.5, 15, 3)};
  `,
};
