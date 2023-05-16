import { ChangeEvent, useMemo, useState } from "react";
import styled from "styled-components";

import { Filter } from "../../../../pages/types";
import { Checkbox } from "../../../Global/Checkbox";
import { Icon } from "../../../Global/Icon";

interface FilterProps {
  filters: Filter[];
  selectedFilters: Filter[] | null;
  setFilters: (filters: Filter[]) => void;
}

export const PlateFullPlanFilter: React.FC<FilterProps> = ({
  filters,
  selectedFilters,
  setFilters,
}) => {
  const [showingDropdown, setShowingDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowingDropdown((prev) => !prev);
  };

  const hideDropdown = () => {
    setShowingDropdown(() => false);
  };

  const value = useMemo(() => {
    return selectedFilters?.length
      ? selectedFilters.map((filter) => filter.label).join(", ")
      : "";
  }, [selectedFilters]);

  const handleChange = ({
    target: { value, checked },
  }: ChangeEvent<HTMLInputElement>) => {
    setFilters(
      checked
        ? [
            ...(selectedFilters ?? []),
            ...filters.filter((filter) => filter.value === value),
          ]
        : [
            ...(selectedFilters?.filter((filter) => filter.value !== value) ??
              []),
          ],
    );
  };

  return (
    <Style.Container>
      <Style.CustomInput onClick={toggleDropdown}>
        <Style.Input
          readOnly
          required
          value={value}
          className={showingDropdown || value ? "active" : ""}
        />
        <Style.RightButton>
          <Icon name="plus" />
        </Style.RightButton>
      </Style.CustomInput>
      {showingDropdown && (
        <>
          <Style.DropdownBackground onClick={hideDropdown} />
          <Style.Dropdown>
            {filters.map((filter) => (
              <Style.Checkbox key={filter.id}>
                <Checkbox
                  value={filter.value}
                  colorOption="book"
                  onChange={handleChange}
                  sizeOption="small"
                />
                <label>{filter.label}</label>
              </Style.Checkbox>
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
    max-height: 550px;
    overflow-y: auto;
    z-index: 302;
    display: grid;
    gap: 5%;
    grid-template-columns: 1fr 1fr;
    padding: 16px;
    transform: translate(0, 100%);
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
