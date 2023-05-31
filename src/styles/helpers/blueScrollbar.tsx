import { css } from "styled-components";
import { convertToRelativeUnit } from "./convertToRelativeUnits";

export function blueScrollbar() {
  return css`
    /* width */
    ::-webkit-scrollbar {
      width: ${convertToRelativeUnit(6, "vw")};
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: var(--blue-500);
      transition: background 0.25s linear;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: var(--blue-600);
    }
  `;
}
