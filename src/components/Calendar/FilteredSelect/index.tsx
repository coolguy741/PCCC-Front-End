import { Dispatch, SetStateAction, useEffect } from "react";
import styled from "styled-components";
import { Checkbox } from "../../Global/Checkbox";
import { Input } from "../../Global/Input";

interface FilteredSelectProps {
  position: string;
  isOpen: boolean;
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const MOCK_GROUPS = [
  "Group A",
  "Group B",
  "Group C",
  "Group D",
  "Group E",
  "Group F",
  "Group G",
  "Group H",
];

export const FitleredSelect = ({
  position,
  isOpen,
  modalOpen,
  setModalOpen,
}: FilteredSelectProps) => {
  useEffect(() => {
    if (!isOpen) setModalOpen(false);
  }, [isOpen]);

  return (
    <>
      <Style.Input
        onClick={(e) => {
          e.stopPropagation();
          setModalOpen((modalOpen: boolean) => !modalOpen);
        }}
      >
        <span>—</span>
        <span>
          <img src="/icons/downSelect.svg" alt="select" />{" "}
        </span>
        {modalOpen && (
          <Style.Modal position={position} onClick={(e) => e.stopPropagation()}>
            <Input placeholder="Search" height="3rem" />
            <div className="groups">
              {MOCK_GROUPS.map((group) => (
                <>
                  <div>
                    <div className="group">
                      <Checkbox sizeOption="small" />
                      {group}
                    </div>
                    <div className="divider" />
                  </div>
                </>
              ))}
            </div>
          </Style.Modal>
        )}
      </Style.Input>
    </>
  );
};

const Style = {
  Input: styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    cursor: pointer;

    span {
      padding: 0 1rem;
      user-select: none;
    }
  `,
  Modal: styled.div.attrs((props: { position: string }) => ({
    position: props.position,
  }))`
    position: absolute;
    ${({ position }) => `${position}: 3rem;`}
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 200px;
    background: #ffffff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 8px;
    padding: 0.5rem;
    gap: 1rem;

    .groups {
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      padding: 0 0.5rem;

      div {
        .group {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1rem;
          padding: 0.5rem 0;
        }

        .divider {
          border-bottom: 1px solid var(--neutral-100);
        }
      }
    }
  `,
};
