import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { convertToRelativeUnit as conv } from "../../../styles/helpers/convertToRelativeUnits";
import { Icon } from "../../Global/Icon";

interface DropdownSelectProps {
  placeholder?: string;
  options: string[];
  selectedValue?: string;
  onChange: (value: string) => void;
  height?: string;
  width?: string;
  className?: string;
}
export const DropdownSelect: React.FC<DropdownSelectProps> = ({
  placeholder,
  options,
  selectedValue = "",
  onChange,
  className = "",
  height = "100%",
  width = "100%",
}) => {
  const [value, setValue] = useState(selectedValue);
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [parentHeight, setParentHeight] = useState(18);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateParentHeight = () => {
      if (containerRef.current) {
        const { height } = containerRef.current.getBoundingClientRect();
        setParentHeight(height);
      }
    };

    // Update the parent height on initial render and when the window is resized
    updateParentHeight();
    window.addEventListener("resize", updateParentHeight);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateParentHeight);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue: string) => {
    setValue(optionValue);
    setIsOpen(false);
    onChange(optionValue);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setIsOpen(false);
  };

  const calculateFontSize = () => {
    // Set the font size as a percentage of the parent's height
    const fontSizePercentage = 0.34; // Adjust this value as needed
    const fontSize = parentHeight * fontSizePercentage;
    return `${fontSize}px`;
  };

  useEffect(() => console.log("isFocused: ", isFocused), [isFocused]);

  return (
    <Style.Container
      className={className}
      style={{
        width: width,
        height: height,
        fontSize: calculateFontSize(),
      }}
      onClick={handleFocus}
      onBlur={handleBlur}
      isFocus={isFocused}
      tabIndex={0}
      ref={containerRef}
    >
      <div className="selected-value" onClick={handleToggle}>
        {/* <input type="hidden" {...register()} /> */}
        <div className="text">
          {!value && placeholder && (
            <span className="placeholder">{placeholder}</span>
          )}
          {value && <span>{value}</span>}
        </div>
        <Icon name="downSelect" height={"34%"} />
      </div>
      {isOpen && (
        <div className="options">
          {options.map((option, index) => (
            <div
              key={index}
              className="option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </Style.Container>
  );
};

const Style = {
  Container: styled.div<{ isFocus: boolean }>`
    position: relative;
    display: inline-block;
    border-radius: 8px;
    border: ${(props) =>
      props.isFocus ? "1px solid var(--blue-500)" : "1px solid white"};
    background: #ffffff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-out 0s, border-color 0.3s ease-in 0s;

    .selected-value {
      height: 100%;
      border-radius: 8px;
      padding: 0 16px;
      font-weight: 400;
      color: var(--neutral-800);
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

    .options {
      z-index: 9999;
      position: absolute;
      top: 120%;
      left: 0;
      width: 100%;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(59.2764px);
      border-radius: 8px;
      padding: 8px;
      cursor: pointer;
    }

    .option {
      padding: 4px 8px;
      color: var(--neutral-600);
    }

    .option:hover {
      background-color: #f0f0f0;
    }

    &:focus {
      border: 1px solid var(--blue-500);
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1),
        0px 0px 0px 4px rgba(31, 81, 229, 0.08);
    }

    &.has-error {
      border: 1px solid var(--red-300);
      outline-color: transparent;

      &:focus,
      &:active {
        border-color: var(--red-500);
        border-width: ${conv(2, "vw")};
      }
    }
  `,
};
