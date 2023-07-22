import { FC, memo } from "react";
import AchievementTabButton from "../1-AchievementPanelTabButton/AchievementTabButton";
import AchievementsPanelTab from "../2-AchievementsPanelTab/AchievementsPanelTab";
import CCCButtons from "../3-CCCButton/CCCButtons";
import AchievementItems from "../4-AchievementItems/AchievementItems";
import AchievementsPanelStyleContainer from "./AchievementsPanelStyleContainer";

const AchievementsPanel: FC = () => {
  return (
    <AchievementsPanelStyleContainer>
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
          <div className="top-fade" />
        </div>

        <div className="todo-list">
          <img
            alt={"todo"}
            draggable={false}
            src="/game_assets/ui_images/achievements/todo.webp"
          />
        </div>
      </div>
    </AchievementsPanelStyleContainer>
  );
};

export default memo(AchievementsPanel);
