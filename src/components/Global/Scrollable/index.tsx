import React, { createElement } from "react";
import styled from "styled-components";

interface ScrollbarProps {
  children?: React.ReactNode;
  thumbWidth?: "thin" | "thick";
  className?: string;
  height?: string;
  tag?: "section" | "div" | "article";
}

const Scrollable: React.FC<ScrollbarProps> = ({
  thumbWidth = "thick",
  height = "100%",
  children,
  className,
  tag = "section",
}) => {
  return (
    <DynamicStyle
      className={className ? className : ""}
      thumbWidth={thumbWidth}
      height={height}
      tag={tag}
    >
      {children}
    </DynamicStyle>
  );
};

// Define the styled component
const DynamicStyle = styled(({ tag, children, ...props }) =>
  createElement(tag, props, children),
)`
  height: ${(props) => props.height};
  margin: ${(props) => (props.thumbWidth === "thin" ? "0 -8px" : "0 -12px")};
  padding: ${(props) => (props.thumbWidth === "thin" ? "0 8px" : "0 12px")};
  overflow: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: inherit;
  &::-webkit-scrollbar {
    width: ${(props) => (props.thumbWidth === "thin" ? "4px" : "8px")};
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
  scrollbar-width: ${(props) => (props.thumbWidth === "thin" ? "4px" : "8px")};

  /* Firefox specific styles */
  @supports (-moz-appearance: none) {
    scrollbar-color: var(--blue-300) rgba(0, 0, 0, 0);

    & {
      -moz-appearance: none; /* Disable default Firefox scrollbar */
      appearance: none;
    }

    &::-moz-range-track {
      border-radius: 100px; /* Border radius for the scrollbar track in Firefox */
    }
  }
`;

export default Scrollable;
