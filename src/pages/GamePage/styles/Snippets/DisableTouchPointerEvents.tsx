import { css } from "styled-components";

const DisableTouchPointerEvents = css`
  touch-action: none;
  pointer-events: none;
  -webkit-pointer-events: none;
  -moz-pointer-events: none;
  -ms-pointer-events: none;
  -o-pointer-events: none;
`;
export { DisableTouchPointerEvents };
