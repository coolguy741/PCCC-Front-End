import { Canvas } from "@react-three/fiber";
import { FC, memo, ReactNode, Suspense } from "react";
import { devicePixelRatio } from "../../../shared/Consts/CanvasParams";
import { GLParameters } from "../../../shared/Consts/GLParameters";

interface ScreenCanvasPropTypes {
  children: ReactNode;
}

const ScreenCanvas: FC<ScreenCanvasPropTypes> = ({ children }) => {
  return (
    <Canvas gl={GLParameters} dpr={devicePixelRatio}>
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
};

export default memo(ScreenCanvas);
