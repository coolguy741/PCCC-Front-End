import { FC, Fragment, memo } from "react";
import CursorCamera from "../3-CursorEntities/0-CursorCamera/CursorCamera";
import CursorHand from "../3-CursorEntities/1-CursorHand/CursorHand";
import CursorTapBurst from "../3-CursorEntities/2-CursorTapBurst/CursorTapBurst";

const CursorR3FStage: FC = () => {
  return (
    <Fragment>
      <CursorHand />
      <CursorCamera />
      <CursorTapBurst />
    </Fragment>
  );
};

export default memo(CursorR3FStage);
