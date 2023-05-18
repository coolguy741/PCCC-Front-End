import { useAnimationFrame } from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import {
  RefBooleanType,
  RefDivType,
  RefTimeoutType,
} from "../../../shared/Types/RefTypes";
import {
  animateToolTipIn,
  animateToolTipMenuIn,
  animateToolTipOut,
} from "./ToolTipAnimations";
import {
  handleDampToolTipLocation,
  handleUpdateToolTipElementLocation,
  handleUpdateToolTipFinalLocation,
  toolTipBoundingRectDimensions,
  toolTipBoundingRectDivisor,
  toolTipCurrentPositionCopy,
  toolTipDampedFollowLocation,
  toolTipFollowOffset,
  toolTipInitFollowLocation,
  toolTipMenuOffset,
} from "./ToolTipDefines";

interface UseToolTipLogicReturnTypes {
  toolTipRef: RefDivType;
  activeHoveredEntity: string | null;
}

const useToolTipLogic = (): UseToolTipLogicReturnTypes => {
  // Refs
  const toolTipRef: RefDivType = useRef(null);
  const allowToolTipUpdateRef: RefBooleanType = useRef(false);
  const menuTransistionTimeoutRef: RefTimeoutType = useRef(null);

  // Global State
  const { menuActive, cursorLocation, isHoveringEntity, activeHoveredEntity } =
    useGlobalState(
      (state) => ({
        menuActive: state.menuActive,
        cursorLocation: state.cursorLocation,
        isHoveringEntity: state.isHoveringEntity,
        activeHoveredEntity: state.activeHoveredEntity,
      }),
      shallow,
    );

  // Handlers
  const handleSetToolTipInitLocation = useCallback((): void => {
    if (menuActive) return;
    if (!isHoveringEntity) return;

    toolTipInitFollowLocation.set(
      cursorLocation.x -
        toolTipBoundingRectDimensions.x / toolTipBoundingRectDivisor +
        toolTipFollowOffset.x,
      cursorLocation.y -
        toolTipBoundingRectDimensions.y / toolTipBoundingRectDivisor +
        toolTipFollowOffset.y,
    );
  }, [menuActive, cursorLocation, isHoveringEntity]);

  const handleRevealHideToolTip = useCallback((): void => {
    if (menuActive) return;
    if (!toolTipRef.current) return;

    if (isHoveringEntity) {
      toolTipDampedFollowLocation.copy(toolTipInitFollowLocation);
      animateToolTipIn(toolTipRef.current);
    } else {
      allowToolTipUpdateRef.current = true;
      animateToolTipOut(toolTipRef.current);
    }
  }, [menuActive, isHoveringEntity]);

  const handleToolTipMenuPositionDelay = useCallback((): void => {
    if (menuTransistionTimeoutRef.current) {
      clearTimeout(menuTransistionTimeoutRef.current);
    }

    menuTransistionTimeoutRef.current = setTimeout((): void => {
      allowToolTipUpdateRef.current = false;
    }, 700);
  }, []);

  const handleUpdateToolTipMenuPosition = useCallback((): void => {
    if (!menuActive) return;
    if (!toolTipRef.current) return;

    allowToolTipUpdateRef.current = true;

    toolTipCurrentPositionCopy.set(
      cursorLocation.x -
        toolTipBoundingRectDimensions.x / toolTipBoundingRectDivisor +
        toolTipMenuOffset.x,
      cursorLocation.y -
        toolTipBoundingRectDimensions.y / toolTipBoundingRectDivisor +
        toolTipMenuOffset.y,
    );

    animateToolTipMenuIn(
      toolTipInitFollowLocation,
      toolTipCurrentPositionCopy,
      handleToolTipMenuPositionDelay,
    );
  }, [menuActive, cursorLocation, handleToolTipMenuPositionDelay]);

  const handleUpdateToolTipBoundingRect = useCallback((): void => {
    if (!toolTipRef.current) return;

    const toolTipBoundingRect = toolTipRef.current.getBoundingClientRect();

    toolTipBoundingRectDimensions.set(
      toolTipBoundingRect.width,
      toolTipBoundingRect.height,
    );
  }, []);

  // Listeners
  useEffect(handleSetToolTipInitLocation, [
    isHoveringEntity,
    handleSetToolTipInitLocation,
  ]);

  useEffect(handleRevealHideToolTip, [
    menuActive,
    isHoveringEntity,
    handleRevealHideToolTip,
  ]);

  useEffect(handleUpdateToolTipMenuPosition, [
    menuActive,
    handleUpdateToolTipMenuPosition,
  ]);

  useLayoutEffect(handleUpdateToolTipBoundingRect, [
    activeHoveredEntity,
    handleUpdateToolTipBoundingRect,
  ]);

  // Hooks
  useAnimationFrame((time, delta): void => {
    if (!toolTipRef.current) return;

    handleSetToolTipInitLocation();

    if ((isHoveringEntity || menuActive) && allowToolTipUpdateRef.current) {
      handleDampToolTipLocation(delta);
      handleUpdateToolTipFinalLocation();
      handleUpdateToolTipElementLocation(toolTipRef.current);
    }
  });

  return { toolTipRef, activeHoveredEntity };
};

export { useToolTipLogic };
