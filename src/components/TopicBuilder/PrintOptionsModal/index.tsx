import { ChangeEvent, useState } from "react";
import styled from "styled-components";

import { LinkButton } from "../../Global/Button/Link";

interface Props {
  isOpen?: boolean;
  id?: string;
  close: () => void;
}

export const PrintOptionsModal: React.FC<Props> = ({
  isOpen = false,
  id,
  close,
}) => {
  const [printOption, setPrintOption] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    setPrintOption(value);
  };
  return isOpen ? (
    <Style.ModalContainer>
      <div className="modal" onClick={close}></div>
      <Style.Modal>
        <Style.ModalHeader>
          <div>Print</div>
          <span onClick={close} className="icon-close">
            x
          </span>
        </Style.ModalHeader>
        <Style.ModalBody>
          <div className="print-modes">
            <div>
              <div>
                <input
                  type="radio"
                  onChange={handleChange}
                  name="print"
                  value="topic"
                />
                <label>Only Topic intro</label>
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
                <input
                  type="radio"
                  onChange={handleChange}
                  name="print"
                  value="overview"
                />
                <label>Only Topic overview</label>
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
                <input
                  type="radio"
                  onChange={handleChange}
                  name="print"
                  value="educator-notes"
                />
                <label>Only Educator notes</label>
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
                <input
                  type="radio"
                  onChange={handleChange}
                  name="print"
                  value="assessment"
                />
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
                <input
                  type="radio"
                  onChange={handleChange}
                  name="print"
                  value="activities"
                />
                <label>Only Activities</label>
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
                <input
                  type="radio"
                  onChange={handleChange}
                  name="print"
                  value="recipes"
                />
                <label>Only Recipes</label>
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
                <input
                  type="radio"
                  onChange={handleChange}
                  name="print"
                  value="all"
                />
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
          <LinkButton to={`/dashboard/topics/${id}/${printOption}/print`}>
            Print
          </LinkButton>
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
      background: var(--black);
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
    background: var(--white);
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
  `,
};
