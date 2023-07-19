import { useEffect, useMemo } from "react";
import styled from "styled-components";

import { ObjectState } from "../../../components/ContentCreation/types";
import { useContentCreation } from "../../../hooks/useContentCreation";
import { useFoodwayStore } from "../../../stores/foodwaysStore";
import { DoubleClickToEditComponent } from "../DoubleClickToEdit";

interface FoodwayTimelineProps {
  totalSlides: number;
}

export const FoodwayTimeline = ({ totalSlides }: FoodwayTimelineProps) => {
  const { updatePageState, activeSlide, currentLang, en, fr } =
    useFoodwayStore();
  const titleState = useMemo(
    () => [
      { mode: "view", text: "Intro" },
      ...((currentLang === "en" ? en.stops : fr.stops)?.map((stop) => ({
        mode: (stop.componentState as ObjectState)?.timePeriod?.mode || "view",
        text: stop.time || "Edit",
      })) ?? []),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [totalSlides, en, fr, currentLang],
  );

  const {
    changeTimelineEditState,
    timelineChangeText,
    addTimelineStop,
    timelineState,
    setComponentPosition,
  } = useContentCreation(titleState as any, updatePageState);

  useEffect(() => {
    setComponentPosition({ slideIndex: 1, componentIndex: 1 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    addTimelineStop(`stop${totalSlides - 1}`);
  }, [totalSlides]);

  return (
    <Style.Container activeSlide={activeSlide} totalSlides={totalSlides}>
      {totalSlides && (
        <div className="bubble-container">
          <div className="bubble">
            {activeSlide === 0
              ? "Intro"
              : timelineState[
                  `stop${activeSlide}` as keyof typeof timelineState
                ] && (
                  <DoubleClickToEditComponent
                    mode={
                      timelineState[
                        `stop${activeSlide}` as keyof typeof timelineState
                      ].mode
                    }
                    setText={timelineChangeText}
                    changeEditState={changeTimelineEditState}
                    text={
                      timelineState[
                        `stop${activeSlide}` as keyof typeof timelineState
                      ].text
                    }
                    name={`stop${activeSlide}`}
                  />
                )}
          </div>
        </div>
      )}
      {totalSlides &&
        new Array(totalSlides).fill(null).map((_, index) => (
          <div key={`stop-${index}`} className="stop">
            <div
              className={`point ${activeSlide >= index && "active"} ${
                activeSlide > index && "solid"
              }`}
            />
            {totalSlides && index !== totalSlides - 1 && (
              <div className={`line ${activeSlide >= index + 1 && "active"}`} />
            )}
          </div>
        ))}
    </Style.Container>
  );
};

const Style = {
  Container: styled.div<{ totalSlides: number; activeSlide: number }>`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  padding: 1rem 0;

  .stop {
    height: ${({ totalSlides }) => `calc(100% / (${totalSlides} - 1))`};
    display: flex;
    flex-direction: column;
    align-items: center;

    .point {
      width: 15px;
      min-height: 15px;
      border-radius: 8px;
      border: 4px solid var(--neutral-200);
      margin: 4px 0;
      transition .2s all ease-in-out;

      &.solid {
        background-color: var(--blue-500);
        border: 4px solid var(--blue-500);
      }

      &.active {
        border-color: var(--blue-500);
        transition .2s all ease-in-out;
      }
    }

    .line {
      height: 100%;
      width: 3px;
      background-color: var(--neutral-200);
      border-radius: 3px;
      transition .2s all ease-in-out;


      &.active {
        background-color: var(--blue-500);
        transition .2s all ease-in-out;
      }
    }

    
    &:last-child {
      height: 20px;
    }
  }

  .bubble-container {
    position: absolute;
    height: calc(100% - 50px);
    width: 100%;
    padding: inherit;
    
    .bubble {
      position: absolute;
      top: ${({ activeSlide, totalSlides }) =>
        `calc(${activeSlide} * (100% / ${totalSlides - 1}) - 10px)`};
      right: 25px;
      transition: .4s top ease-in-out;
      background-color: var(--blue-300);
      padding: 5px 25px;
      color: var(--blue-500);
      border-radius: 25px;
      font-weight: 600;
      font-size: 22px;
      z-index: 999;
    }
  }`,
};
