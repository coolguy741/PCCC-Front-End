import { FC, memo } from "react";
import {
  handleHideCursorOnFocus,
  handleShowCursorOnFocus,
} from "../../1-UI/1-HUD/1-Cursor/0-Cursor/CursorDefines";
import useWindowFocusBlur from "../1-Hooks/useWindowFocusBlur";

const CursorVisibilityController: FC = () => {
  // Hooks
  useWindowFocusBlur(handleShowCursorOnFocus, handleHideCursorOnFocus);

  return null;
};

export default memo(CursorVisibilityController);
