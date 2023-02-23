import styled from "styled-components";
import { useEffect, useState } from "react";

interface ToggleProps {
  value: boolean;
  setValue: (value: boolean) => void;
}

export const LanguageToggle = ({ value, setValue }: ToggleProps) => {
  const [isActive, setActive] = useState(value);
  useEffect(() => setValue(isActive), [isActive]);
  return (
    <StyledToggle
      onClick={() => setActive(!isActive)}
      className={isActive ? "inactive" : "active"}
    >
      <div className="slider" />
      <div>
        <span>EN</span>
      </div>
      <div>
        <span>FR</span>
      </div>
    </StyledToggle>
  );
};

const width = "45px";
const items = 2;

const StyledToggle = styled.div`
  font-size: 1rem;
  display: grid;
  position: relative;
  height: 25px;
  width: calc(${width}*2);
  background: #f87c56;
  border-radius: 29px;
  grid-template-columns: repeat(${items}, ${width});
  grid-template-rows: 1fr;
  cursor: pointer;
  border-radius: 20px;
  padding-bottom: 1px;
  transform: scale(0.8);
  z-index: 10;
  pointer-events: auto;

  & .slider {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: ${width};
    height: 100%;
    background: #ffffff;
    /*box-shadow: -2px 0px 2px rgba(0, 0, 0, 0.25);*/
    box-shadow: 0px 0px 2px 1px rgb(0 0 0 / 25%);
    border-radius: 20px;
    transition: transform 0.2s;
  }

  & div {
    z-index: 2;
    display: grid;
    justify-items: center;
    align-items: center;
    height: 100%;
    transition: transform 0.2s, color 0.2s;
  }

  & div:nth-child(2) {
    color: #3d3d3d;
  }

  & div:nth-child(3) {
    color: #fff;
  }

  &.active {
    & div:nth-child(2) {
      color: #fff;
    }

    & div:nth-child(3) {
      color: #3d3d3d;
    }

    & .slider {
      transform: translateX(calc(${width}*1));
    }
  }
`;
