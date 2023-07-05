import { BaseSyntheticEvent, useEffect } from "react";
import styled from "styled-components";
import SwiperType, { Mousewheel, Scrollbar } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FoodwayStop as FoodwayStopType } from "../../../../pages/types";
import { State } from "../../../ContentCreation/types";
import { FoodwayStop } from "../../../Foodways/FoodwayStop";
import { FoodwayTimelinePreview } from "../../../Foodways/FoodwayTimelinePreview";
import { FoodwayTitle } from "../../../Foodways/FoodwayTitle";

const SlideOnUpdate = ({ totalSlides }: { totalSlides: number }) => {
  const swiper = useSwiper();

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(totalSlides);
    }
  }, [totalSlides, swiper]);

  return null;
};

export const FoodwaysContentTemplate: React.FC<{
  isEditable?: boolean;
  slides: FoodwayStopType[];
  setSlideIndex: (slideIndex: number) => void;
  handleDelete?: (event: BaseSyntheticEvent) => void;
  updatePageState?: (slideIndex: number, index: number, state: State) => void;
  title: string;
  description: string;
  nav: number;
}> = ({
  isEditable = true,
  handleDelete,
  slides,
  setSlideIndex,
  updatePageState,
  title,
  description,
  nav,
}) => {
  const onSlideChange = (swiper: SwiperType) => {
    setSlideIndex(swiper.activeIndex);
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        mousewheel={true}
        pagination={false}
        effect="fade"
        onSlideChange={onSlideChange}
        direction={"vertical"}
        speed={500}
        modules={[Mousewheel, Scrollbar]}
        className="content-swiper-slide"
      >
        <SwiperSlide>
          <Style.ContentWrapper>
            <Style.Content>
              <FoodwayTitle foodway={{ title: title, info: description }} />
            </Style.Content>
          </Style.ContentWrapper>
        </SwiperSlide>

        {slides?.map((slide, index) => {
          return (
            <SwiperSlide key={`slide-${index}`}>
              <Style.ContentWrapper>
                <Style.Content>
                  <FoodwayStop
                    stop={{
                      location: slide.location ? slide.location[index] : "",
                      description: slide.description
                        ? slide.description[index]
                        : "",
                      timePeriod: slide.timePeriod
                        ? slide.timePeriod[index]
                        : "",
                    }}
                  />
                </Style.Content>
              </Style.ContentWrapper>
            </SwiperSlide>
          );
        })}
        {isEditable && <SlideOnUpdate totalSlides={slides.length} />}
      </Swiper>
      <FoodwayTimelinePreview
        totalSlides={slides.length + 1}
        activeSlide={nav}
        slides={slides}
      />
    </>
  );
};

const Style = {
  ContentWrapper: styled.section`
    display: flex;
    height: 100%;
  `,

  Content: styled.div`
    flex: 1;
    width: 100%;
    margin: 0.5vh 0;
    padding: 1.87vh 1vw;
    column-gap: 1.7%;
    row-gap: 3.2%;
    position: relative;
    border-radius: 0.5rem;
    .grid {
      height: 100%;
      background: gray;
    }
  `,
  Component: styled.div.attrs(
    (props: { width: number; height: number; x: number; y: number }) => ({
      width: props.width ?? 1,
      height: props.height ?? 1,
      x: props.x ?? 0,
      y: props.y ?? 0,
    }),
  )`
    position: absolute;
    left: ${(props) => props.x * 33 + 1.3}%;
    height: ${(props) => props.height * 46.2}%;
    top: ${(props) => props.y * 49 + 2.5}%;
    width: ${(props) => props.width * 31.5 + props.width - 1}%;
    border-radius: 1rem;

    .delete-button-container {
      position: relative;
    }
  `,
  DeleteButton: styled.button`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
  `,
};
