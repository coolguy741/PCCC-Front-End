import { FC, memo } from "react";

const EngButtonSVG: FC = () => {
  return (
    <svg
      width={"100%"}
      height={"100%"}
      viewBox="27 -2 80 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2178_108211)">
        <path
          d="M100.425 10.697L98.7479 30.4462C98.3347 35.3127 94.3221 39.0866 89.4394 39.201L42.4771 40.3013C37.7914 40.4111 33.9002 36.7088 33.7769 32.0234L33.2052 10.2983C33.0935 6.05229 36.5527 2.57435 40.7993 2.66321L94.2032 3.78079C97.8848 3.85784 100.736 7.02779 100.425 10.697Z"
          fill="url(#paint0_linear_2178_108211)"
        />
        <path
          d="M100.425 10.697L98.7479 30.4462C98.3347 35.3127 94.3221 39.0866 89.4394 39.201L42.4771 40.3013C37.7914 40.4111 33.9002 36.7088 33.7769 32.0234L33.2052 10.2983C33.0935 6.05229 36.5527 2.57435 40.7993 2.66321L94.2032 3.78079C97.8848 3.85784 100.736 7.02779 100.425 10.697Z"
          stroke="url(#paint1_linear_2178_108211)"
          strokeWidth="3.99185"
        />
      </g>
      <path
        d="M45.5461 6.86053C45.6108 7.33583 45.2524 7.40797 44.777 7.47275C44.3016 7.53753 43.8892 7.57043 43.8245 7.09513C43.7597 6.61983 44.0925 6.18181 44.568 6.11703C45.0434 6.05225 45.4813 6.38523 45.5461 6.86053Z"
        fill="white"
      />
      <path
        d="M40.8515 9.60344C39.5717 10.9516 38.8044 12.5276 38.2546 12.0057C37.7047 11.4837 37.9091 9.85893 39.1889 8.51079C40.4687 7.16265 42.1099 6.79991 42.6597 7.32186C43.2096 7.84382 42.1313 8.2553 40.8515 9.60344Z"
        fill="white"
      />
      <path
        d="M88.1251 32.6837C89.4048 31.3355 90.1722 29.7595 90.722 30.2814C91.2718 30.8034 91.0675 32.4282 89.7877 33.7763C88.5079 35.1245 86.8667 35.4872 86.3168 34.9652C85.767 34.4433 86.8453 34.0318 88.1251 32.6837Z"
        fill="white"
      />
      <path
        d="M61.6768 18.576H56.8128V20.096H60.7648V23.136H56.8128V24.656H61.6768V28H53.1648V15.232H61.6768V18.576ZM72.0117 15.232H75.6597V28L72.0117 28L67.1477 21.008V28H63.4997V15.232L67.1477 15.232L72.0117 22.224V15.232Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_2178_108211"
          x="30.4082"
          y="0.665527"
          width="77.6248"
          height="48.8196"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2.39511" dy="3.99185" />
          <feGaussianBlur stdDeviation="1.59674" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2178_108211"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2178_108211"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2178_108211"
          x1="67"
          y1="2.49999"
          x2="67"
          y2="40.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#11A5FF" />
          <stop offset="1" stopColor="#006BAC" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2178_108211"
          x1="67.2424"
          y1="2.49999"
          x2="67.2423"
          y2="40.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#11A5FF" />
          <stop offset="0.712241" stopColor="#013F65" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default memo(EngButtonSVG);
