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
  pickUpOptionBoundingRectDimensions,
  pickUpOptionBoundingRectDivisor,
  pickUpOptionCenterXOffset,
  pickUpOptionCenterYOffset,
  pickUpOptionDampedFollowLocation,
  pickUpOptionDampedFollowLocationStep,
  pickUpOptionFollowLocation,
} from "./PickupOptionDefines";
import PickUpOptionStyleContainer from "./PickUpOptionStyleContainer";

const PickUpOption: FC = () => {
  // Refs
  const pickUpOptionRef: RefImageType = useRef(null);
  const hasSetBoundsRef: RefBooleanType = useRef(false);

  // Global State
  const { menuActive } = useGlobalState(
    (state) => ({
      menuActive: state.menuActive,
    }),
    shallow,
  );

  // Handlers
  const handleSetPickUpOptionLocation = useCallback((event: MouseEvent) => {
    pickUpOptionFollowLocation.set(
      event.clientX -
        pickUpOptionBoundingRectDimensions.x / pickUpOptionBoundingRectDivisor +
        pickUpOptionCenterXOffset,
      event.clientY -
        pickUpOptionBoundingRectDimensions.y / pickUpOptionBoundingRectDivisor +
        pickUpOptionCenterYOffset,
    );

    // if (menuActive) {
    //   const mX = (event.clientX * 2) / window.innerWidth;
    //   if (mX >= 0.33 && mX <= 0.66 && pickUpOptionRef.current) {
    //     animateCursorOptionsHoverIn(pickUpOptionRef.current);
    //   } else if (pickUpOptionRef.current) {
    //     animateCursorOptionsHoverOut(pickUpOptionRef.current);
    //   }
    // }
  }, []);

  const handleLerpPickUpOptionLocation = useCallback(
    (delta: number) => {
      if (menuActive) return;
      if (!pickUpOptionRef.current) return;

      DampVector2(
        pickUpOptionDampedFollowLocation,
        pickUpOptionFollowLocation,
        pickUpOptionDampedFollowLocationStep,
        delta,
      );

      pickUpOptionRef.current.style.left = `${pickUpOptionDampedFollowLocation.x}px`;
      pickUpOptionRef.current.style.top = `${pickUpOptionDampedFollowLocation.y}px`;
    },
    [menuActive],
  );

  const handleUpdatePickUpOptionBoundingRect = useCallback(() => {
    if (hasSetBoundsRef.current) return;
    if (!pickUpOptionRef.current) return;

    hasSetBoundsRef.current = true;

    const pickUpOptionsBoundingRect =
      pickUpOptionRef.current.getBoundingClientRect();

    pickUpOptionBoundingRectDimensions.set(
      pickUpOptionsBoundingRect.width,
      pickUpOptionsBoundingRect.height,
    );
  }, []);

  const handleRevealHidePickUpOption = useCallback(() => {
    if (pickUpOptionRef.current) {
      if (menuActive) {
        animateCursorOptionsIn(pickUpOptionRef.current);
      } else {
        animateCursorOptionsOut(pickUpOptionRef.current);
      }
    }
  }, [menuActive]);

  const handlePointerOverEvent = useCallback((event: MouseEvent) => {
    if (pickUpOptionRef.current) {
      animateCursorOptionsHoverIn(pickUpOptionRef.current);
    }
  }, []);

  const handlePointerOutEvent = useCallback((event: MouseEvent) => {
    if (pickUpOptionRef.current) {
      animateCursorOptionsHoverOut(pickUpOptionRef.current);
    }
  }, []);

  // Listeners
  useLayoutEffect(handleUpdatePickUpOptionBoundingRect, [
    handleUpdatePickUpOptionBoundingRect,
  ]);

  useEffect(handleRevealHidePickUpOption, [
    menuActive,
    handleRevealHidePickUpOption,
  ]);

  // Hooks
  useMouseMove(handleSetPickUpOptionLocation);

  useAnimationFrame((time, delta) => {
    handleLerpPickUpOptionLocation(delta);
  });

  return (
    <PickUpOptionStyleContainer
      ref={pickUpOptionRef}
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
      <h3 className="label">Pick Up</h3>
    </PickUpOptionStyleContainer>
  );
};

export default memo(PickUpOption);
