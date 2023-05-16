import { AnimatePresence, motion } from "framer-motion";
import { useState, WheelEvent } from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/Button";
import { Globe } from "../../../components/Foodways/Globe";
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

  return (
    <>
      <Style.Container
        stops={foodway?.foodwayStops?.length}
        nav={nav}
        onWheel={handleScroll}
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
              <Link to="print">
                <Button variant="yellow">Print</Button>
              </Link>
              <Button
                variant="yellow"
                onClick={() => setShowCalendarModal(true)}
              >
                Add to calendar
              </Button>
              <Button>Publish</Button>
            </div>
          </div>
          <div className="content__body">
            {foodway && (
              <>
                <div className="content__body__left" onWheel={hijackScroll}>
                  <h2>{foodway.title}</h2>

                  <div className="content__body__left__text">
                    <AnimatePresence>
                      <motion.img
                        // src={foodway?.foodwayStops[nav].image}
                        src="/images/chocolate.jpg"
                        key="foodways-image"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, display: "none" }}
                      />
                      {/* {foodway.foodwayStops && (
                    <motion.h3
                    key={foodway.foodwayStops[nav].location}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, display: "none" }}
                    >
                    {foodway?.foodwayStops[nav].location}
                    </motion.h3>
                  )} */}
                      {foodway.foodwayStops && (
                        <motion.p
                          key={foodway?.foodwayStops[nav].description}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0, display: "none" }}
                        >
                          {foodway?.foodwayStops[nav].description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <div className="content__body__right">
                  <div className="content__body__right__globe">
                    <Globe latitude={23} longitude={43} />
                  </div>
                  <div className="content__body__right__timeline">
                    {foodway.foodwayStops &&
                      foodway.foodwayStops.map((_, index) => (
                        <div key={`stop-${index}`} className="stop">
                          <div
                            className={`point ${nav >= index && "active"} ${
                              nav > index && "solid"
                            }`}
                          />
                          {foodway.foodwayStops &&
                            index !== foodway.foodwayStops.length - 1 && (
                              <div
                                className={`line ${nav >= index + 1 && "active"}
                      }`}
                              />
                            )}
                        </div>
                      ))}
                    {foodway.foodwayStops && (
                      <div className="bubble">
                        {foodway.foodwayStops[nav].timePeriod}
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="content__bottom"></div>
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
        display: grid;
        height: calc(100% - 120px);
        grid-template-columns: 5fr 7fr;
        grid-template-rows: 9fr 1fr;

        &__left {
          display: grid;
          grid-template-rows: 100px 1fr;
          overflow: hidden;

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
            justify-content: center;
            background: rgba(255, 255, 255, 0.5);
            box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(59.2764px);
            border-radius: 16px;
            padding: 20px;
            overflow-y: auto;
            max-height: 90%;
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
                `calc(${nav} * (100% / ${stops}) - 9px)`};
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
    }
  `,
};
