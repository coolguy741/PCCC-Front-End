import { AnimatePresence, motion } from "framer-motion";
import { useState, WheelEvent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/Button";
import { Globe } from "../../../components/Foodways/Globe";
import { CalendarModal } from "../../../components/Global/CalendarModal";

const MOCK_DATA = {
  title: "Chocolate",
  stops: [
    {
      description:
        "Chocolate cake and ice cream are some of the things that come to mind when we think of chocolate. Believe it or not, chocolate was first enjoyed as a bitter drink with no sugar added!",
      year: "1200",
      image: "/images/chocolate.jpg",
      latitude: 4.5709,
      longitude: 74.2973,
    },
    {
      location: "Mesoamerica",
      description:
        "Chocolate cake and ice cream are some of the things that come to mind when we think of chocolate. Believe it or not, chocolate was first enjoyed as a bitter drink with no sugar added!",
      year: "1300",
      image: "/images/chocolate2.png",
      latitude: 44.5709,
      longitude: 7.2973,
    },
    {
      location: "Europe",
      description:
        "Chocolate is made from the seeds of cacao trees, which are native to South America. The scientific name, Theobroma cacao, means “food of the gods”, but the Aztec word, “xocolatl” was probably the origin of the word chocolate. Xocolatl was a drink made from cacao beans that was prized among the upper class. In fact, in the Aztec culture, cacao beans were considered more valuable than gold and were used as currency.",
      year: "1400",
      image: "/images/chocolate.jpg",
      latitude: 51.1657,
      longitude: 10.4515,
    },
    {
      location: "Britain",
      description:
        "Chocolate cake and ice cream are some of the things that come to mind when we think of chocolate. Believe it or not, chocolate was first enjoyed as a bitter drink with no sugar added!",
      year: "1700",
      image: "/images/chocolate2.png",
      latitude: 51,
      longitude: -0.1,
    },
    {
      description:
        "Chocolate is made from the seeds of cacao trees, which are native to South America. The scientific name, Theobroma cacao, means “food of the gods”, but the Aztec word, “xocolatl” was probably the origin of the word chocolate. Xocolatl was a drink made from cacao beans that was prized among the upper class. In fact, in the Aztec culture, cacao beans were considered more valuable than gold and were used as currency.",
      year: "1850",
      image: "/images/chocolate.jpg",
      latitude: 4.5709,
      longitude: 74.2973,
    },
  ],
};

export const FoodwaysOverviewPage = () => {
  const [nav, setNav] = useState(0);
  const [showCalendarModal, setShowCalendarModal] = useState(false);

  const handleScroll = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      if (nav >= MOCK_DATA.stops.length - 1) {
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
  };

  const hijackScroll = (e: WheelEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <Style.Container
        stops={MOCK_DATA.stops.length}
        nav={nav}
        onWheel={handleScroll}
      >
        <div className="content">
          <div className="content__header">
            <Link to="../">
              <span>Back</span>
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
            <div className="content__body__left" onWheel={hijackScroll}>
              <h2>{MOCK_DATA.title}</h2>

              <div className="content__body__left__text">
                <AnimatePresence>
                  <motion.img
                    src={MOCK_DATA.stops[nav].image}
                    key={MOCK_DATA.stops[nav].image}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, display: "none" }}
                  />
                  {MOCK_DATA.stops[nav].location && (
                    <motion.h3
                      key={MOCK_DATA.stops[nav].location}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, display: "none" }}
                    >
                      {MOCK_DATA.stops[nav].location}
                    </motion.h3>
                  )}
                  <motion.p
                    key={MOCK_DATA.stops[nav].description}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, display: "none" }}
                  >
                    {MOCK_DATA.stops[nav].description}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
            <div className="content__body__right">
              <div className="content__body__right__globe">
                <Globe
                  latitude={MOCK_DATA.stops[nav].latitude}
                  longitude={MOCK_DATA.stops[nav].longitude}
                />
              </div>
              <div className="content__body__right__timeline">
                {MOCK_DATA.stops.map((_, index) => (
                  <div key={`stop-${index}`} className="stop">
                    <div
                      className={`point ${nav >= index && "active"} ${
                        nav > index && "solid"
                      }`}
                    />
                    {index !== MOCK_DATA.stops.length - 1 && (
                      <div
                        className={`line ${nav >= index + 1 && "active"}
                  }`}
                      />
                    )}
                  </div>
                ))}
                <div className="bubble">{MOCK_DATA.stops[nav].year}</div>
              </div>
            </div>
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
  Container: styled.div<{ stops: number; nav: number }>`
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
