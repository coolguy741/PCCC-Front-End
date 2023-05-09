import { RootState, useFrame } from "@react-three/fiber";
import { useCallback, useEffect, useRef } from "react";
import { MathUtils } from "three";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import {
  RefNumberType,
  RefOrthographicCameraType,
} from "../../../../shared/Types/RefTypes";
import {
  animateCursorCameraToFollowRotation,
  animateCursorCameraToMenuRotation,
} from "./CursorCameraAnimations";
import {
  cursorCameraInitRotation,
  cursorCameraMaxRotation,
  cursorCameraMinRotation,
  handleCursorCameraDampedRotation,
  handleCursorCameraFinalMenuRotation,
  handleHaltInterpolationCheck,
  handleUpdateCursorCameraFinalRotation,
} from "./CursorCameraDefines";

const useCursorCameraLogic = () => {
  const cursorCameraRef: RefOrthographicCameraType = useRef(null);
  const cursorCameraDampedFollowStepRef: RefNumberType = useRef(0);

  // Global Stated
  const { menuActive, cursorLocation } = useGlobalState(
    (state) => ({
      menuActive: state.menuActive,
      cursorLocation: state.cursorLocation,
    }),
    shallow,
  );

  // Handlers
  const handleUpdateCursorCameraInitRotation = useCallback(() => {
    if (!menuActive) return;
    const menuRotation = MathUtils.clamp(
      MathUtils.mapLinear(
        cursorLocation.x,
        window.innerWidth / 3,
        (window.innerWidth / 3) * 2,
        cursorCameraMinRotation,
        cursorCameraMaxRotation,
      ),
      cursorCameraMinRotation,
      cursorCameraMaxRotation,
    );

    cursorCameraInitRotation.setX(menuRotation);
  }, [menuActive, cursorLocation]);

  const handleAnimateCursorToMenuRotation = useCallback(() => {
    if (!menuActive) return;
    animateCursorCameraToMenuRotation(cursorCameraDampedFollowStepRef);
  }, [menuActive]);

  const handleAnimateCursorToFollowRotation = useCallback(() => {
    if (menuActive) return;
    animateCursorCameraToFollowRotation(cursorCameraInitRotation);
  }, [menuActive]);

  const handleCursorCameraOnFrame = useCallback(
    (state: RootState, delta: number) => {
      if (!cursorCameraRef.current) return;

      handleUpdateCursorCameraInitRotation();

      handleHaltInterpolationCheck(cursorCameraRef.current);

      if (cursorCameraRef.current.rotation.z === cursorCameraInitRotation.x)
        return;

      handleCursorCameraDampedRotation(
        cursorCameraDampedFollowStepRef.current,
        delta,
      );

      handleCursorCameraFinalMenuRotation();

      handleUpdateCursorCameraFinalRotation(cursorCameraRef.current);
    },
    [handleUpdateCursorCameraInitRotation],
  );

  // Listeners
  useEffect(() => {
    handleAnimateCursorToMenuRotation();
    handleAnimateCursorToFollowRotation();
  }, [
    menuActive,
    handleAnimateCursorToMenuRotation,
    handleAnimateCursorToFollowRotation,
  ]);

  // Hooks
  useFrame(handleCursorCameraOnFrame);

  return { cursorCameraRef };
};

export { useCursorCameraLogic };
