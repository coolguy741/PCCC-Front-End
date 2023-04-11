import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Globe } from '../../../components/Foodways/Globe';
import { Button } from '../../../components/Global/Button';
import { CalendarModal } from '../../../components/Global/CalendarModal';

export const FoodwaysPreviewPage = () => {
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  return (
    <>
      <Style.Container>
        <h1>Foodways</h1>
        <div className="content">
          <div className="content__header">
            <Link to="../">
              <Button>Back</Button>
            </Link>
            <div className="content__header__buttons">
              <Link to="../print">
                <Button>Print</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="content__body">
          <h2>Chocolate</h2>
          <div className="content__body__timeline">
            <div className="content__body__timeline__container">
              <div className="content__body__timeline__container--vertical"></div>
              <div className="content__body__timeline__container--vertical"></div>
              <div className="content__body__timeline__container--vertical"></div>
              <div className="content__body__timeline__container--vertical"></div>
              <div className="content__body__timeline__container--vertical"></div>
              <div className="content__body__timeline__container--vertical"></div>
            </div>
            <div className="content__body__timeline--horizontal"></div>
          </div>
          <div className="content__body__main">
            <div className="content__body__main__globe">
              <Globe />
            </div>
            <div className="content__body__main__text">
              <h3>Mesoamerica</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
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
  Container: styled.div`
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

        &__buttons {
          display: flex;
          gap: 1rem;
        }
      }

      &__body {
        display: flex;
        flex-direction: column;

        &__timeline {
          &--horizontal {
            width: 100%;
            min-height: 5px;
            background-color: var(--black);
          }

          &__container {
            display: flex;
            justify-content: space-around;

            &--vertical {
              height: 50px;
              width: 5px;
              background-color: var(--black);
            }
          }
        }

        &__main {
          display: flex;

          &__globe {
            width: 100%;

            div {
              height: 50vh;
            }
          }

          &__text {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }
      }
    }
  `,
};
