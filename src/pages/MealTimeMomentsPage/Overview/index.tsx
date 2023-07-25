import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import Button from "../../../components/Button";
import { MealtimeMomentTitle } from "../../../components/ContentCreation/MealtimeMomentTitle";
import { BackButton } from "../../../components/Global/BackButton";
import { CalendarModal } from "../../../components/Global/CalendarModal";
import { useFetch } from "../../../hooks/useFetch";
import { PccServer23SharedIMultiLingualDto1PccServer23MealtimeMomentsPublicMealtimeMomentDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull } from "../../../lib/api/api";
import { useMealtimeMomentsStore } from "../../../stores/mealtimeMomentsStore";
import { useUIStore } from "../../../stores/uiStore";

export const MealtimeMomentOverviewPage = () => {
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const { id } = useParams();
  const { isLoading, data } =
    useFetch<PccServer23SharedIMultiLingualDto1PccServer23MealtimeMomentsPublicMealtimeMomentDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull>(
      "appMealtimeMomentsDetail",
      {},
      undefined,
      true,
      id as string,
    );
  const { lang } = useUIStore();
  const { setDetail, ...state } = useMealtimeMomentsStore();

  useEffect(() => {
    data && setDetail(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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
                <Button variant="yellow" disabled={isLoading || !data}>
                  Edit
                </Button>
              </Link>
              <Button disabled={isLoading || !data} variant="yellow">
                Publish
              </Button>
              <Link to="print" target="_blank">
                <Button disabled={isLoading || !data} variant="yellow">
                  Print
                </Button>
              </Link>
            </div>
          </div>
          <div className="content__body">
            <MealtimeMomentTitle
              state={state[lang].componentState}
              isEditable={false}
            />
          </div>
          <div className="content__bottom">
            <div className="popup">
              <img
                src={state[lang]?.image}
                alt={state[lang]?.title}
                width="80"
              />
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
