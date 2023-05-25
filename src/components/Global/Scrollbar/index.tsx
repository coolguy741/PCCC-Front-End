import React from "react";
import styled from "styled-components";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";

// Define the styled component
const ScrollableDiv = styled.div<{ width: "thin" | "thick" }>`
  width: 100%;
  height: 100%;
  overflow: auto;
  ::-webkit-scrollbar {
    width: ${(props) =>
      props.width === "thin"
        ? convertToRelativeUnit(4, "vh")
        : convertToRelativeUnit(8, "vh")};
  }
  ::-webkit-scrollbar-track {
  }
  ::-webkit-scrollbar-thumb {
    background: var(--blue-500);
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
