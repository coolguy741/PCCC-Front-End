import { Plane } from "@react-three/drei";
import { FC, memo } from "react";
import { useCursorHandLogic } from "./useCursorHandLogic";

const CursorHand: FC = () => {
  // Hooks
  const { cursorHandRef, cursorTexture } = useCursorHandLogic();

  return (
    <Plane ref={cursorHandRef} position={[0.05, 0, -1]}>
      <meshBasicMaterial transparent map={cursorTexture} />
    </Plane>
  );
};

export default memo(CursorHand);
