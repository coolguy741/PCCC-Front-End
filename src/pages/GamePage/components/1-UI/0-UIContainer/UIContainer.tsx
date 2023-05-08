import { FC, Fragment, memo } from "react";
import DebugUIContainer from "../1-DebugUI/DebugUIContainer";
import ToolTip from "../3-ToolTip/ToolTip";

const UIContainer: FC = () => {
  return (
    <Fragment>
      <ToolTip />
      <DebugUIContainer />
    </Fragment>
  );
};

export default memo(UIContainer);
