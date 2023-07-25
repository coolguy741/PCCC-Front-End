import { FC, memo, useCallback } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import ExitSettingsButtonSVG from "../../7-Settings/13-SettingsSVGAssets/ExitSettingsButtonSVG";
import AchievementExitButtonStyleContainer from "./AchievementExitButtonStyleContainer";

const ExitButton: FC = () => {
  // Global State
  const { setIsAchievementsPanelOpen } = useGlobalState(
    (state) => ({
      setIsAchievementsPanelOpen: state.setIsAchievementsPanelOpen,
    }),
    shallow,
  );

  // Handlers
  const handleAchievementExitButtonClicked = useCallback((): void => {
    setIsAchievementsPanelOpen(false);
  }, [setIsAchievementsPanelOpen]);

  return (
    <AchievementExitButtonStyleContainer
      onClick={handleAchievementExitButtonClicked}
    >
      <ExitSettingsButtonSVG />
    </AchievementExitButtonStyleContainer>
  );
};

export default memo(ExitButton);
