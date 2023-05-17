import { FC, Fragment, memo } from "react";
import ScreenSpace from "../2-Entities/2-ScreenSpace/ScreenSpace";

const ScreenStage: FC = () => {
  return (
    <Fragment>
      <ScreenSpace />
    </Fragment>
  );
};

export default memo(ScreenStage);
