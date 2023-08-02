import { FC, memo } from "react";
import AchievementTabButton from "../1-AchievementPanelTabButton/AchievementTabButton";
import AchievementsPanelTab from "../2-AchievementsPanelTab/AchievementsPanelTab";
import CCCButtons from "../3-CCCButton/CCCButtons";
import AchievementStatus from "../4-AchievementStatus/AchievementStatus";
import AchievementItems from "../5-AchievementItems/AchievementItems";
import AchievementExitButton from "../6-AchievementExitButton/AchievementExitButton";
import AchievementsPanelStyleContainer from "./AchievementsPanelStyleContainer";
import { useAchievementPanelLogic } from "./useAchievementPanelLogic";

const AchievementsPanel: FC = () => {
  // Hooks
  const { achievementsPanelRef } = useAchievementPanelLogic();

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
