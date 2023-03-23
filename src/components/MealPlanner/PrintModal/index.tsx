import styled from "styled-components";

import { LinkButton } from "../../Global/Button/Link";

interface Props {
  isOpen?: boolean;
  isPlan?: boolean;
  close: () => void;
}

export const PrintModal: React.FC<Props> = ({ isOpen = false, close }) => {
  return isOpen ? (
    <ModalContainer>
      <div className="modal" onClick={close}></div>
      <Modal>
        <ModalHeader>
          <div>Print</div>
          <span onClick={close} className="icon-close">
            x
          </span>
        </ModalHeader>
        <ModalBody>
          <div className="print-modes">
            <div>
              <div>
                <input type="checkbox" />
                <label>Only Recipe</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>EN</label>
                <input type="checkbox" />
                <label>FR</label>
              </div>
            </div>
            <div>
              <div>
                <input type="checkbox" />
                <label>Only Assessment</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>EN</label>
                <input type="checkbox" />
                <label>FR</label>
              </div>
            </div>
            <div>
              <div>
                <input type="checkbox" />
                <label>Recipe and Assessment</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>EN</label>
                <input type="checkbox" />
                <label>FR</label>
              </div>
            </div>
          </div>
          <LinkButton to="/dashboard/meal-planner/1/print">Print</LinkButton>
        </ModalBody>
      </Modal>
    </ModalContainer>
  ) : null;
};

const ModalContainer = styled.div`
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
`;

const Modal = styled.div`
  max-width: 851px;
  position: relative;
  border-radius: 5px;
  z-index: 2;
  width: 90%;
  margin: auto;
  background: #ffffff;
  padding: 5px;
`;
const ModalHeader = styled.div`
  font-size: 1.5rem;
  postition: relative;
  padding: 10px 20px;
  font-weight: 700;
  color: #c4c4c4;

  .icon-close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
  }
`;

const ModalBody = styled.div`
  padding: 10px;

  .print-modes {
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > div {
      border-bottom: 1px solid var(--black);
      display: flex;
      justify-content: space-between;
      &:last-child {
        border-bottom: none;
      }
    }
  }

  a {
    margin-top: 20px;
    float: right;
  }
`;
