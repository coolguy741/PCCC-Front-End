import { FC, Fragment, memo } from "react";
import DebugUIContainer from "../1-DebugUI/DebugUIContainer";
import ToolTip from "../3-ToolTip/ToolTip";
import Cursor from "../4-Cursor/Cursor";

const UIContainer: FC = () => {
  return (
    <Fragment>
      <Cursor />
      <ToolTip />
      <DebugUIContainer />
    </Fragment>
  );
};

export default memo(UIContainer);
