import { FC, memo, useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import { RefDivType } from "../../../../../shared/Types/RefTypes";
import AchievementsPanelTabStyleContainer from "./AchievementsPanelTabStyleContainer";
import { animAchievementPanelTabOpacity } from "./AchievmentsPanelTabAnimations";

const AchievementsPanelTab: FC = () => {
  // Refs
  const activeGardenPanelTabRef: RefDivType = useRef(null);
  const activeKitchenPanelTabRef: RefDivType = useRef(null);

  // Global State
  const { activeAchievementsModalTab } = useGlobalState(
    (state) => ({
      activeAchievementsModalTab: state.activeAchievementsModalTab,
    }),
    shallow,
  );

  const handleShowHideAchievementsPanelTab: ConstantVoidFunctionType =
    useCallback((): void => {
      if (!activeGardenPanelTabRef.current) return;
      if (!activeKitchenPanelTabRef.current) return;

      if (activeAchievementsModalTab === "garden") {
        animAchievementPanelTabOpacity(1, 0, activeGardenPanelTabRef.current);
        animAchievementPanelTabOpacity(0, 0, activeKitchenPanelTabRef.current);
      } else if (activeAchievementsModalTab === "kitchen") {
        animAchievementPanelTabOpacity(0, 0, activeGardenPanelTabRef.current);
        animAchievementPanelTabOpacity(1, 0, activeKitchenPanelTabRef.current);
      }
    }, [activeAchievementsModalTab]);

  // Listeners
  useEffect(handleShowHideAchievementsPanelTab, [
    activeAchievementsModalTab,
    handleShowHideAchievementsPanelTab,
  ]);

  return (
    <AchievementsPanelTabStyleContainer>
      <div className="garden-active-layer" ref={activeGardenPanelTabRef}>
        <div className="in-active-kitchen">
          <img
            alt="in-active-kitchen"
            draggable={false}
            src="/game_assets/ui_images/achievements/achievement_tabs/inactive_kitchen_tab.webp"
          />
        </div>
        <div className="active-garden">
          <img
            alt="active-garden"
            draggable={false}
            src="/game_assets/ui_images/achievements/achievement_tabs/active_garden_tab.webp"
          />
        </div>
      </div>

      <div className="kitchen-active-layer" ref={activeKitchenPanelTabRef}>
        <div className="in-active-garden">
          <img
            alt="in-active-garden"
            draggable={false}
            src="/game_assets/ui_images/achievements/achievement_tabs/inactive_garden_tab.webp"
          />
        </div>
        <div className="active-kitchen">
          <img
            alt="active-kitchen"
            draggable={false}
            src="/game_assets/ui_images/achievements/achievement_tabs/active_kitchen_tab.webp"
          />
        </div>
      </div>
    </AchievementsPanelTabStyleContainer>
  );
};

export default memo(AchievementsPanelTab);
