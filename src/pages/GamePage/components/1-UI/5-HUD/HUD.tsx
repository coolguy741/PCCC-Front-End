import { FC, Fragment, memo } from "react";
import HUDMenuOptionStage from "./0-HUDMenuOption/HUDMenuOptionStage";

const HUD: FC = () => {
  return (
    <Fragment>
      <HUDMenuOptionStage />
    </Fragment>
  );
};

export default memo(HUD);
