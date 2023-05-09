import { useAnimationFrame } from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import { RefDivType } from "../../../shared/Types/RefTypes";
import { DampVector2 } from "../../../shared/Utility/UtilityFunctions";
import useMouseMove from "../5-Hooks/useMouseMove";
import { animateToolTipIn, animateToolTipOut } from "./ToolTipAnimations";
import {
  toolTipBoundingRectDimensions,
  toolTipBoundingRectDivisor,
  toolTipCenterXOffset,
  toolTipCenterYOffset,
  toolTipDampedFollowLocation,
  toolTipDampedFollowLocationStep,
  toolTipFollowLocation,
} from "./ToolTipDefines";

const useToolTipLogic = () => {
  // Refs
  const toolTipRef: RefDivType = useRef(null);

  // Global State
  const { isHoveringEntity, activeHoveredEntity } = useGlobalState(
    (state) => ({
      isHoveringEntity: state.isHoveringEntity,
      activeHoveredEntity: state.activeHoveredEntity,
    }),
    shallow,
  );

  // Handlers
  const handleSetToolTipLocation = useCallback((event: MouseEvent) => {
    toolTipFollowLocation.set(
      event.clientX -
        toolTipBoundingRectDimensions.x / toolTipBoundingRectDivisor +
        toolTipCenterXOffset,
      event.clientY -
        toolTipBoundingRectDimensions.y / toolTipBoundingRectDivisor +
        toolTipCenterYOffset,
    );
  }, []);

  const handleLerpToolTipLocation = useCallback(
    (delta: number) => {
      if (!isHoveringEntity) return;
      if (!toolTipRef.current) return;

      DampVector2(
        toolTipDampedFollowLocation,
        toolTipFollowLocation,
        toolTipDampedFollowLocationStep,
        delta,
      );

      toolTipRef.current.style.left = `${toolTipDampedFollowLocation.x}px`;
      toolTipRef.current.style.top = `${toolTipDampedFollowLocation.y}px`;
    },
    [isHoveringEntity],
  );

  const handleRevealHideToolTip = useCallback(() => {
    if (!toolTipRef.current) return;

    if (isHoveringEntity) {
      toolTipDampedFollowLocation.copy(toolTipFollowLocation);
      animateToolTipIn(toolTipRef.current);
    } else {
      animateToolTipOut(toolTipRef.current);
    }
  }, [isHoveringEntity]);

  const handleUpdateToolTipBoundingRect = useCallback(() => {
    if (!toolTipRef.current) return;

    const toolTipBoundingRect = toolTipRef.current.getBoundingClientRect();

    toolTipBoundingRectDimensions.set(
      toolTipBoundingRect.width,
      toolTipBoundingRect.height,
    );
  }, []);

  // Listeners
  useEffect(handleRevealHideToolTip, [
    isHoveringEntity,
    handleRevealHideToolTip,
  ]);

  useLayoutEffect(handleUpdateToolTipBoundingRect, [
    activeHoveredEntity,
    handleUpdateToolTipBoundingRect,
  ]);

  // Hooks
  useMouseMove(handleSetToolTipLocation);

  useAnimationFrame((time, delta) => {
    handleLerpToolTipLocation(delta);
  });

  return { toolTipRef, activeHoveredEntity };
};

export { useToolTipLogic };
