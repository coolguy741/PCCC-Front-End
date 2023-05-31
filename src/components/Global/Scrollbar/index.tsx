import React from "react";
import styled from "styled-components";

// Define the styled component
const ScrollableDiv = styled.div<{
  thumbWidth: "thin" | "thick";
  height: string;
}>`
  height: ${(props) => props.height};
  margin-right: ${(props) => (props.thumbWidth === "thin" ? "-8px" : "-28px")};
  padding-right: ${(props) => (props.thumbWidth === "thin" ? "4px" : "20px")};
  overflow-y: auto;
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
    }

    &::-moz-range-track {
      border-radius: 100px; /* Border radius for the scrollbar track in Firefox */
    }
  }
`;

interface ScrollbarProps {
  children?: React.ReactNode;
  thumbWidth?: "thin" | "thick";
  height?: string;
}

const Scrollbar: React.FC<ScrollbarProps> = ({
  thumbWidth = "thin",
  height = "100%",
  children,
}) => {
  return (
    <ScrollableDiv thumbWidth={thumbWidth} height={height}>
      {children}
    </ScrollableDiv>
  );
};

export default Scrollbar;
