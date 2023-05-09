import { useEffect } from "react";

type FocusBlurHandler = () => void;

const useWindowFocusBlur = (
  onFocus: FocusBlurHandler,
  onBlur: FocusBlurHandler,
): void => {
  useEffect(() => {
    if (document.hasFocus()) {
      onFocus();
    } else {
      onBlur();
    }

    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);
    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
    };
  }, [onFocus, onBlur]);
};

export default useWindowFocusBlur;
