import styled from "styled-components";

import { AssessmentCalendar } from "./AssessmentCalendar";

interface Props {
  isOpen?: boolean;
  close: () => void;
}

export const CalendarModal: React.FC<Props> = ({ isOpen = false, close }) => {
  return isOpen ? (
    <Style.ModalContainer>
      <div className="modal" onClick={close}></div>
      <Style.Modal>
        <Style.ModalHeader>
          <div>Select the day you would like to add your recipe</div>
          <span onClick={close} className="icon-close">
            x
          </span>
        </Style.ModalHeader>
        <Style.ModalBody>
          <div className="calendar-mode">
            <div className="selected-day">Monday 20</div>
            <div>
              <span>Day</span>
              <span>Week</span>
              <span className="active">Month</span>
            </div>
          </div>
          <AssessmentCalendar />
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

    .modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      bottom: 0;
      z-index: 1;
      background: #000000;
      opacity: 0.5;
    }
  `,
  Modal: styled.div`
    max-width: 851px;
    position: relative;
    border-radius: 5px;
    z-index: 2;
    width: 90%;
    margin: auto;
    background: #ffffff;
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
    padding: 10px;

    .calendar-mode {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .selected-day {
        background: var(--black);
        padding: 10px;
        color: #ffffff;
      }

      span {
        background: var(--yellow);
        padding: 0.5rem;
        &.active {
          background: var(--orange);
          color: #ffffff;
        }
      }
    }
  `,
};
