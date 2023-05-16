import { Canvas } from "@react-three/fiber";
import { FC, memo, ReactNode, Suspense } from "react";
import { devicePixelRatio } from "../../../shared/Consts/CanvasParams";
import { GLParameters } from "../../../shared/Consts/GLParameters";

interface GameCanvasPropTypes {
  children: ReactNode;
}

const GameCanvas: FC<GameCanvasPropTypes> = ({ children }) => {
  return (
    <Canvas shadows gl={GLParameters} dpr={devicePixelRatio}>
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
};

export default memo(GameCanvas);
