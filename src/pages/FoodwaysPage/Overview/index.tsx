import { useState, WheelEvent } from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/Button";
import { FoodwayStop } from "../../../components/Foodways/FoodwayStop";
import { FoodwayTitle } from "../../../components/Foodways/FoodwayTitle";
import { BackButton } from "../../../components/Global/BackButton";
import { CalendarModal } from "../../../components/Global/CalendarModal";
import { PccServer23FoodwaysFoodwayDto } from "../../../lib/api/api";

export const FoodwaysOverviewPage = () => {
  const foodway = useRouteLoaderData(
    "foodway",
  ) as PccServer23FoodwaysFoodwayDto;
  const [nav, setNav] = useState(0);
  const [showCalendarModal, setShowCalendarModal] = useState(false);

  const handleScroll = (e: WheelEvent) => {
    if (foodway.foodwayStops) {
      if (e.deltaY > 0) {
        if (nav >= foodway.foodwayStops.length - 1) {
          return;
        } else {
          setNav(nav + 1);
        }
      }
      if (e.deltaY < 0) {
        if (nav === 0) {
          return;
        } else {
          setNav(nav - 1);
        }
      }
    }
  };

  const hijackScroll = (e: WheelEvent) => {
    e.stopPropagation();
  };

  const handleNext = () => {
    if (foodway.foodwayStops) {
      if (nav < foodway?.foodwayStops?.length) {
        setNav((nav) => nav + 1);
      }
    }
  };

  return (
    <>
      <Style.Container
        stops={foodway?.foodwayStops?.length}
        nav={nav}
        // onWheel={handleScroll}
      >
        <div className="content">
          <div className="content__header">
            <Link to="../">
              <BackButton />
            </Link>
            <div className="content__header__buttons">
              <Link to="edit">
                <Button variant="yellow">Edit</Button>
              </Link>
              <Button variant="yellow">Publish</Button>
              <Link to="print">
                <Button variant="yellow">Print</Button>
              </Link>
              {/* <Button
                variant="yellow"
                onClick={() => setShowCalendarModal(true)}
              >
                Add to calendar
              </Button> */}
            </div>
          </div>
          <div className="content__body">
            {foodway && (
              <>
                {nav === 0 ? (
                  <FoodwayTitle foodway={foodway} />
                ) : (
                  <FoodwayStop nav={nav} foodway={foodway} />
                )}
              </>
            )}
          </div>
          <div className="content__bottom">
            <div className="popup">
              <img src="/images/icons/info.svg" width="80" />
              <p>
                Learn more about gardening in{" "}
                <span>The places you will grow!</span> or check out this fun
                activity <span>Plant a seed, feed yourself!</span>
              </p>
            </div>
            <img className="scroll" src="/images/icons/scroll.svg" width="35" />
            <Button onClick={handleNext}>Next</Button>
          </div>
        </div>
      </Style.Container>
      <CalendarModal
        isOpen={showCalendarModal}
        type="foodways"
        close={() => setShowCalendarModal(false)}
      />
    </>
  );
};

const Style = {
  Container: styled.div<{ stops: number | undefined; nav: number }>`
    overflow-y: hidden;

    .content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      flex-grow: 1;
      overflow-y: hidden;

      &__header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        /* margin: 0 0 40px; */

        &__buttons {
          display: flex;
          gap: 1rem;
        }
      }

      &__body {
        height: 60vh;
        position: relative;
        width: 100%;

        &__left {
          overflow: hidden;
          height: 100%;

          h2 {
            background: linear-gradient(
              182.85deg,
              #ffeb99 2.47%,
              #f3d03e 97.72%
            );
            box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(59.2764px);
            border-radius: 16px;
            height: 80px;
            font-size: 40px;
            display: flex;
            align-items: center;
            padding: 20px;
          }

          &__text {
            display: flex;
            flex-direction: column;
            background: rgba(255, 255, 255, 0.5);
            box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(59.2764px);
            border-radius: 16px;
            padding: 20px;
            overflow-y: auto;
            height: 100%;
            gap: 1rem;
          }
        }

        &__right {
          display: flex;

          &__timeline {
            height: 100%;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: center;
            position: relative;

            .stop {
              height: ${({ stops }) => `calc(100% / (${stops} - 1))`};
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

            .bubble {
              position: absolute;
              top: ${({ nav, stops }) =>
                `calc(${nav - 1} * (100% / (${stops} - 1)) - (${
                  nav - 1
                } * 10px) - 9px)`};
              left: -120px;
              transition: .4s top ease-in-out;
              background-color: var(--blue-300);
              padding: 5px 25px;
              color: var(--blue-500);
              border-radius: 25px;
              font-weight: 600;
              font-size: 22px;
            }
          }

          &__globe {
            width: 100%;
          }
        }
      }

      &__bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 10vh;
        padding: 1rem;
        position: relative;

        .scroll {
          position: absolute;
          left: 50%;
        }

        .popup {
          display: flex;
          width: 35rem;
          background: rgba(255, 255, 255, 0.5);
          box-shadow: 0px 7.78814px 19.4703px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(59.2764px);
          border-radius: 16px;
          padding: 1rem 2rem 1rem 1rem;
          gap: 1rem;
           
          p {
            span {
              color: var(--orange-500);
              font-weight: 600;
            }
          }
        }
      }
    }
  `,
};
