import { FC, memo } from "react";

const QuitButtonBGSVG: FC = () => {
  return (
    <svg
      width={"100%"}
      height={"100%"}
      viewBox="0 0 238 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style={{ mixBlendMode: "soft-light" }}>
        <path
          d="M9.08484 19.3409L1.84559 75.327C0.521689 85.5657 8.63951 94.5736 18.9602 94.3182L225.345 89.2118C232.39 89.0375 237.479 82.4118 235.832 75.5607L222.653 20.7599C221.09 14.2599 215.403 9.58629 208.724 9.31185L29.7007 1.95629C19.3614 1.53147 10.4118 9.07835 9.08484 19.3409Z"
          fill="#392200"
        />
        <path
          d="M9.08484 19.3409L1.84559 75.327C0.521689 85.5657 8.63951 94.5736 18.9602 94.3182L225.345 89.2118C232.39 89.0375 237.479 82.4118 235.832 75.5607L222.653 20.7599C221.09 14.2599 215.403 9.58629 208.724 9.31185L29.7007 1.95629C19.3614 1.53147 10.4118 9.07835 9.08484 19.3409Z"
          stroke="url(#paint0_linear_2044_108635)"
          stroke-width="2.32561"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2044_108635"
          x1="117.198"
          y1="93.3227"
          x2="168.5"
          y2="-6.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#AC5F18" />
          <stop offset="1" stop-color="#D98E37" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default memo(QuitButtonBGSVG);
