import { Canvas } from "@react-three/fiber";
import { FC, memo, ReactNode, Suspense } from "react";
import { devicePixelRatio } from "../../../../../shared/Consts/CanvasParams";
import { GLParameters } from "../../../../../shared/Consts/GLParameters";
import InspectCanvasStyleContainer from "./InspectCanvasStyleContainer";

// Types
interface InspectCanvasPropTypes {
  children: ReactNode;
}

const InspectCanvas: FC<InspectCanvasPropTypes> = ({ children }) => {
  return (
    <InspectCanvasStyleContainer>
      <Canvas shadows gl={GLParameters} dpr={devicePixelRatio}>
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </InspectCanvasStyleContainer>
  );
};

export default memo(InspectCanvas);
