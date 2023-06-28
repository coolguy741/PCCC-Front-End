import { FC, memo } from "react";

const FrenchButtonSVG: FC = () => {
  return (
    <svg
      width={"100%"}
      height={"100%"}
      viewBox="27 -2 80 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2178_108212)">
        <path
          d="M30.4661 32.6306L31.8752 11.4088C32.2217 6.19054 36.6943 2.21753 41.9171 2.48864L85.3508 4.74319C89.3461 4.95057 92.6566 7.91469 93.3024 11.8628L96.1306 29.152C96.8562 33.5876 93.5138 37.649 89.0215 37.7905L37.0308 39.428C33.2641 39.5466 30.2164 36.3909 30.4661 32.6306Z"
          fill="url(#paint0_linear_2178_108212)"
        />
        <path
          d="M30.4661 32.6306L31.8752 11.4088C32.2217 6.19054 36.6943 2.21753 41.9171 2.48864L85.3508 4.74319C89.3461 4.95057 92.6566 7.91469 93.3024 11.8628L96.1306 29.152C96.8562 33.5876 93.5138 37.649 89.0215 37.7905L37.0308 39.428C33.2641 39.5466 30.2164 36.3909 30.4661 32.6306Z"
          stroke="url(#paint1_linear_2178_108212)"
          stroke-width="4.24331"
        />
      </g>
      <path
        d="M86.1293 29.3552C86.0056 28.4469 86.6207 28.3186 87.4373 28.2073C88.254 28.096 88.9629 28.0439 89.0867 28.9522C89.2104 29.8605 88.6488 30.6875 87.8322 30.7987C87.0155 30.91 86.2531 30.2635 86.1293 29.3552Z"
        fill="white"
      />
      <path
        d="M40.8505 11.4511C39.5708 12.7992 38.8034 14.3753 38.2536 13.8533C37.7038 13.3314 37.9081 11.7066 39.1879 10.3584C40.4677 9.0103 42.1089 8.64756 42.6588 9.16952C43.2086 9.69148 42.1303 10.103 40.8505 11.4511Z"
        fill="white"
      />
      <path
        d="M57.722 27H54.074V14.232H62.586V17.576H57.722V19.096H61.674V22.136H57.722V27ZM72.2251 22.706L75.36 27L71.1041 27L68.4631 23.048H67.7601V27H64.112V14.232L69.8881 14.232C73.2131 14.232 74.7521 16.018 74.7521 18.488C74.7521 20.369 73.8401 22.022 72.2251 22.706ZM69.5461 20.008C70.4011 20.008 71.1041 19.59 71.1041 18.64C71.1041 17.709 70.4011 17.272 69.5461 17.272H67.7601V20.008H69.5461Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_2178_108212"
          x="27.4814"
          y="0.354004"
          width="76.8113"
          height="48.8367"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2.54598" dy="4.24331" />
          <feGaussianBlur stdDeviation="1.69732" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2178_108212"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2178_108212"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2178_108212"
          x1="63.75"
          y1="52.5"
          x2="63.75"
          y2="1.99983"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#006BAC" />
          <stop offset="1" stop-color="#11A5FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2178_108212"
          x1="63.2456"
          y1="40.1809"
          x2="63.2456"
          y2="0.850201"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#013F65" />
          <stop offset="1" stop-color="#11A5FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default memo(FrenchButtonSVG);
