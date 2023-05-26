import { FC, Fragment, memo } from "react";
import CursorCanvas from "../1-CursorCanvas/CursorCanvas";
import CursorR3FStage from "../2-CursorR3FStage/CursorR3FStage";
import CursorMenuOptionStage from "../4-CursorMenuOption/CursorMenuOptionStage";
import CursorMenuChoiceCollider from "../5-CursorMenuChoiceCollider/CursorMenuChoiceCollider";
import { useCursorLogic } from "./useCursorLogic";

const Cursor: FC = () => {
  // Hooks
  useCursorLogic();

  return (
    <Fragment>
      <CursorMenuChoiceCollider />
      <CursorMenuOptionStage />
      <CursorCanvas>
        <CursorR3FStage />
      </CursorCanvas>
    </Fragment>
  );
};

export default memo(Cursor);
