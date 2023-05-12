import { css, keyframes } from "styled-components";

const animatedBackground = keyframes`
  0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export function animatedbackgroundGradient(
  left: string,
  right: string,
  left2: string = left,
  right2: string = right,
) {
  return css`
    background: linear-gradient(
      -45deg,
      ${left},
      ${right},
      ${left2},
      ${right2}
    ) !important;
    background-size: 400% 400%;
    animation: ${animatedBackground} 15s ease infinite;
  `;
}
