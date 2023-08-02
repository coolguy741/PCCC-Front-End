import { FC, memo } from "react";

const LandingPlayButton: FC = () => {
  return (
    <svg
      width={"100%"}
      height={"100%"}
      viewBox="0 0 454 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_3156_97672)">
        <path
          d="M6.47201 32.5307L14.2135 80.295C16.3924 93.7385 28.178 103.498 41.7921 103.133L398.425 93.5719C409.243 93.2818 418.764 86.3557 422.371 76.1523L435.816 38.1126C440.332 25.3375 430.991 11.8969 417.443 11.6757L29.9892 5.34787C15.3962 5.10954 4.13696 18.1237 6.47201 32.5307Z"
          fill="url(#paint0_linear_3156_97672)"
        />
        <path
          d="M6.47201 32.5307L14.2135 80.295C16.3924 93.7385 28.178 103.498 41.7921 103.133L398.425 93.5719C409.243 93.2818 418.764 86.3557 422.371 76.1523L435.816 38.1126C440.332 25.3375 430.991 11.8969 417.443 11.6757L29.9892 5.34787C15.3962 5.10954 4.13696 18.1237 6.47201 32.5307Z"
          stroke="url(#paint1_linear_3156_97672)"
          strokeWidth="8.78564"
        />
      </g>
      <path
        d="M387.195 81.7212C386.989 80.4125 388.133 80.2139 389.651 80.0355C391.168 79.8572 392.485 79.7666 392.692 81.0753C392.898 82.384 391.836 83.59 390.318 83.7684C388.8 83.9468 387.402 83.0299 387.195 81.7212Z"
        fill="white"
      />
      <path
        d="M41.5568 15.0131C41.7498 16.3218 40.6816 16.5205 39.2648 16.6988C37.848 16.8772 36.6191 16.9678 36.4261 15.6591C36.2331 14.3504 37.2251 13.1443 38.6419 12.966C40.0587 12.7876 41.3638 13.7044 41.5568 15.0131Z"
        fill="white"
      />
      <path
        d="M402.794 74.6778C406.879 70.9658 408.719 66.1101 410.474 67.5473C412.229 68.9844 411.577 73.4582 407.491 77.1702C403.406 80.8823 398.166 81.881 396.411 80.4439C394.655 79.0067 398.708 78.3898 402.794 74.6778Z"
        fill="white"
      />
      <path
        d="M26.9963 22.0488C23.1823 25.7608 21.4652 30.6165 19.8266 29.1793C18.188 27.7421 18.7971 23.2683 22.611 19.5563C26.425 15.8443 31.3161 14.8455 32.9548 16.2827C34.5934 17.7199 30.8102 18.3367 26.9963 22.0488Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_3156_97672"
          x="0.0124025"
          y="0.953125"
          width="453.649"
          height="122.4"
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
          <feOffset dx="5.27139" dy="8.78564" />
          <feGaussianBlur stdDeviation="3.51426" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3156_97672"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3156_97672"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_3156_97672"
          x1="223.497"
          y1="4.89061"
          x2="223.497"
          y2="103.771"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFCD00" />
          <stop offset="1" stopColor="#FF9900" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3156_97672"
          x1="223.497"
          y1="4.89061"
          x2="223.497"
          y2="103.771"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.184545" stopColor="#FFCD00" />
          <stop offset="1" stopColor="#DC4F00" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default memo(LandingPlayButton);
