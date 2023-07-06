import { FC, memo } from "react";

const QuitButtonSVG: FC = () => {
  return (
    <svg
      width={"100%"}
      height={"100%"}
      viewBox="0 0 224 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2181_108215)">
        <path
          d="M4.02852 60.8137L8.27125 20.5143C9.34809 10.2861 18.1859 2.65397 28.4619 3.0781L191.456 9.80559C198.155 10.0821 203.841 14.8058 205.342 21.3407L213.548 57.0795C215.145 64.035 209.966 70.708 202.832 70.8874L17.6284 75.5438C9.57778 75.7463 3.18534 68.8225 4.02852 60.8137Z"
          fill="url(#paint0_linear_2181_108215)"
        />
        <path
          d="M4.02852 60.8137L8.27125 20.5143C9.34809 10.2861 18.1859 2.65397 28.4619 3.0781L191.456 9.80559C198.155 10.0821 203.841 14.8058 205.342 21.3407L213.548 57.0795C215.145 64.035 209.966 70.708 202.832 70.8874L17.6284 75.5438C9.57778 75.7463 3.18534 68.8225 4.02852 60.8137Z"
          stroke="url(#paint1_linear_2181_108215)"
          strokeWidth="5"
        />
      </g>
      <path
        d="M37.5133 15.7618C37.646 16.736 36.9114 16.8838 35.937 17.0166C34.9627 17.1494 34.1175 17.2168 33.9848 16.2427C33.8521 15.2685 34.5343 14.3708 35.5086 14.238C36.483 14.1052 37.3805 14.7877 37.5133 15.7618Z"
        fill="white"
      />
      <path
        d="M189.139 63.0038C189.006 62.0296 189.741 61.8818 190.715 61.749C191.69 61.6162 192.535 61.5488 192.668 62.523C192.8 63.4971 192.118 64.3948 191.144 64.5276C190.169 64.6604 189.272 63.9779 189.139 63.0038Z"
        fill="white"
      />
      <path
        d="M27.4995 20.9995C24.8766 23.7626 23.6957 27.3769 22.5688 26.3072C21.4419 25.2374 21.8607 21.9073 24.4837 19.1442C27.1066 16.3812 30.4704 15.6377 31.5973 16.7075C32.7242 17.7773 30.1224 18.2365 27.4995 20.9995Z"
        fill="white"
      />
      <path
        d="M199.151 57.7681C201.774 55.005 202.955 51.3907 204.082 52.4604C205.209 53.5302 204.79 56.8603 202.167 59.6233C199.544 62.3864 196.18 63.1298 195.053 62.0601C193.926 60.9903 196.528 60.5311 199.151 57.7681Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_2181_108215"
          x="0.453613"
          y="0.561035"
          width="222.886"
          height="86.4873"
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
          <feOffset dx="3" dy="5" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2181_108215"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2181_108215"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2181_108215"
          x1="109.538"
          y1="75.9258"
          x2="109.538"
          y2="2.3238"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CA2B20" />
          <stop offset="0.716412" stopColor="#E74F44" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2181_108215"
          x1="109.538"
          y1="75.9258"
          x2="109.538"
          y2="2.3238"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#73241F" />
          <stop offset="1" stopColor="#FF8178" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default memo(QuitButtonSVG);
