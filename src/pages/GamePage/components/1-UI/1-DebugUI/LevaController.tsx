import { Leva } from "leva";
import { FC, memo } from "react";

interface LevaControllerPropTypes {
  isDebugUIVisible: boolean;
}

const LevaController: FC<LevaControllerPropTypes> = ({ isDebugUIVisible }) => {
  return <Leva flat collapsed hidden={!isDebugUIVisible} />;
};

export default memo(LevaController);
