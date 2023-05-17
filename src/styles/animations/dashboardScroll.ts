import { css, keyframes } from "styled-components";

const dashboardScroll = (distance: number) => keyframes`
  0%, 100% {
		opacity: 0;
    transform: translateY(0);
	}
  
	50% {
		opacity: 1;
    transform: translateY(${`${distance}px`});
	}
`;

export function dashboardScrollAnimation(timing = 0, distance = 0, delay = 0) {
  return css`
    animation: ${() => dashboardScroll(distance)} ${`${timing}s`} linear
      ${`${delay}s`} infinite;
  `;
}
