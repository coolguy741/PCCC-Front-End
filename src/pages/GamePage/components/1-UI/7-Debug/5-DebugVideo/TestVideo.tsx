import { FC, memo, useCallback, useState } from "react";
import { shallow } from "zustand/shallow";
import { AllAchievementObject } from "../../../../globalState/modules/AchievementModule/AcheivementModuleDefines";
import { AchievementAllKeyType } from "../../../../globalState/modules/AchievementModule/AchievementModuleTypes";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import TestVideoStyleContainer from "./TestVideoStyleContainer";

const TestVideo: FC = () => {
  // Local State
  const [achievementStage, setAchievementStage] =
    useState<AchievementAllKeyType | string>("");

  // Global State
  const { setActiveAchievementBadge } = useGlobalState(
    (state) => ({
      setActiveAchievementBadge: state.setActiveAchievementBadge,
    }),
    shallow,
  );

  const handleAlphaState = useCallback(() => {
    if (achievementStage in AllAchievementObject) {
      setActiveAchievementBadge(achievementStage as AchievementAllKeyType);
    }
  }, [achievementStage, setActiveAchievementBadge]);

  return (
    <TestVideoStyleContainer>
      <div className="alpha">
        <h1>Set Active Achievement</h1>
        <input onChange={(e) => setAchievementStage(e.target.value)} />
        <button onClick={handleAlphaState}>Set Active Achievement</button>
      </div>
    </TestVideoStyleContainer>
  );
};

export default memo(TestVideo);
