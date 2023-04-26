import { Leva } from "leva";
import { FC, memo } from "react";

const LevaController: FC = () => {
  return <Leva flat collapsed />;
};

export default memo(LevaController);
