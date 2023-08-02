import { RootState, useFrame } from "@react-three/fiber";
import { useCallback, useEffect, useRef } from "react";
import { MathUtils } from "three";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../../globalState/useGlobalState";
import {
  ConstantVoidFunctionType,
  R3FUseFrameFunctionType,
} from "../../../../../../shared/Types/DefineTypes";
import {
  RefNumberType,
  RefOrthographicCameraType,
} from "../../../../../../shared/Types/RefTypes";
import {
  animateCursorCameraToFollowRotation,
  animateCursorCameraToMenuRotation,
} from "./CursorCameraAnimations";
import {
  cursorCameraBreakpoint1,
  cursorCameraBreakpoint2,
  cursorCameraBreakpoint3,
  cursorCameraInitRotation,
  cursorCameraMaxRotation,
  cursorCameraMinRotation,
  cursorCurrentXLocation,
  handleCursorCameraDampedRotation,
  handleCursorCameraFinalMenuRotation,
  handleHaltInterpolationCheck,
  handleUpdateCursorCameraFinalRotation,
  responsiveZoomRatio,
} from "./CursorCameraDefines";
import {
  CursorFourOptionMapArrayType,
  UseCursorCameraLogicHookTypes,
  UseCursorCameraLogicReturnTypes,
} from "./CursorCameraTypes";

const useCursorCameraLogic: UseCursorCameraLogicHookTypes =
  (): UseCursorCameraLogicReturnTypes => {
    // Refs
    const cursorCameraRef: RefOrthographicCameraType = useRef(null);
    const cursorCameraDampedFollowStepRef: RefNumberType = useRef(0);

    // Global Stated
    const {
      menuActive,
      cursorSize,
      windowSize,
      cursorLocation,
      hoveredSection,
      setHoveredSection,
    } = useGlobalState(
      (state) => ({
        cursorSize: state.cursorSize,
        menuActive: state.menuActive,
        windowSize: state.windowSize,
        cursorLocation: state.cursorLocation,
        hoveredSection: state.hoveredSection,
        setHoveredSection: state.setHoveredSection,
      }),
      shallow,
    );

    // Handlers
    const handleCaptureCurrentCursorLocation: ConstantVoidFunctionType =
      useCallback((): void => {
        if (!menuActive) return;
        cursorCurrentXLocation.copy(cursorLocation);
      }, [menuActive, cursorLocation]);

    const handleUpdateCursorCameraInitRotation: ConstantVoidFunctionType =
      useCallback((): void => {
        if (!menuActive) return;

        const windowFraction = windowSize.x / 20;

        const menuRotation = MathUtils.clamp(
          MathUtils.mapLinear(
            cursorLocation.x,
            cursorCurrentXLocation.x - windowFraction,
            cursorCurrentXLocation.x + windowFraction,
            cursorCameraMinRotation,
            cursorCameraMaxRotation,
          ),
          cursorCameraMinRotation,
          cursorCameraMaxRotation,
        );

        cursorCameraInitRotation.setX(menuRotation);
      }, [windowSize, menuActive, cursorLocation]);

    const handleAnimateCursorToMenuRotation: ConstantVoidFunctionType =
      useCallback((): void => {
        if (!menuActive) return;

        animateCursorCameraToMenuRotation(cursorCameraDampedFollowStepRef);
      }, [menuActive]);

    const handleAnimateCursorToFollowRotation: ConstantVoidFunctionType =
      useCallback((): void => {
        if (menuActive) return;
        if (cursorCameraInitRotation.x === 0) return;

        animateCursorCameraToFollowRotation(cursorCameraInitRotation);
      }, [menuActive]);

    const handleSetHoveredSection: ConstantVoidFunctionType =
      useCallback((): void => {
        if (!menuActive) return;
        if (!cursorCameraRef.current) return;

        const cursorFourOptionMap: CursorFourOptionMapArrayType = [
          {
            section: "inspect",
            condition:
              cursorCameraRef.current.rotation.z < cursorCameraBreakpoint1,
          },
          {
            section: "pickup",
            condition:
              cursorCameraRef.current.rotation.z > cursorCameraBreakpoint1 &&
              cursorCameraRef.current.rotation.z < cursorCameraBreakpoint2 &&
              cursorCameraRef.current.rotation.z < cursorCameraBreakpoint3,
          },
          {
            section: "dynamic",
            condition:
              cursorCameraRef.current.rotation.z > cursorCameraBreakpoint2 &&
              cursorCameraRef.current.rotation.z < cursorCameraBreakpoint3,
          },
          {
            section: "exit",
            condition:
              cursorCameraRef.current.rotation.z > cursorCameraBreakpoint3,
          },
        ];

        cursorFourOptionMap.forEach(({ section, condition }) => {
          if (!condition) return;
          if (hoveredSection === section) return;

          setHoveredSection(section);
        });
      }, [menuActive, hoveredSection, setHoveredSection]);

    const handleCameraZoom: ConstantVoidFunctionType = useCallback((): void => {
      if (!cursorCameraRef.current) return;
      if (cursorCameraRef.current.zoom === cursorSize.x * responsiveZoomRatio)
        return;
      cursorCameraRef.current.zoom = cursorSize.x * responsiveZoomRatio;
      cursorCameraRef.current.updateProjectionMatrix();
    }, [cursorSize]);

    const handleCursorCameraOnFrame: R3FUseFrameFunctionType = useCallback(
      (state: RootState, delta: number): void => {
        if (!cursorCameraRef.current) return;

        handleCameraZoom();

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
      [
        handleCameraZoom,
        handleSetHoveredSection,
        handleUpdateCursorCameraInitRotation,
      ],
    );

    // Listeners
    useEffect((): void => {
      handleAnimateCursorToMenuRotation();
      handleCaptureCurrentCursorLocation();
      handleAnimateCursorToFollowRotation();
    }, [
      menuActive,
      handleAnimateCursorToMenuRotation,
      handleCaptureCurrentCursorLocation,
      handleAnimateCursorToFollowRotation,
    ]);

    // Hooks
    useFrame(handleCursorCameraOnFrame);

    return { cursorCameraRef };
  };

export { useCursorCameraLogic };
