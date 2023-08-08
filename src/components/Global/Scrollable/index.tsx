import React, { createElement } from "react";
import styled from "styled-components";

interface ScrollbarProps {
  children?: React.ReactNode;
  thumbWidth?: "thin" | "thick";
  className?: string;
  height?: string;
  tag?: "section" | "div" | "article";
  id?: string;
}

const Scrollable: React.FC<ScrollbarProps> = ({
  thumbWidth = "thick",
  height = "100%",
  children,
  className,
  tag = "section",
  id,
}) => {
  return (
    <DynamicStyle
      className={className ? className : ""}
      thumbwidth={thumbWidth}
      height={height}
      tag={tag}
      id={id}
    >
      {children}
    </DynamicStyle>
  );
};

const DynamicStyle = styled(({ tag, children, ...props }) =>
  createElement(tag, props, children),
)`
  height: ${(props) => props.height ?? "auto"};
  margin-right: ${(props) => (props.thumbwidth === "thin" ? "-8px" : "-12px")};
  padding-right: ${(props) => (props.thumbwidth === "thin" ? "8px" : "12px")};
  overflow: auto;
  &::-webkit-scrollbar {
    width: ${(props) => (props.thumbwidth === "thin" ? "4px" : "8px")};
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
  scrollbar-width: ${(props) => (props.thumbwidth === "thin" ? "4px" : "8px")};

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
