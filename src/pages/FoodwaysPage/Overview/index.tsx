import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/Button";
import { Globe } from "../../../components/Foodways/Globe";
import { BackButton } from "../../../components/Global/BackButton";
import { CalendarModal } from "../../../components/Global/CalendarModal";

const MOCK_DATA = {
  title: "Chocolate",
  stops: [
    {
      location: "Mesoamerica",
      description:
        "Lorem ipsum dolor sit amet. Est fugit consequatur aut maxime nobis sit quaerat nobis ea omnis distinctio quo quas quas et inventore aspernatur ut nihil fugiat. Ut quod amet aut blanditiis nobis sit quis amet. Et ullam consequatur vel vero repudiandae non blanditiis voluptatem? Id vitae reiciendis qui obcaecati veniam et quos libero. Ut eaque doloremque et aspernatur architecto aut animi amet. Ab cupiditate quibusdam et distinctio sint quo quae quasi non omnis modi sed velit praesentium.",
      year: "1200",
      image: "/images/chocolate.jpg",
    },
    {
      location: "Colombia",
      description:
        "Lorem ipsum dolor sit amet. Est fugit consequatur aut maxime nobis sit quaerat nobis ea omnis distinctio quo quas quas et inventore aspernatur ut nihil fugiat. Ut quod amet aut blanditiis nobis sit quis amet. Et ullam consequatur vel vero repudiandae non blanditiis voluptatem? Id vitae reiciendis qui obcaecati veniam et quos libero. Ut eaque doloremque et aspernatur architecto aut animi amet. Ab cupiditate quibusdam et distinctio sint quo quae quasi non omnis modi sed velit praesentium. Id vitae reiciendis qui obcaecati veniam et quos libero. Ut eaque doloremque et aspernatur architecto aut animi amet. Ab cupiditate quibusdam et distinctio sint quo quae quasi non omnis modi sed velit praesentium.",
      year: "1300",
      image: "/images/chocolate.jpg",
    },
    {
      location: "Mesoamerica",
      description:
        "Lorem ipsum dolor sit amet. Est fugit consequatur aut maxime nobis sit quaerat nobis ea omnis distinctio quo quas quas et inventore aspernatur ut nihil fugiat. Ut quod amet aut blanditiis nobis sit quis amet. Et ullam consequatur vel vero repudiandae non blanditiis voluptatem? Id vitae reiciendis qui obcaecati veniam et quos libero. Ut eaque doloremque et aspernatur architecto aut animi amet. Ab cupiditate quibusdam et distinctio sint quo quae quasi non omnis modi sed velit praesentium.",
      year: "1400",
      image: "/images/chocolate.jpg",
    },
    {
      location: "Colombia",
      description:
        "Lorem ipsum dolor sit amet. Est fugit consequatur aut maxime nobis sit quaerat nobis ea omnis distinctio quo quas quas et inventore aspernatur ut nihil fugiat. Ut quod amet aut blanditiis nobis sit quis amet. Et ullam consequatur vel vero repudiandae non blanditiis voluptatem? Id vitae reiciendis qui obcaecati veniam et quos libero. Ut eaque doloremque et aspernatur architecto aut animi amet. Ab cupiditate quibusdam et distinctio sint quo quae quasi non omnis modi sed velit praesentium. Id vitae reiciendis qui obcaecati veniam et quos libero. Ut eaque doloremque et aspernatur architecto aut animi amet. Ab cupiditate quibusdam et distinctio sint quo quae quasi non omnis modi sed velit praesentium.",
      year: "1500",
      image: "/images/chocolate.jpg",
    },
    {
      location: "Mesoamerica",
      description:
        "Lorem ipsum dolor sit amet. Est fugit consequatur aut maxime nobis sit quaerat nobis ea omnis distinctio quo quas quas et inventore aspernatur ut nihil fugiat. Ut quod amet aut blanditiis nobis sit quis amet. Et ullam consequatur vel vero repudiandae non blanditiis voluptatem? Id vitae reiciendis qui obcaecati veniam et quos libero. Ut eaque doloremque et aspernatur architecto aut animi amet. Ab cupiditate quibusdam et distinctio sint quo quae quasi non omnis modi sed velit praesentium.",
      year: "1700",
      image: "/images/chocolate.jpg",
    },
    {
      location: "Colombia",
      description:
        "Lorem ipsum dolor sit amet. Est fugit consequatur aut maxime nobis sit quaerat nobis ea omnis distinctio quo quas quas et inventore aspernatur ut nihil fugiat. Ut quod amet aut blanditiis nobis sit quis amet. Et ullam consequatur vel vero repudiandae non blanditiis voluptatem? Id vitae reiciendis qui obcaecati veniam et quos libero. Ut eaque doloremque et aspernatur architecto aut animi amet. Ab cupiditate quibusdam et distinctio sint quo quae quasi non omnis modi sed velit praesentium. Id vitae reiciendis qui obcaecati veniam et quos libero. Ut eaque doloremque et aspernatur architecto aut animi amet. Ab cupiditate quibusdam et distinctio sint quo quae quasi non omnis modi sed velit praesentium.",
      year: "1850",
      image: "/images/chocolate.jpg",
    },
  ],
};

export const FoodwaysOverviewPage = () => {
  const [nav, setNav] = useState(0);
  const [showCalendarModal, setShowCalendarModal] = useState(false);

  const handleScroll = (e: any) => {
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
        </div>
        <div className="content__body">
          <div className="content__body__left">
            <h2>{MOCK_DATA.title}</h2>
            <div className="content__body__left__text">
              <img src={MOCK_DATA.stops[nav].image} />
              <h3>{MOCK_DATA.stops[nav].location}</h3>
              <p>{MOCK_DATA.stops[nav].description}</p>
            </div>
          </div>
          <div className="content__body__right">
            <div className="content__body__right__globe">
              <Globe />
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
    display: flex;
    flex-direction: column;

    .content {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      &__header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin: 0 0 40px;

        &__buttons {
          display: flex;
          gap: 1rem;
        }
      }

      &__body {
        display: flex;
        min-height: 500px;
        height: 100%;

        &__left {
          width: 40%;
          display: flex;
          flex-direction: column;
          gap: 20px;

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
            /* max-height: 400px; */
          }
        }

        &__right {
          display: flex;
          width: 60%;

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

            div {
              height: 50vh;
            }
          }
        }
      }
    }
  `,
};
