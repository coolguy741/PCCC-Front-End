import { Canvas } from "@react-three/fiber";
import { FC, memo, Suspense } from "react";
import { devicePixelRatio } from "../../../../shared/Consts/CanvasParams";
import { GLParameters } from "../../../../shared/Consts/GLParameters";
import ScreenCanvasStyleContainer from "../../../../styles/Containers/ScreenCanvasStyleContainer";
import { ScreenCanvasPropTypes } from "./ScreenCanvasTypes";

const ScreenCanvas: FC<ScreenCanvasPropTypes> = ({ children }) => {
  return (
    <ScreenCanvasStyleContainer>
      <Canvas gl={GLParameters} dpr={devicePixelRatio}>
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </ScreenCanvasStyleContainer>
  );
};

export default memo(ScreenCanvas);
