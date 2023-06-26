import { BaseSyntheticEvent, useEffect } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import SwiperType, { Mousewheel, Scrollbar } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { useThemeStore } from "../../../stores/themeStore";
import { Icon } from "../../Global/Icon";

const SlideOnUpdate = ({ totalSlides }: { totalSlides: number }) => {
  const swiper = useSwiper();

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(totalSlides);
    }
  }, [totalSlides, swiper]);

  return null;
};

export const ContentTemplate: React.FC<{
  editable?: boolean;
  handleDelete?: (event: BaseSyntheticEvent) => void;
}> = ({ editable = true, handleDelete }) => {
  const { setSlideIndex, theme, currentStep } = useThemeStore();

  const onSlideChange = (swiper: SwiperType) => {
    setSlideIndex(swiper.activeIndex);
  };

  return (
    <Swiper
      slidesPerView={1}
      mousewheel={true}
      scrollbar={{
        hide: true,
      }}
      pagination={false}
      effect="fade"
      onSlideChange={onSlideChange}
      direction={"vertical"}
      speed={500}
      modules={[Mousewheel, Scrollbar]}
      className="theme-swiper-slide"
    >
      {theme[currentStep].slides.map((slide, sIndex) => (
        <SwiperSlide key={`slide-${sIndex}`}>
          <Style.ContentWrapper>
            <Style.Content>
              {editable &&
                Array.from({ length: 6 }).map((value, index) => (
                  <Droppable
                    droppableId={`grid-drop-${sIndex}-${index}`}
                    key={`grid-test-${sIndex}-${index}`}
                  >
                    {(dropProvided) => (
                      <>
                        <div
                          {...dropProvided.droppableProps}
                          ref={dropProvided.innerRef}
                          style={{
                            background: "var(--blue-500)",

                            opacity: 0.15,
                            borderRadius: "1rem",
                          }}
                        />
                        <span style={{ display: "none" }}>
                          {dropProvided.placeholder}
                        </span>
                      </>
                    )}
                  </Droppable>
                ))}
              {slide?.map(
                ({ width, height, x, y, component, componentState }, index) => (
                  <Style.Component
                    key={`column-${index}`}
                    {...{
                      width,
                      height,
                      x,
                      y,
                    }}
                  >
                    {!!handleDelete && (
                      <div className="delete-button-container">
                        <Style.DeleteButton>
                          <Icon
                            name="trash"
                            onClick={handleDelete}
                            id={`${x},${y}`}
                          />
                        </Style.DeleteButton>
                      </div>
                    )}
                    {component({
                      slideIndex: sIndex,
                      componentIndex: index,
                      componentState,
                    })}
                  </Style.Component>
                ),
              )}
            </Style.Content>
          </Style.ContentWrapper>
        </SwiperSlide>
      ))}
      <SlideOnUpdate totalSlides={theme[currentStep].slides.length} />
    </Swiper>
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
