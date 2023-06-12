import { Canvas } from "@react-three/fiber";
import { FC, memo, Suspense } from "react";
import { devicePixelRatio } from "../../../../shared/Consts/CanvasParams";
import { GLParameters } from "../../../../shared/Consts/GLParameters";
import GameCanvasStyleContainer from "../../../../styles/Containers/GameCanvasStyleContainer";
import { GameCanvasPropTypes } from "./GameCanvasTypes";

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
