import { Perf } from "r3f-perf";
import { FC, memo } from "react";

const PerfHelperController: FC = () => {
  return <Perf position={"top-left"} style={{ marginTop: "3rem" }} />;
};

export default memo(PerfHelperController);
