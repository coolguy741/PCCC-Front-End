import { FC, memo } from "react";

const RecipeItemCheckBoxSVG: FC = () => {
  return (
    <svg
      fill="none"
      width={"100%"}
      height={"100%"}
      viewBox="0 0 33 35"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.09472 31.3016L3.52754 2H29.4676L30.8996 32.8818L2.09472 31.3016Z"
        stroke="#CBB99D"
        strokeWidth="4"
      />
    </svg>
  );
};

export default memo(RecipeItemCheckBoxSVG);
