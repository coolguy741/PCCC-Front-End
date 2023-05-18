import { FC, Fragment, memo } from "react";
import CursorCanvas from "../1-CursorCanvas/CursorCanvas";
import CursorR3FStage from "../2-CursorR3FStage/CursorR3FStage";
import CursorUIStage from "../5-CursorUIStage.tsx/CursorUIStage";
import { useCursorLogic } from "./useCursorLogic";

const Cursor: FC = () => {
  // Hooks
  useCursorLogic();

  return (
    <Fragment>
      <CursorUIStage />
      <CursorCanvas>
        <CursorR3FStage />
      </CursorCanvas>
    </Fragment>
  );
};

export default memo(Cursor);
