import { FC, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import {
  handleHideCursorOnFocus,
  handleShowCursorOnFocus,
} from "../../1-UI/4-HUD/1-Cursor/0-Cursor/CursorDefines";
import useWindowFocusBlur from "../1-Hooks/useWindowFocusBlur";

const CursorVisibilityController: FC = () => {
  // Global State
  const { UIPhase } = useGlobalState(
    (state) => ({
      UIPhase: state.UIPhase,
    }),
    shallow,
  );

  // Hooks
  useWindowFocusBlur(
    handleShowCursorOnFocus,
    handleHideCursorOnFocus,
    UIPhase === "Game" || UIPhase === "SkinTonePicker",
  );

  return null;
};

export default memo(CursorVisibilityController);
