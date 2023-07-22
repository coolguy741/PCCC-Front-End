import { FC, memo, useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import { RefHeadingType } from "../../../../../shared/Types/RefTypes";
import { animAchievementTabTextScale } from "./AchievementTabButtonAnimations";
import AchievementTabButtonStyleContainer from "./AchievementTabButtonStyleContainer";
import { AchievementTabButtonPropTypes } from "./AchievementTabButtonTypes";

const AchievementTabButton: FC<AchievementTabButtonPropTypes> = ({ type }) => {
  // Refs
  const achievementTabButtonTextRef: RefHeadingType = useRef(null);

  // Global State
  const { activeAchievementsModalTab, setActiveAchievementsModalTab } =
    useGlobalState(
      (state) => ({
        activeAchievementsModalTab: state.activeAchievementsModalTab,
        setActiveAchievementsModalTab: state.setActiveAchievementsModalTab,
      }),
      shallow,
    );

  // Handlers
  const handleAchievementTabClicked: ConstantVoidFunctionType =
    useCallback((): void => {
      if (!achievementTabButtonTextRef.current) return;
      if (activeAchievementsModalTab === type) return;
      setActiveAchievementsModalTab(type);
      animAchievementTabTextScale(achievementTabButtonTextRef.current, 1);
    }, [type, activeAchievementsModalTab, setActiveAchievementsModalTab]);

  const handleAchievementTextSizeChange: ConstantVoidFunctionType =
    useCallback((): void => {
      if (!achievementTabButtonTextRef.current) return;
      if (activeAchievementsModalTab === type) return;
      animAchievementTabTextScale(achievementTabButtonTextRef.current, 0.75);
    }, [type, activeAchievementsModalTab]);

  // Listeners
  useEffect(handleAchievementTextSizeChange, [
    activeAchievementsModalTab,
    handleAchievementTextSizeChange,
  ]);

  return (
    <AchievementTabButtonStyleContainer>
      <button
        className={`${type}-tab-button`}
        onClick={handleAchievementTabClicked}
      >
        <h1 className={`${type}-tab-title`} ref={achievementTabButtonTextRef}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h1>
      </button>
    </AchievementTabButtonStyleContainer>
  );
};

export default memo(AchievementTabButton);
