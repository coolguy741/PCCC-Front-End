import { useAnimationFrame } from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import { RefDivType } from "../../../shared/Types/RefTypes";
import { DampVector2 } from "../../../shared/Utility/UtilityFunctions";
import useMouseMove from "../4-Hooks/useMouseMove";
import { animateToolTipIn, animateToolTipOut } from "./ToolTipAnimations";
import {
  toolTipBoundingRectDimensions,
  toolTipCenterXOffset,
  toolTipCenterYOffset,
  toolTipFollowLocation,
  toolTipLerpedFollowLocation,
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
        toolTipBoundingRectDimensions.x / 2 +
        toolTipCenterXOffset,
      event.clientY -
        toolTipBoundingRectDimensions.y / 2 +
        toolTipCenterYOffset,
    );
  }, []);

  const handleLerpToolTipLocation = useCallback(
    (delta: number) => {
      if (!isHoveringEntity) return;
      if (!toolTipRef.current) return;

      DampVector2(
        toolTipLerpedFollowLocation,
        toolTipFollowLocation,
        0.01,
        delta,
      );

      toolTipRef.current.style.left = `${toolTipLerpedFollowLocation.x}px`;
      toolTipRef.current.style.top = `${toolTipLerpedFollowLocation.y}px`;
    },
    [isHoveringEntity],
  );

  const handleRevealHideToolTip = useCallback(() => {
    if (!toolTipRef.current) return;

    if (isHoveringEntity) {
      toolTipLerpedFollowLocation.copy(toolTipFollowLocation);
      animateToolTipIn(toolTipRef.current);
    } else {
      animateToolTipOut(toolTipRef.current);
    }
  }, [isHoveringEntity]);

  const handleUpdateToolTipBoundingRect = useCallback(() => {
    if (toolTipRef.current) {
      const toolTipBoundingRect = toolTipRef.current.getBoundingClientRect();

      toolTipBoundingRectDimensions.set(
        toolTipBoundingRect.width,
        toolTipBoundingRect.height,
      );
    }
  }, []);

  // Listeners
  useEffect(() => {
    handleRevealHideToolTip();
  }, [isHoveringEntity, handleRevealHideToolTip]);

  useLayoutEffect(() => {
    handleUpdateToolTipBoundingRect();
  }, [activeHoveredEntity, handleUpdateToolTipBoundingRect]);

  // Hooks
  useMouseMove(handleSetToolTipLocation);

  useAnimationFrame((time, delta) => {
    handleLerpToolTipLocation(delta);
  });

  return { toolTipRef, activeHoveredEntity };
};

export { useToolTipLogic };
