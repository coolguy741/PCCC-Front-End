import { useAnimationFrame } from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import { RefDivType } from "../../../shared/Types/RefTypes";
import { animateToolTipIn, animateToolTipOut } from "./ToolTipAnimations";
import {
  handleDampToolTipLocation,
  handleUpdateToolTipElementLocation,
  handleUpdateToolTipFinalLocation,
  toolTipBoundingRectDimensions,
  toolTipBoundingRectDivisor,
  toolTipCenterXOffset,
  toolTipCenterYOffset,
  toolTipDampedFollowLocation,
  toolTipInitFollowLocation,
} from "./ToolTipDefines";

const useToolTipLogic = () => {
  // Refs
  const toolTipRef: RefDivType = useRef(null);

  // Global State
  const { cursorLocation, isHoveringEntity, activeHoveredEntity } =
    useGlobalState(
      (state) => ({
        cursorLocation: state.cursorLocation,
        isHoveringEntity: state.isHoveringEntity,
        activeHoveredEntity: state.activeHoveredEntity,
      }),
      shallow,
    );

  // Handlers
  const handleSetToolTipInitLocation = useCallback(() => {
    if (!isHoveringEntity) return;
    toolTipInitFollowLocation.set(
      cursorLocation.x -
        toolTipBoundingRectDimensions.x / toolTipBoundingRectDivisor +
        toolTipCenterXOffset,
      cursorLocation.y -
        toolTipBoundingRectDimensions.y / toolTipBoundingRectDivisor +
        toolTipCenterYOffset,
    );
  }, [cursorLocation, isHoveringEntity]);

  const handleRevealHideToolTip = useCallback(() => {
    if (!toolTipRef.current) return;

    if (isHoveringEntity) {
      toolTipDampedFollowLocation.copy(toolTipInitFollowLocation);
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
  useEffect(() => {
    handleSetToolTipInitLocation();
    handleRevealHideToolTip();
  }, [isHoveringEntity, handleRevealHideToolTip, handleSetToolTipInitLocation]);

  useLayoutEffect(handleUpdateToolTipBoundingRect, [
    activeHoveredEntity,
    handleUpdateToolTipBoundingRect,
  ]);

  // Hooks
  useAnimationFrame((time, delta) => {
    if (!toolTipRef.current) return;

    handleSetToolTipInitLocation();
    handleDampToolTipLocation(delta);
    handleUpdateToolTipFinalLocation();
    handleUpdateToolTipElementLocation(toolTipRef.current);
  });

  return { toolTipRef, activeHoveredEntity };
};

export { useToolTipLogic };
