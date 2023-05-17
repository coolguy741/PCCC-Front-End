import { FC, memo } from "react";

interface AxesHelperControllerPropTypes {
  axesArgs: number[];
}

const AxesHelperController: FC<AxesHelperControllerPropTypes> = ({
  axesArgs,
}) => {
  return <axesHelper args={axesArgs as [number]} position={[0, +0.05, 0]} />;
};

export default memo(AxesHelperController);
