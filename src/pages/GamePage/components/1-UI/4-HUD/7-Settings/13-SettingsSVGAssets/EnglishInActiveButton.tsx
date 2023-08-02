import { FC, memo } from "react";

const EnglishInActiveButtonSVG: FC = () => {
  return (
    <svg
      width={"100%"}
      height={"100%"}
      viewBox="0 0 23 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_2044_118657)">
        <path
          d="M8.73371 3.576L3.86972 3.576V5.096H7.82172V8.136H3.86972V9.656H8.73371L8.73371 13H0.221715L0.221715 0.231999L8.73371 0.231999V3.576ZM19.0687 0.231999L22.7167 0.231999L22.7167 13H19.0687L14.2047 6.008L14.2047 13L10.5567 13L10.5567 0.231999H14.2047L19.0687 7.224L19.0687 0.231999Z"
          fill="#D63909"
        />
        <path
          d="M8.73371 3.576L3.86972 3.576V5.096H7.82172V8.136H3.86972V9.656H8.73371L8.73371 13H0.221715L0.221715 0.231999L8.73371 0.231999V3.576ZM19.0687 0.231999L22.7167 0.231999L22.7167 13H19.0687L14.2047 6.008L14.2047 13L10.5567 13L10.5567 0.231999H14.2047L19.0687 7.224L19.0687 0.231999Z"
          fill="#440904"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_2044_118657"
          x="0.22168"
          y="0.231934"
          width="22.495"
          height="17.6072"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4.8391" />
          <feGaussianBlur stdDeviation="2.41955" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_2044_118657"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default memo(EnglishInActiveButtonSVG);
