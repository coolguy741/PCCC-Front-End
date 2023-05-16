import { FC, memo } from "react";
import DebugButtonStyleContainer from "./DebugButtonStyleContainer";

interface DebugButtonStyleObjectTypes {
  "--debug-button-top"?: string;
  "--debug-button-left"?: string;
  "--debug-button-right"?: string;
  "--debug-button-bottom"?: string;
  "--debug-button-position"?: string;
  "--debug-button-margin-top"?: string;
  "--debug-button-margin-left"?: string;
  "--debug-button-margin-right"?: string;
  "--debug-button-margin-bottom"?: string;
}

interface DebugButtonPropTypes {
  btnContent: string;
  btnAction: () => void;
  debugButtonStyleObject?: DebugButtonStyleObjectTypes;
}
const DebugButton: FC<DebugButtonPropTypes> = ({
  btnContent,
  btnAction,
  debugButtonStyleObject,
}) => {
  return (
    <DebugButtonStyleContainer
      onClick={btnAction}
      style={debugButtonStyleObject ? debugButtonStyleObject : null}
    >
      {btnContent}
    </DebugButtonStyleContainer>
  );
};

export default memo(DebugButton);
