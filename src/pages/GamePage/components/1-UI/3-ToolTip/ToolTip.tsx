import { FC, memo } from "react";
import ToolTipStyleContainer from "./ToolTipStyleContainer";
import { useToolTipLogic } from "./useToolTipLogic";

const ToolTip: FC = () => {
  // Hooks
  const { toolTipRef, activeHoveredEntity } = useToolTipLogic();

  return (
    <ToolTipStyleContainer ref={toolTipRef}>
      {activeHoveredEntity}
    </ToolTipStyleContainer>
  );
};

export default memo(ToolTip);
