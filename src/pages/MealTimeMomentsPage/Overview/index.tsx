import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/Button";
import { BackButton } from "../../../components/Global/BackButton";
import { CalendarModal } from "../../../components/Global/CalendarModal";
import { MealtimeMomentTitle } from "../../../components/MealtimeMoment/MealtimeMomentTitle";

export const MealtimeMomentOverviewPage = () => {
  const [showCalendarModal, setShowCalendarModal] = useState(false);

  return (
    <>
      <Style.Container>
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
            </div>
          </div>
          <div className="content__body">
            <MealtimeMomentTitle
              mealtimeMoment={{ title: "Title", info: "Description." }}
            />
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
