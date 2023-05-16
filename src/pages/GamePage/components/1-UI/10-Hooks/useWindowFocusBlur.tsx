import { useCallback, useEffect } from "react";

type FocusBlurHandler = () => void;

const useWindowFocusBlur = (
  onFocus: FocusBlurHandler,
  onBlur: FocusBlurHandler,
): void => {
  const handleWindowFocus = useCallback(() => {
    if (document.hasFocus()) {
      onFocus();
    }
  }, [onFocus]);

  const handleWindowBlur = useCallback(() => {
    if (!document.hasFocus()) {
      onBlur();
    }
  }, [onBlur]);

  useEffect(() => {
    handleWindowFocus();
    window.addEventListener("focus", handleWindowFocus);
    window.addEventListener("blur", handleWindowBlur);

    return () => {
      window.removeEventListener("focus", handleWindowFocus);
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, [handleWindowFocus, handleWindowBlur]);
};

export default useWindowFocusBlur;
