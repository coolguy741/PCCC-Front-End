import { useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import { RefDivType } from "../../../../../shared/Types/RefTypes";
import {
  animateAchievementPanelIn,
  animateAchievementPanelOut,
} from "./AchievementsPanelAnimations";

interface UseAchievementPanelLogicReturnTypes {
  achievementsPanelRef: RefDivType;
}

const useAchievementPanelLogic = (): UseAchievementPanelLogicReturnTypes => {
  // Refs
  const achievementsPanelRef: RefDivType = useRef(null);

  // Global State
  const { isAchievementsPanelOpen } = useGlobalState(
    (state) => ({
      isAchievementsPanelOpen: state.isAchievementsPanelOpen,
    }),
    shallow,
  );

  const handleShowHideSettingsPanel: ConstantVoidFunctionType =
    useCallback((): void => {
      if (!achievementsPanelRef.current) return;

      if (isAchievementsPanelOpen) {
        achievementsPanelRef.current.style.visibility = "visible";
        achievementsPanelRef.current.style.pointerEvents = "auto";
        animateAchievementPanelIn(achievementsPanelRef.current);
      } else if (!isAchievementsPanelOpen) {
        animateAchievementPanelOut(achievementsPanelRef.current, () => {
          if (!achievementsPanelRef.current) return;
          achievementsPanelRef.current.style.visibility = "hidden";
          achievementsPanelRef.current.style.pointerEvents = "none";
        });
      }
    }, [isAchievementsPanelOpen]);

  // Listeners
  useEffect(handleShowHideSettingsPanel, [
    isAchievementsPanelOpen,
    handleShowHideSettingsPanel,
  ]);

  return { achievementsPanelRef };
};

export { useAchievementPanelLogic };
