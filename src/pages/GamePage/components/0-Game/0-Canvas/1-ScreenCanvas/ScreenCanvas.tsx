import { Canvas } from "@react-three/fiber";
import { FC, memo, Suspense, useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import { devicePixelRatio } from "../../../../shared/Consts/CanvasParams";
import { GLParameters } from "../../../../shared/Consts/GLParameters";
import { ConstantVoidFunctionType } from "../../../../shared/Types/DefineTypes";
import { RefCanvasType } from "../../../../shared/Types/RefTypes";
import ScreenCanvasStyleContainer from "../../../../styles/Containers/ScreenCanvasStyleContainer";
import { ScreenCanvasPropTypes } from "./ScreenCanvasTypes";

const ScreenCanvas: FC<ScreenCanvasPropTypes> = ({ children }) => {
  // Refs
  const screenCanvasRef: RefCanvasType = useRef(null);

  // Global State
  const { activeAchievementBadge } = useGlobalState(
    (state) => ({
      activeAchievementBadge: state.activeAchievementBadge,
    }),
    shallow,
  );

  // Handlers
  const handleSCreenCanvasAnim: ConstantVoidFunctionType =
    useCallback((): void => {
      if (!screenCanvasRef.current) return;
      if (activeAchievementBadge) {
        screenCanvasRef.current.style.visibility = "visible";
      } else {
        screenCanvasRef.current.style.visibility = "hidden";
      }
    }, [activeAchievementBadge]);

  // Listeners
  useEffect(handleSCreenCanvasAnim, [
    handleSCreenCanvasAnim,
    activeAchievementBadge,
  ]);

  return (
    <ScreenCanvasStyleContainer ref={screenCanvasRef}>
      <Canvas gl={GLParameters} dpr={devicePixelRatio}>
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </ScreenCanvasStyleContainer>
  );
};

export default memo(ScreenCanvas);
