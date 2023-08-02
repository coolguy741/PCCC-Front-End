import { useCallback, useEffect } from "react";
import { ConstantVoidFunctionType } from "../../../shared/Types/DefineTypes";

const useWindowFocusBlur = (
  onFocus: ConstantVoidFunctionType,
  onBlur: ConstantVoidFunctionType,
  stateDep = true,
): void => {
  const handleWindowFocus = useCallback((): void => {
    if (!document.hasFocus()) return;
    if (!stateDep) return;
    onFocus();
  }, [onFocus, stateDep]);

  const handleWindowBlur = useCallback((): void => {
    if (document.hasFocus()) return;
    if (!stateDep) return;
    onBlur();
  }, [onBlur, stateDep]);

  useEffect((): (() => void) => {
    handleWindowFocus();
    window.addEventListener("focus", handleWindowFocus);
    window.addEventListener("blur", handleWindowBlur);

    return (): void => {
      window.removeEventListener("focus", handleWindowFocus);
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, [handleWindowFocus, handleWindowBlur]);
};

export default useWindowFocusBlur;
