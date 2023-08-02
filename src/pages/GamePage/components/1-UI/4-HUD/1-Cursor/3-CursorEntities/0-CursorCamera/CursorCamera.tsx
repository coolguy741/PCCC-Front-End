import { OrthographicCamera } from "@react-three/drei";
import { FC, memo } from "react";
import { useCursorCameraLogic } from "./useCursorCameraLogic";

const CursorCamera: FC = () => {
  // Component Logic
  const { cursorCameraRef } = useCursorCameraLogic();

  return <OrthographicCamera ref={cursorCameraRef} makeDefault />;
};

export default memo(CursorCamera);
