import { FC, memo } from "react";

const CreditsButtonBGSVG: FC = () => {
  return (
    <svg
      width={"100%"}
      height={"100%"}
      viewBox="0 0 201 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style={{ mixBlendMode: "soft-light" }}>
        <path
          d="M192.061 62.5237L197.296 20.3831C198.557 10.2375 190.558 1.31918 180.335 1.47213L15.8674 3.933C8.75748 4.03938 3.5914 10.7272 5.2843 17.6335L16.3029 62.5836C17.8865 69.0441 23.5461 73.6826 30.1918 73.9668L171.399 80.0059C181.789 80.4502 190.779 72.8435 192.061 62.5237Z"
          fill="#392200"
        />
        <path
          d="M192.061 62.5237L197.296 20.3831C198.557 10.2375 190.558 1.31918 180.335 1.47213L15.8674 3.933C8.75748 4.03938 3.5914 10.7272 5.2843 17.6335L16.3029 62.5836C17.8865 69.0441 23.5461 73.6826 30.1918 73.9668L171.399 80.0059C181.789 80.4502 190.779 72.8435 192.061 62.5237Z"
          stroke="url(#paint0_linear_2044_108652)"
          stroke-width="2.32561"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_2044_108652"
          x="3.79785"
          y="0.307617"
          width="196.792"
          height="82.8794"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
          <feOffset dx="5" dy="6" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_2044_108652"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2044_108652"
          x1="103.184"
          y1="2.28686"
          x2="58.3535"
          y2="86.0912"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#AC5F18" />
          <stop offset="1" stop-color="#D98E37" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default memo(CreditsButtonBGSVG);
