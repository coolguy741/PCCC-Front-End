import { Box } from "@react-three/drei";
import { FC, Fragment, memo } from "react";

const GameStage: FC = () => {
  return (
    <Fragment>
      <Box position={[0, 0, 5]} />
    </Fragment>
  );
};

export default memo(GameStage);
