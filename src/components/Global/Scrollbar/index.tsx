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
  overflow: auto;
  ::-webkit-scrollbar {
    width: ${(props) => (props.thumbWidth === "thin" ? "4px" : "8px")};
  }
  ::-webkit-scrollbar-track {
  }
  ::-webkit-scrollbar-thumb {
    background: var(--blue-300);
    opacity: 0.5;
    border-radius: 100px;
  }
  ::-webkit-scrollbar-thumb:hover {
  }

  /* For Firefox */
  scrollbar-color: var(--blue-300);
  scrollbar-width: ${(props) => (props.thumbWidth === "thin" ? "4px" : "8px")};
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
