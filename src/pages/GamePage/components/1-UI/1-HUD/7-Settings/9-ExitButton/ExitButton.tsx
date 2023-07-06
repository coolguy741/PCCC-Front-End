import { FC, memo } from "react";
import ExitSettingsButtonSVG from "../13-SettingsSVGAssets/ExitSettingsButtonSVG";
import ExitButtonStyleContainer from "./ExitButtonStyleContainer";

interface ExitButtonProps {
  exitAction: () => void;
}
const ExitButton: FC<ExitButtonProps> = ({ exitAction }) => {
  return (
    <ExitButtonStyleContainer onClick={exitAction}>
      <ExitSettingsButtonSVG />
    </ExitButtonStyleContainer>
  );
};

export default memo(ExitButton);
