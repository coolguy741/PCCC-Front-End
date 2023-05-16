import { css } from "styled-components";
import { convertToRelativeUnit as conv } from "./convertToRelativeUnits";

export function glassBackground() {
  return css`
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 7.78814px 19.4703px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 16px;
    padding: ${conv(40, "vh")} ${conv(40, "vw")};
  `;
}
