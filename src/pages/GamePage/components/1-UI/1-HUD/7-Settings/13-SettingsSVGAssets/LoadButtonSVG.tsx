import { FC, memo } from "react";

const LoadButtonSVG: FC = () => {
  return (
    <svg
      width={"100%"}
      height={"100%"}
      viewBox="0 0 174 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2044_108679)">
        <path
          d="M166.409 51.5907L162.882 15.6354C162.123 7.898 155.617 1.99909 147.842 1.99909L21.6054 1.99909C16.0412 1.99909 11.2703 5.97209 10.2633 11.4445L3.35516 48.9835C2.38202 54.2716 6.36446 59.1779 11.7397 59.3131L155.859 62.9366C162.07 63.0927 167.016 57.7744 166.409 51.5907Z"
          fill="url(#paint0_linear_2044_108679)"
        />
        <path
          d="M166.409 51.5907L162.882 15.6354C162.123 7.898 155.617 1.99909 147.842 1.99909L21.6054 1.99909C16.0412 1.99909 11.2703 5.97209 10.2633 11.4445L3.35516 48.9835C2.38202 54.2716 6.36446 59.1779 11.7397 59.3131L155.859 62.9366C162.07 63.0927 167.016 57.7744 166.409 51.5907Z"
          stroke="url(#paint1_linear_2044_108679)"
          strokeWidth="3.87602"
        />
      </g>
      <path
        d="M146.107 54.5306C146.005 53.7754 146.574 53.6608 147.329 53.5579C148.085 53.4549 148.74 53.4027 148.843 54.1578C148.946 54.913 148.417 55.6089 147.661 55.7118C146.906 55.8148 146.21 55.2857 146.107 54.5306Z"
        fill="white"
      />
      <path
        d="M29.0762 7.36788C29.1791 8.12304 28.6096 8.23765 27.8542 8.34058C27.0989 8.44351 26.4438 8.49578 26.3409 7.74062C26.238 6.98547 26.7668 6.28954 27.5221 6.18661C28.2775 6.08368 28.9732 6.61273 29.0762 7.36788Z"
        fill="white"
      />
      <path
        d="M153.87 50.4729C155.903 48.331 156.818 45.5291 157.692 46.3584C158.566 47.1877 158.241 49.7692 156.207 51.9111C154.174 54.053 151.567 54.6294 150.693 53.8001C149.819 52.9708 151.836 52.6148 153.87 50.4729Z"
        fill="white"
      />
      <path
        d="M21.314 11.4255C19.2807 13.5675 18.3653 16.3693 17.4917 15.5401C16.6181 14.7108 16.9428 12.1293 18.9761 9.98734C21.0094 7.84541 23.617 7.26908 24.4906 8.09837C25.3642 8.92766 23.3473 9.28362 21.314 11.4255Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_2044_108679"
          x="0.494328"
          y="0.0610352"
          width="173.33"
          height="71.7937"
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
          <feOffset dx="2.32561" dy="3.87602" />
          <feGaussianBlur stdDeviation="1.55041" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2044_108679"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2044_108679"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2044_108679"
          x1="84.5262"
          y1="63.2305"
          x2="84.5262"
          y2="1.99908"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9900" />
          <stop offset="1" stopColor="#FFCD00" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2044_108679"
          x1="84.5262"
          y1="63.2305"
          x2="84.5262"
          y2="1.99908"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.208333" stopColor="#DC4F00" />
          <stop offset="1" stopColor="#FFCD00" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default memo(LoadButtonSVG);
