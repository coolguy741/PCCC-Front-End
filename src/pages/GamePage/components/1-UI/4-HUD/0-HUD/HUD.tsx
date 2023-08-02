import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import ToolTip from "../2-ToolTip/ToolTip";
import Eye from "../3-Eye/Eye";
import HUDMenuOptionStage from "../4-HUDMenuOption/HUDMenuOptionStage";
import Inspect from "../5-Inspect/0-inspect/Inspect";
import Inventory from "../6-Inventory/0-Inventory/Inventory";
import Settings from "../7-Settings/0-Settings/Settings";
import CreditsPanel from "../7-Settings/10-CreditsPanel/CreditsPanel";
import QuitPanel from "../7-Settings/11-QuitPanel/QuitPanel";
import LoadPanel from "../7-Settings/8-LoadPanel/0-LoadPanel/LoadPanel";
import AchievementsPanel from "../8-Achievements/0-AchievementsPanel/AchievementsPanel";

const HUDConsolidated: FC = () => {
  return (
    <Fragment>
      <Eye />
      <HUDMenuOptionStage />
      <Inspect />
      <Inventory />
      <CreditsPanel />
      <LoadPanel />
      <QuitPanel />
      <Settings />
      <AchievementsPanel />
      <ToolTip />
    </Fragment>
  );
};

const HUD: FC = () => {
  // Global State
  const { isDebugMode, isDebugUIVisible } = useGlobalState(
    (state) => ({
      isDebugMode: state.isDebugMode,
      isDebugUIVisible: state.isDebugUIVisible,
    }),
    shallow,
  );

  return isDebugMode ? (
    !isDebugUIVisible ? (
      <HUDConsolidated />
    ) : null
  ) : (
    <HUDConsolidated />
  );
};

export default memo(HUD);
