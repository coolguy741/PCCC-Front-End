import { RootState, useFrame } from "@react-three/fiber";
import { useCallback, useEffect, useRef } from "react";
import { MathUtils } from "three";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import {
  RefNumberType,
  RefOrthographicCameraType,
} from "../../../../../shared/Types/RefTypes";
import {
  animateCursorCameraToFollowRotation,
  animateCursorCameraToMenuRotation,
} from "./CursorCameraAnimations";
import {
  cursorCameraBreakpoint1,
  cursorCameraBreakpoint2,
  cursorCameraInitRotation,
  cursorCameraMaxRotation,
  cursorCameraMinRotation,
  handleCursorCameraDampedRotation,
  handleCursorCameraFinalMenuRotation,
  handleHaltInterpolationCheck,
  handleUpdateCursorCameraFinalRotation,
} from "./CursorCameraDefines";

interface UseCursorCameraLogicReturnTypes {
  cursorCameraRef: RefOrthographicCameraType;
}

const useCursorCameraLogic = (): UseCursorCameraLogicReturnTypes => {
  // Refs
  const cursorCameraRef: RefOrthographicCameraType = useRef(null);
  const cursorCameraDampedFollowStepRef: RefNumberType = useRef(0);

  // Global Stated
  const {
    menuActive,
    windowSize,
    cursorLocation,
    hoveredSection,
    setHoveredSection,
  } = useGlobalState(
    (state) => ({
      menuActive: state.menuActive,
      windowSize: state.windowSize,
      cursorLocation: state.cursorLocation,
      hoveredSection: state.hoveredSection,
      setHoveredSection: state.setHoveredSection,
    }),
    shallow,
  );

  // Handlers
  const handleUpdateCursorCameraInitRotation = useCallback((): void => {
    if (!menuActive) return;
    const menuRotation = MathUtils.clamp(
      MathUtils.mapLinear(
        cursorLocation.x,
        windowSize.x / 3,
        (windowSize.x / 3) * 2,
        cursorCameraMinRotation,
        cursorCameraMaxRotation,
      ),
      cursorCameraMinRotation,
      cursorCameraMaxRotation,
    );

    cursorCameraInitRotation.setX(menuRotation);
  }, [windowSize, menuActive, cursorLocation]);

  const handleAnimateCursorToMenuRotation = useCallback((): void => {
    if (!menuActive) return;
    animateCursorCameraToMenuRotation(cursorCameraDampedFollowStepRef);
  }, [menuActive]);

  const handleAnimateCursorToFollowRotation = useCallback((): void => {
    if (menuActive) return;
    animateCursorCameraToFollowRotation(cursorCameraInitRotation);
  }, [menuActive]);

  const handleSetHoveredSection = useCallback((): void => {
    if (!menuActive || !cursorCameraRef.current) return;

    const sectionMap = [
      {
        section: "left",
        condition: cursorCameraRef.current.rotation.z < cursorCameraBreakpoint1,
      },
      {
        section: "center",
        condition:
          cursorCameraRef.current.rotation.z > cursorCameraBreakpoint1 &&
          cursorCameraRef.current.rotation.z < cursorCameraBreakpoint2,
      },
      {
        section: "right",
        condition: cursorCameraRef.current.rotation.z > cursorCameraBreakpoint2,
      },
    ];

    sectionMap.forEach(({ section, condition }) => {
      if (hoveredSection !== section && condition) {
        setHoveredSection(section);
      }
    });
  }, [menuActive, hoveredSection, setHoveredSection]);

  const handleCursorCameraOnFrame = useCallback(
    (state: RootState, delta: number): void => {
      if (!cursorCameraRef.current) return;

      handleSetHoveredSection();

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
    [handleUpdateCursorCameraInitRotation, handleSetHoveredSection],
  );

  // Listeners
  useEffect((): void => {
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
