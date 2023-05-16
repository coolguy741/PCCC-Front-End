import { OrthographicCamera } from "@react-three/drei";
import { FC, memo } from "react";
import { useCursorCameraLogic } from "./useCursorCameraLogic";

const CursorCamera: FC = () => {
  // Hooks
  const { cursorCameraRef } = useCursorCameraLogic();

  return <OrthographicCamera ref={cursorCameraRef} makeDefault zoom={100} />;
};

export default memo(CursorCamera);
