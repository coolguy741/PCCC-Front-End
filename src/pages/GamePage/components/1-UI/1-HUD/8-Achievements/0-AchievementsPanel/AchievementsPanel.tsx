import { gsap } from "gsap";
import { FC, memo, useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { BACK_1_OUT } from "../../../../../shared/Eases/Eases";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import { RefDivType } from "../../../../../shared/Types/RefTypes";
import AchievementTabButton from "../1-AchievementPanelTabButton/AchievementTabButton";
import AchievementsPanelTab from "../2-AchievementsPanelTab/AchievementsPanelTab";
import CCCButtons from "../3-CCCButton/CCCButtons";
import AchievementStatus from "../4-AchievementStatus/AchievementStatus";
import AchievementItems from "../5-AchievementItems/AchievementItems";
import AchievementExitButton from "../6-AchievementExitButton/AchievementExitButton";
import AchievementsPanelStyleContainer from "./AchievementsPanelStyleContainer";

const AchievementsPanel: FC = () => {
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
        gsap.fromTo(
          achievementsPanelRef.current,
          {
            y: -500,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            overwrite: true,
            ease: BACK_1_OUT,
          },
        );
      } else if (!isAchievementsPanelOpen) {
        gsap.to(achievementsPanelRef.current, {
          y: -500,
          opacity: 0,
          duration: 0.5,
          overwrite: true,
          ease: BACK_1_OUT,
          onComplete: () => {
            if (!achievementsPanelRef.current) return;
            achievementsPanelRef.current.style.visibility = "hidden";
          },
        });
      }
    }, [isAchievementsPanelOpen]);

  // Listeners
  useEffect(handleShowHideSettingsPanel, [
    isAchievementsPanelOpen,
    handleShowHideSettingsPanel,
  ]);

  return (
    <AchievementsPanelStyleContainer ref={achievementsPanelRef}>
      <div className="achievements-panel">
        <img
          draggable={"false"}
          alt={"achievements"}
          className={"achievements-panel-bg"}
          src={"/game_assets/ui_images/achievements/achievements_panel_bg.webp"}
        />
        <h1 className="achievements-panel-title">Achievements</h1>
        <div className="achievement-tabs">
          <AchievementsPanelTab />
          <AchievementTabButton type={"kitchen"} />
          <AchievementTabButton type={"garden"} />
          <CCCButtons />
          <AchievementItems />
          <AchievementStatus />
          <div className="top-fade" />
        </div>

        <div className="todo-list">
          <img
            alt={"todo"}
            draggable={false}
            src="/game_assets/ui_images/achievements/todo.webp"
          />
        </div>
        <div className="exit-button-container">
          <AchievementExitButton />
        </div>
      </div>
    </AchievementsPanelStyleContainer>
  );
};

export default memo(AchievementsPanel);
