import styled from "styled-components";
import { animatedbackgroundGradient } from "../../../styles/helpers/animatedBackgroundGradient";
import { Calendar } from "../../Calendar";
import { TCalendarType } from "./Calendar";

interface Props {
  isOpen?: boolean;
  type?: TCalendarType;
  close: () => void;
}

export const CalendarModal: React.FC<Props> = ({
  isOpen = false,
  type = "plan",
  close,
}) => {
  const handleClick = () => {
    console.log("Click");
  };

  return isOpen ? (
    <Style.ModalContainer>
      <div className="modal" onClick={close}></div>
      <Style.Modal>
        <Style.ModalBody>
          <Calendar
            height="750px"
            dateClick={handleClick}
            buttonText={{
              month: "Month",
              week: "Week",
              day: "Day",
            }}
          />
        </Style.ModalBody>
      </Style.Modal>
    </Style.ModalContainer>
  ) : null;
};

const Style = {
  ModalContainer: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    z-index: 9999;

    .modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      bottom: 0;
      z-index: 1;
      background: var(--black);
      opacity: 0.5;
    }
  `,
  Modal: styled.div`
    position: relative;
    border-radius: 20px;
    z-index: 2;
    width: 70%;
    margin: auto;
    ${() => animatedbackgroundGradient("var(--blue-200)", "#fff9e0")};
    padding: 5px;
  `,
  ModalHeader: styled.div`
    font-size: 1.5rem;
    position: relative;
    padding: 10px 20px;
    font-weight: 700;
    color: #c4c4c4;

    .icon-close {
      position: absolute;
      top: 10px;
      right: 20px;
      cursor: pointer;
    }
  `,
  ModalBody: styled.div`
    padding: 2rem;

    > div {
      width: 100%;
    }

    .calendar-mode {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .selected-day {
        background: var(--black);
        padding: 10px;
        color: var(--white);
      }

      span {
        background: var(--yellow-500);
        padding: 0.5rem;
        &.active {
          background: var(--orange-500);
          color: var(--white);
        }
      }
    }
  `,
};
