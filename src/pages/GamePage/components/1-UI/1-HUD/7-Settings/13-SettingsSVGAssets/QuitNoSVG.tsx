import { FC, memo } from "react";

const QuitNoSVG: FC = () => {
  return (
    <svg
      width={"100%"}
      height={"100%"}
      viewBox="0 0 181 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2385_113097)">
        <path
          d="M172.928 14.0515L169.518 46.4371C168.659 54.6031 161.603 60.6963 153.399 60.3577L23.1756 54.9828C17.8712 54.7639 13.3562 51.0513 12.1165 45.8891L4.58505 14.5284C3.23082 8.8894 7.479 3.45811 13.2782 3.41428L162.257 2.28832C168.611 2.2403 173.593 7.73214 172.928 14.0515Z"
          fill="url(#paint0_linear_2385_113097)"
        />
        <path
          d="M172.928 14.0515L169.518 46.4371C168.659 54.6031 161.603 60.6963 153.399 60.3577L23.1756 54.9828C17.8712 54.7639 13.3562 51.0513 12.1165 45.8891L4.58505 14.5284C3.23082 8.8894 7.479 3.45811 13.2782 3.41428L162.257 2.28832C168.611 2.2403 173.593 7.73214 172.928 14.0515Z"
          stroke="url(#paint1_linear_2385_113097)"
          strokeWidth="3.99185"
        />
      </g>
      <path
        d="M154.319 51.6117C153.476 50.5345 154.37 49.7513 155.6 48.7897C156.829 47.8281 157.928 47.0522 158.771 48.1294C159.613 49.2067 159.3 50.8599 158.071 51.8215C156.841 52.7832 155.161 52.689 154.319 51.6117Z"
        fill="white"
      />
      <path
        d="M159.329 46.5847C158.844 46.2691 158.618 45.7246 158.978 45.1712C159.339 44.6178 160.149 44.265 160.634 44.5807C161.118 44.8963 161.22 45.601 160.859 46.1544C160.499 46.7078 159.814 46.9003 159.329 46.5847Z"
        fill="white"
      />
      <path
        d="M28.1185 10.5128C28.2245 11.2906 27.638 11.4086 26.8601 11.5146C26.0822 11.6206 25.4075 11.6744 25.3015 10.8967C25.1955 10.119 25.7402 9.40227 26.5181 9.29627C27.296 9.19027 28.0126 9.73513 28.1185 10.5128Z"
        fill="white"
      />
      <path
        d="M20.436 14.9995C18.342 17.2055 17.0864 19.7844 16.1867 18.9303C15.287 18.0762 15.6214 15.4176 17.7155 13.2116C19.8096 11.0057 22.4951 10.4121 23.3948 11.2662C24.2945 12.1203 22.5301 12.7936 20.436 14.9995Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_2385_113097"
          x="1.53757"
          y="0.291992"
          width="179.035"
          height="69.2605"
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
            result="effect1_dropShadow_2385_113097"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2385_113097"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2385_113097"
          x1="88.0562"
          y1="2.19823"
          x2="88.0561"
          y2="60.9599"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#11A5FF" />
          <stop offset="1" stopColor="#006BAC" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2385_113097"
          x1="88.67"
          y1="2.19823"
          x2="88.67"
          y2="60.9599"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#11A5FF" />
          <stop offset="0.712241" stopColor="#013F65" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default memo(QuitNoSVG);
