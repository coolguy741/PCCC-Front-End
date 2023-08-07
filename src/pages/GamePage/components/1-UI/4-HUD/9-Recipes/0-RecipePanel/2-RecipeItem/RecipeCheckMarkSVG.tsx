import { FC, memo } from "react";

const RecipeItemCheckMarkSVG: FC = () => {
  return (
    <svg
      width={"100%"}
      height={"100%"}
      viewBox="0 0 35 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4198 26.8796L7.44541 14.0796L3.52234 12.373L0.0351562 14.0796L10.4967 30.293L16.1634 31.9996L17.907 29.8663L34.0352 4.69297V-0.000366211L27.0608 0.4263L14.4198 26.8796Z"
        fill="#26D07C"
      />
    </svg>
  );
};

export default memo(RecipeItemCheckMarkSVG);
