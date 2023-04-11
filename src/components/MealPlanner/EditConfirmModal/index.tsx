import styled from 'styled-components';

import { Button } from '../../Global/Button';

interface Props {
  isOpen?: boolean;
  isPlan?: boolean;
  close: () => void;
}

export const EditConfirmModal: React.FC<Props> = ({
  isOpen = false,
  close,
}) => {
  return isOpen ? (
    <Style.ModalContainer>
      <div className="modal" onClick={close}></div>
      <Style.Modal>
        <Style.ModalHeader>
          <div>Attention</div>
          <span onClick={close} className="icon-close">
            x
          </span>
        </Style.ModalHeader>
        <Style.ModalBody>
          <div>
            You are about to leave the Meal Planner. Would you like to save your
            changes to your schedule before proceeding?
          </div>
        </Style.ModalBody>
        <Style.ModalFooter>
          <Button onClick={close}>Yes</Button>
          <Button onClick={close}>No</Button>
        </Style.ModalFooter>
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
    max-width: 500px;
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
    padding: 30px;

    & div {
      margin-bottom: 30px;
    }
  `,
  ModalFooter: styled.div`
    padding: 20px;
    display: flex;
    gap: 20px;
  `,
};
