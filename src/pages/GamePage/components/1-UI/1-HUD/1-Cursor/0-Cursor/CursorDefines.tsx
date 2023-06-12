import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";

const handleHideCursorOnFocus: ConstantVoidFunctionType = (): void => {
  document.body.style.cursor = "none";
};

const handleShowCursorOnFocus: ConstantVoidFunctionType = (): void => {
  document.body.style.cursor = "none";
};

export { handleShowCursorOnFocus, handleHideCursorOnFocus };
