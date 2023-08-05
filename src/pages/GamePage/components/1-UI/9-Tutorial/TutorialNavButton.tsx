import { forwardRef, ForwardRefRenderFunction, memo } from "react";

interface TutorialNavButtonProps {
  direction: boolean;
}

type TutorialNavButtonComponentType = ForwardRefRenderFunction<
  SVGPathElement,
  TutorialNavButtonProps
>;

const TutorialNavButton: TutorialNavButtonComponentType = (
  { direction },
  ref,
) => {
  return (
    <svg
      fill="none"
      width={"100%"}
      height={"100%"}
      viewBox="0 0 71 67"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: direction ? "rotate(180deg)" : "rotate(0deg)" }}
    >
      <g filter="url(#filter0_d_3301_79275)">
        <path
          ref={ref}
          d="M64.2685 12.2021L59.4413 5.17361C59.2021 4.82538 58.8409 4.57974 58.4291 4.48537L39.1132 0.0588232C38.9431 0.0198428 38.768 0.0075314 38.5941 0.0223294L19.0648 1.6844L9.54358 1.6844C8.9238 1.6844 8.35408 2.02476 8.06036 2.57053L4.10633 9.91727C3.97428 10.1626 3.90516 10.4369 3.90516 10.7155L3.90516 19.6979L4.56768 32.4186L4.56768 49.1094C4.56768 49.4855 4.6936 49.8509 4.92536 50.1472L11.1283 58.0771C11.3595 58.3726 11.6826 58.5824 12.0465 58.6734L18.0214 60.1672C18.155 60.2006 18.2922 60.2174 18.4299 60.2174L47.8467 60.2174C48.0282 60.2174 48.2085 60.1881 48.3807 60.1306L64.6639 54.6881C65.3511 54.4584 65.8144 53.8151 65.8144 53.0906L65.8144 41.1762L67.0529 29.1509C67.0645 29.0383 67.0647 28.9248 67.0535 28.8122L65.8626 16.7987C65.8311 16.481 65.71 16.1787 65.5133 15.9272L64.922 15.1712C64.6903 14.8749 64.5645 14.5096 64.5645 14.1335L64.5645 13.1558C64.5645 12.8153 64.4613 12.4828 64.2685 12.2021Z"
          fill="#DBC6B2"
        />
      </g>
      <path
        d="M43.0682 16.0078L29.1719 29.9041L43.0682 43.8005"
        stroke="black"
        strokeWidth="5.05321"
      />
      <defs>
        <filter
          id="filter0_d_3301_79275"
          x="0.537441"
          y="0.015625"
          width="69.8939"
          height="66.9407"
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
          <feOffset dy="3.36881" />
          <feGaussianBlur stdDeviation="1.6844" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3301_79275"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3301_79275"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default memo(forwardRef(TutorialNavButton));
