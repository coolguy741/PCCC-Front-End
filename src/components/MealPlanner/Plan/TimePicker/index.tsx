import { useState } from "react";
import styled from "styled-components";

import { Time } from "../../../../stores/mealPlannerStore";
import { Icon } from "../../../Global/Icon";
import { TIME_ARR } from "./times";

interface TimePickerProps {
  times: Time[];
  changeTimes: (times: Time[]) => void;
  index: number;
}

export const TimePicker: React.FC<TimePickerProps> = ({
  times,
  changeTimes,
  index,
}) => {
  const [showingDropdown, setShowingDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowingDropdown((prev) => !prev);
  };

  const hideDropdown = () => {
    setShowingDropdown(() => false);
  };

  const handleChange = (time: Time) => {
    const newTimes = [...times];
    newTimes[index].value = time.value;
    newTimes[index].label = time.label;
    changeTimes(newTimes);
    hideDropdown();
  };

  return (
    <Style.Container>
      <Style.CustomInput onClick={toggleDropdown}>
        <Style.Input
          readOnly
          required
          value={times[index].label}
          className={showingDropdown || times[index] ? "active" : ""}
          data-testid="filter"
        />
        <Style.RightButton>
          <Icon name="arrow-down" />
        </Style.RightButton>
      </Style.CustomInput>
      {showingDropdown && (
        <>
          <Style.DropdownBackground onClick={hideDropdown} />
          <Style.Dropdown>
            {TIME_ARR.map((time) => (
              <label onClick={() => handleChange(time)}>{time.label}</label>
            ))}
          </Style.Dropdown>
        </>
      )}
    </Style.Container>
  );
};

const Style = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: end;
    position: relative;
  `,
  Dropdown: styled.div`
    position: absolute;
    background: white;
    border-radius: 4px;
    width: 100%;
    bottom: -10px;
    max-height: 150px;
    overflow-y: auto;
    z-index: 302;
    gap: 5%;
    padding: 16px;
    transform: translate(0, 100%);
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    label {
      color: var(--book-200);
      transition: all 0.2s ease-in-out;
      padding: 0.1rem 0.5rem;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: var(--book-100);
        color: var(--book-300);
        transition: all 0.2s ease-in-out;
      }
    }
  `,
  CustomInput: styled.section`
    display: flex;
    position: relative;
    z-index: 1;
    justify-content: end;
  `,
  RightButton: styled.button`
    padding: 8px;
    height: 40px;
    background: var(--orange-400);
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  `,
  Input: styled.input`
    padding: 10px 20px;
    left: 0;
    top: 0;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    text-align: left;
    outline: 2px solid transparent;
    outline-offset: 8px;
    border-radius: 4px;
    transition: outline 0.5s ease-in;
    color: var(--book-300);
    font-size: 16px;

    &.active {
      outline: 2px solid var(--book-200);
    }

    &::placeholder {
      color: var(--book-200);
    }

    /* CSS to hide arrows for numeric input */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }

    &[type="number"] {
      -moz-appearance: textfield; /* Firefox */
      appearance: textfield;
    }
  `,
  Checkbox: styled.div`
    display: flex;
    gap: 8%;
    align-items: center;
    height: 32px;
    & > label {
      flex: 1;
      line-height: 16px;
      font-size: 14px;
      color: var(--book-300);
    }
  `,
  DropdownBackground: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 300;
  `,
};
