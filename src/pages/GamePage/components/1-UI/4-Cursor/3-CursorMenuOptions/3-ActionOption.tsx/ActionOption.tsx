import { useAnimationFrame } from "framer-motion";
import {
  FC,
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import {
  RefBooleanType,
  RefImageType,
} from "../../../../../shared/Types/RefTypes";
import { DampVector2 } from "../../../../../shared/Utility/UtilityFunctions";
import useMouseMove from "../../../5-Hooks/useMouseMove";

import {
  animateCursorOptionsHoverIn,
  animateCursorOptionsHoverOut,
  animateCursorOptionsIn,
  animateCursorOptionsOut,
} from "../CursorMenuOptionAnimations";
import {
  actionOptionBoundingRectDimensions,
  actionOptionBoundingRectDivisor,
  actionOptionCenterXOffset,
  actionOptionCenterYOffset,
  actionOptionDampedFollowLocation,
  actionOptionDampedFollowLocationStep,
  actionOptionFollowLocation,
} from "./ActionOptionDefines";
import ActionOptionStyleContainer from "./ActionOptionStyleContainer";

const PickUpOption: FC = () => {
  // Refs
  const actionOptionRef: RefImageType = useRef(null);
  const hasSetBoundsRef: RefBooleanType = useRef(false);

  // Global State
  const { menuActive } = useGlobalState(
    (state) => ({
      menuActive: state.menuActive,
    }),
    shallow,
  );

  // Handlers
  const handleSetActionOptionLocation = useCallback((event: MouseEvent) => {
    actionOptionFollowLocation.set(
      event.clientX -
        actionOptionBoundingRectDimensions.x / actionOptionBoundingRectDivisor +
        actionOptionCenterXOffset,
      event.clientY -
        actionOptionBoundingRectDimensions.y / actionOptionBoundingRectDivisor +
        actionOptionCenterYOffset,
    );

    // if (menuActive) {
    //   const mX = (event.clientX * 2) / window.innerWidth;
    //   if (mX < 0.66 && actionOptionRef.current) {
    //     animateCursorOptionsHoverOut(actionOptionRef.current);
    //   } else if (actionOptionRef.current) {
    //     animateCursorOptionsHoverIn(actionOptionRef.current);
    //   }
    // }
  }, []);

  const handleLerpActionOptionLocation = useCallback(
    (delta: number) => {
      if (menuActive) return;
      if (!actionOptionRef.current) return;

      DampVector2(
        actionOptionDampedFollowLocation,
        actionOptionFollowLocation,
        actionOptionDampedFollowLocationStep,
        delta,
      );

      actionOptionRef.current.style.left = `${actionOptionDampedFollowLocation.x}px`;
      actionOptionRef.current.style.top = `${actionOptionDampedFollowLocation.y}px`;
    },
    [menuActive],
  );

  const handleUpdateActionOptionBoundingRect = useCallback(() => {
    if (hasSetBoundsRef.current) return;
    if (!actionOptionRef.current) return;

    hasSetBoundsRef.current = true;

    const actionsOptionsBoundingRect =
      actionOptionRef.current.getBoundingClientRect();

    actionOptionBoundingRectDimensions.set(
      actionsOptionsBoundingRect.width,
      actionsOptionsBoundingRect.height,
    );
  }, []);

  const handleRevealHideActionOption = useCallback(() => {
    if (actionOptionRef.current) {
      if (menuActive) {
        animateCursorOptionsIn(actionOptionRef.current);
      } else {
        animateCursorOptionsOut(actionOptionRef.current);
      }
    }
  }, [menuActive]);

  const handlePointerOverEvent = useCallback((event: MouseEvent) => {
    if (actionOptionRef.current) {
      animateCursorOptionsHoverIn(actionOptionRef.current);
    }
  }, []);

  const handlePointerOutEvent = useCallback((event: MouseEvent) => {
    if (actionOptionRef.current) {
      animateCursorOptionsHoverOut(actionOptionRef.current);
    }
  }, []);

  // Listeners
  useLayoutEffect(handleUpdateActionOptionBoundingRect, [
    handleUpdateActionOptionBoundingRect,
  ]);

  useEffect(handleRevealHideActionOption, [
    menuActive,
    handleRevealHideActionOption,
  ]);

  // Hooks
  useMouseMove(handleSetActionOptionLocation);

  useAnimationFrame((time, delta) => {
    handleLerpActionOptionLocation(delta);
  });

  return (
    <ActionOptionStyleContainer
      ref={actionOptionRef}
      onPointerOver={handlePointerOverEvent}
      onPointerOut={handlePointerOutEvent}
    >
      <div className="circle-bg">
        <img
          alt="temp"
          draggable={false}
          src="/game_assets/ui_images/gj.webp"
        />
      </div>
      <h3 className="label">Use</h3>
    </ActionOptionStyleContainer>
  );
};

export default memo(PickUpOption);
