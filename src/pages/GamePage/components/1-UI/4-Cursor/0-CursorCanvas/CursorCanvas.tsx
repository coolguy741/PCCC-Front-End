import { Canvas } from "@react-three/fiber";
import { FC, memo, ReactNode, Suspense } from "react";
import { devicePixelRatio } from "../../../../shared/Consts/CanvasParams";
import { GLParameters } from "../../../../shared/Consts/GLParameters";
import { cursorCanvasStyles } from "./CursorCanvasDefines";
import CursorCanvasStyleContainer from "./CursorCanvasStyleContainer";
import { useCursorCanvasLogic } from "./useCursorCanvasLogic";

interface CursorCanvasPropTypes {
  children: ReactNode;
}

const CursorCanvas: FC<CursorCanvasPropTypes> = ({ children }) => {
  // Hooks
  const { cursorCanvasRef } = useCursorCanvasLogic();

  return (
    <CursorCanvasStyleContainer ref={cursorCanvasRef}>
      <Canvas
        gl={GLParameters}
        dpr={devicePixelRatio}
        style={cursorCanvasStyles}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </CursorCanvasStyleContainer>
  );
};

export default memo(CursorCanvas);
