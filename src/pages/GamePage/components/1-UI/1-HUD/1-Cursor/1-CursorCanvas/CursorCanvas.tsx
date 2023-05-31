import { Canvas } from "@react-three/fiber";
import { FC, memo, Suspense } from "react";
import { mergeRefs } from "react-merge-refs";
import { devicePixelRatio } from "../../../../../shared/Consts/CanvasParams";
import { GLParameters } from "../../../../../shared/Consts/GLParameters";
import { cursorCanvasStyles } from "./CursorCanvasConstants";
import CursorCanvasStyleContainer from "./CursorCanvasStyleContainer";
import { CursorCanvasPropTypes } from "./CursorCanvasTypes";
import { useCursorCanvasLogic } from "./useCursorCanvasLogic";

const CursorCanvas: FC<CursorCanvasPropTypes> = ({ children }) => {
  // Component Logic
  const { cursorCanvasRef, cursorCanvasMeasureRef } = useCursorCanvasLogic();

  return (
    <CursorCanvasStyleContainer
      ref={mergeRefs([cursorCanvasRef, cursorCanvasMeasureRef])}
    >
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
