import { Canvas } from "@react-three/fiber";
import { FC, memo, ReactNode, Suspense } from "react";
import { devicePixelRatio } from "../../../shared/Consts/CanvasParams";
import { GLParameters } from "../../../shared/Consts/GLParameters";
import GameCanvasStyleContainer from "../../../styles/Containers/GameCanvasStyleContainer";

interface GameCanvasPropTypes {
  children: ReactNode;
}

const GameCanvas: FC<GameCanvasPropTypes> = ({ children }) => {
  return (
    <GameCanvasStyleContainer>
      <Canvas shadows gl={GLParameters} dpr={devicePixelRatio}>
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </GameCanvasStyleContainer>
  );
};

export default memo(GameCanvas);
