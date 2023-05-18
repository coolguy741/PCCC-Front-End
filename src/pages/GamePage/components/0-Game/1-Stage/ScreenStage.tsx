import { FC, Fragment, memo } from "react";
import ScreenSpace from "../2-Entities/ScreenSpace";

const ScreenStage: FC = () => {
  return (
    <Fragment>
      <ScreenSpace />
    </Fragment>
  );
};

export default memo(ScreenStage);
