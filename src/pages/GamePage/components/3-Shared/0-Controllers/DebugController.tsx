import { FC, memo, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../shared/Types/DefineTypes";

const DebugController: FC = () => {
  // Global State
  const { setIsDebugMode } = useGlobalState(
    (state) => ({
      setIsDebugMode: state.setIsDebugMode,
    }),
    shallow,
  );

  // Hooks
  const location = useLocation();

  // Handlers
  const handleSetDebugMode: ConstantVoidFunctionType = useCallback((): void => {
    if (!location.pathname.includes("debug")) return;
    setIsDebugMode(true);
  }, [location, setIsDebugMode]);

  // Listeners
  useEffect(handleSetDebugMode, [location, handleSetDebugMode]);

  return null;
};

export default memo(DebugController);
