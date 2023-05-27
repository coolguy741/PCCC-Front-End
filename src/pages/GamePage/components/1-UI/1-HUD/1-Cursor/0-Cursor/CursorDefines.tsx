import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";

const onWindowFocus: ConstantVoidFunctionType = (): void => {
  document.body.style.cursor = "none";
};

const onWindowBlur: ConstantVoidFunctionType = (): void => {
  document.body.style.cursor = "default";
};

export { onWindowBlur, onWindowFocus };
