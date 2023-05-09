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
  inspectOptionBoundingRectDimensions,
  inspectOptionBoundingRectDivisor,
  inspectOptionCenterXOffset,
  inspectOptionCenterYOffset,
  inspectOptionDampedFollowLocation,
  inspectOptionDampedFollowLocationStep,
  inspectOptionFollowLocation,
} from "./InspectOptionDefines";
import InspectOptionStyleContainer from "./InspectOptionStyleContainer";

const InspectOption: FC = () => {
  // Refs
  const inspectOptionRef: RefImageType = useRef(null);
  const hasSetBoundsRef: RefBooleanType = useRef(false);

  // Global State
  const { menuActive } = useGlobalState(
    (state) => ({
      menuActive: state.menuActive,
    }),
    shallow,
  );

  // Handlers
  const handleSetInspectOptionsLocation = useCallback((event: MouseEvent) => {
    inspectOptionFollowLocation.set(
      event.clientX -
        inspectOptionBoundingRectDimensions.x /
          inspectOptionBoundingRectDivisor +
        inspectOptionCenterXOffset,
      event.clientY -
        inspectOptionBoundingRectDimensions.y /
          inspectOptionBoundingRectDivisor +
        inspectOptionCenterYOffset,
    );

    // if (menuActive) {
    //   const mX = event.clientX / window.innerWidth;
    //   if (mX > 0.33 && inspectOptionRef.current) {
    //     animateCursorOptionsHoverOut(inspectOptionRef.current);
    //   } else if (inspectOptionRef.current) {
    //     animateCursorOptionsHoverIn(inspectOptionRef.current);
    //   }
    // }
  }, []);

  const handleLerpInspectOptionsLocation = useCallback(
    (delta: number) => {
      if (menuActive) return;
      if (!inspectOptionRef.current) return;

      DampVector2(
        inspectOptionDampedFollowLocation,
        inspectOptionFollowLocation,
        inspectOptionDampedFollowLocationStep,
        delta,
      );

      inspectOptionRef.current.style.left = `${inspectOptionDampedFollowLocation.x}px`;
      inspectOptionRef.current.style.top = `${inspectOptionDampedFollowLocation.y}px`;
    },
    [menuActive],
  );

  const handleUpdateInspectOptionsBoundingRect = useCallback(() => {
    if (hasSetBoundsRef.current) return;
    if (!inspectOptionRef.current) return;

    hasSetBoundsRef.current = true;

    const InspectOptionsBoundingRect =
      inspectOptionRef.current.getBoundingClientRect();

    inspectOptionBoundingRectDimensions.set(
      InspectOptionsBoundingRect.width,
      InspectOptionsBoundingRect.height,
    );
  }, []);

  const handleRevealHideInspectOption = useCallback(() => {
    if (inspectOptionRef.current) {
      if (menuActive) {
        animateCursorOptionsIn(inspectOptionRef.current);
      } else {
        animateCursorOptionsOut(inspectOptionRef.current);
      }
    }
  }, [menuActive]);

  const handlePointerOverEvent = useCallback((event: MouseEvent) => {
    if (inspectOptionRef.current) {
      animateCursorOptionsHoverIn(inspectOptionRef.current);
    }
  }, []);

  const handlePointerOutEvent = useCallback((event: MouseEvent) => {
    if (inspectOptionRef.current) {
      animateCursorOptionsHoverOut(inspectOptionRef.current);
    }
  }, []);

  // Listeners
  useLayoutEffect(handleUpdateInspectOptionsBoundingRect, [
    handleUpdateInspectOptionsBoundingRect,
  ]);

  useEffect(handleRevealHideInspectOption, [
    menuActive,
    handleRevealHideInspectOption,
  ]);

  // Hooks
  useMouseMove(handleSetInspectOptionsLocation);

  useAnimationFrame((time, delta) => {
    handleLerpInspectOptionsLocation(delta);
  });

  return (
    <InspectOptionStyleContainer
      ref={inspectOptionRef}
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
      <h3 className="label">Inspect</h3>
    </InspectOptionStyleContainer>
  );
};

export default memo(InspectOption);
