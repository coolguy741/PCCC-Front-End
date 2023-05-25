import React from "react";
import styled from "styled-components";

// Define the styled component
const ScrollableDiv = styled.div<{ width: "thin" | "thick" }>`
  height: 100%;
  margin-right: ${(props) => (props.width === "thin" ? "-4px" : "-28px")};
  padding-right: ${(props) => (props.width === "thin" ? "0px" : "20px")};
  overflow: auto;
  ::-webkit-scrollbar {
    width: ${(props) => (props.width === "thin" ? "4px" : "8px")};
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
`;

interface ScrollbarProps {
  children?: React.ReactNode;
  width?: "thin" | "thick";
}

const Scrollbar: React.FC<ScrollbarProps> = ({ width = "thin", children }) => {
  return <ScrollableDiv width={width}>{children}</ScrollableDiv>;
};

export default Scrollbar;
