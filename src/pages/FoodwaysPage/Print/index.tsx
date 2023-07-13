import styled from "styled-components";
import { Globe } from "../../../components/Foodways/Globe";

export const FoodwaysPrintPage = () => {
  return (
    <Style.Container>
      <h1>Foodways</h1>
      <h2>Chocolate</h2>
      <div className="content">
        <div className="content__body">
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
              <Globe disableDrag disableMarker disableSoftOrbit />
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
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      margin-bottom: 5rem;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      max-width: 90%;

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
