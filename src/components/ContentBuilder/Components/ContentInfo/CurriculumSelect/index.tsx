import { useState } from "react";
import styled from "styled-components";

import { convertToRelativeUnit } from "../../../../../styles/helpers/convertToRelativeUnits";
import { SelectOption } from "../../../../Global/DropdownSelect";
import { Icon } from "../../../../Global/Icon";

interface Props {
  placeholder?: string;
  options: SelectOption[];
  selectedValue?: string;
  onChange: (value: string) => void;
  height?: string;
  width?: string;
  className?: string;
}

export const CurriculumSelect: React.FC<Props> = ({
  placeholder,
  options,
  selectedValue = "",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: SelectOption) => {
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <Style.Container>
      {isOpen && (
        <Style.SelectWrapper
          onClick={() => {
            setIsOpen(false);
          }}
        />
      )}
      <label>Select Curriculum</label>
      <Style.SelectContainer isOpen={isOpen}>
        <div className="selected-value" onClick={handleToggle}>
          {/* <input type="hidden" {...register()} /> */}
          <div className="text">
            {!selectedValue && placeholder && (
              <span className="placeholder">{placeholder}</span>
            )}
            {selectedValue && (
              <span>
                {
                  options.filter((option) => option.value === selectedValue)[0]
                    ?.label
                }
              </span>
            )}
          </div>
          <Icon name="downSelect" height={"34%"} />
        </div>
        {isOpen && (
          <Style.Options>
            {options.map((option, index) => (
              <div
                key={index}
                className={`option ${
                  selectedValue === option.value ? "active" : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                <div className="icon">
                  {selectedValue === option.value && <Icon name="check" />}
                </div>
                {option.label ? option.label : ""}
              </div>
            ))}
          </Style.Options>
        )}
      </Style.SelectContainer>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    height: 100%;
    display: flex;
    width: 100%;
    min-width: 352px;
    align-items: center;
    & > label {
      margin-right: 1.5rem;
      white-space: nowrap;
      color: var(--neutral-600);
    }
  `,
  SelectContainer: styled.div<{ isOpen: boolean }>`
    position: relative;
    z-index: ${(props) => (props.isOpen ? 100 : 98)};
    width: 100%;
    background: #ffffff50;
    height: 100%;
    transition: box-shadow 0.3s ease-out 0s, border-color 0.3s ease-in 0s;
    border-radius: 8px;
    border: ${(props) =>
      props.isOpen ? "1px solid var(--blue-500)" : "1px solid white"};

    .border-blue__active {
      border: ${convertToRelativeUnit(1, "vh")} solid var(--blue-500);
    }

    .selected-value {
      height: 100%;
      border-radius: 8px;
      font-weight: 400;
      color: #1d2433;
      padding-left: 1vw;
      cursor: pointer;
      display: flex;
      align-items: center;

      .text {
        flex-grow: 1;

        .placeholder {
          color: var(--neutral-600);
        }
      }
    }
  `,
  SelectWrapper: styled.div`
    position: fixed;
    top: 0;
    z-index: 99;
    left: 0;
    right: 0;
    bottom: 0;
  `,
  Options: styled.div`
    position: absolute;
    background: #ffffff50;
    backdrop-filter: blur(118px);
    width: 100%;
    z-index: 101;
    top: 110%;
    border-radius: 0.5rem;
    cursor: pointer;
    max-height: 15vh;
    overflow-y: auto;

    .option {
      padding: 4px 8px;
      color: var(--neutral-600);
      display: flex;
      align-items: center;
      gap: 6%;

      .icon {
        width: 1.2rem;
        height: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        background: #ffffff;
      }

      &.active {
        .icon {
          background: var(--green-500);
        }
      }
    }

    .option:hover {
      background-color: var(--green-100);
      border-radius: 4px;
    }

    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-track {
    }
    &::-webkit-scrollbar-thumb {
      background: var(--blue-300);
      opacity: 0.5;
      border-radius: 100px;
    }
    &::-webkit-scrollbar-thumb:hover {
    }

    scrollbar-color: var(--blue-300) rgba(0, 0, 0, 0);
    scrollbar-width: 4px;

    /* Firefox specific styles */
    @supports (-moz-appearance: none) {
      scrollbar-color: var(--blue-300) rgba(0, 0, 0, 0);

      & {
        -moz-appearance: none; /* Disable default Firefox scrollbar */
      }

      &::-moz-range-track {
        border-radius: 100px; /* Border radius for the scrollbar track in Firefox */
      }
    }
  `,
};
