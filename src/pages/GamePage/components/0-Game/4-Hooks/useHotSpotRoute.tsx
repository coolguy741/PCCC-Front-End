import { useCallback, useRef } from "react";
import { CubicBezierCurve3, Vector3 } from "three";
import { shallow } from "zustand/shallow";
import {
  gardenHotspotKeyType,
  kitchenHotspotKeyType,
  locationKeyType,
} from "../../../globalState/modules/LocationModule/LocationModuleTypes";
import { useGlobalState } from "../../../globalState/useGlobalState";
import { RefNumberType } from "../../../shared/Types/RefTypes";
import {
  animateRouteFov,
  animateRouteLookAt,
  animateRouteProgress,
} from "../5-Constants/2-Animation/RouteAnimations";

interface HotSpotRoutePropTypes {
  fov: number;
  lookAt: Vector3;
  duration: number;
  direction: boolean;
  route: CubicBezierCurve3;
  newLocation: locationKeyType;
  hotspot: gardenHotspotKeyType | kitchenHotspotKeyType;
}

const useHotSpotRoute = ({
  fov,
  route,
  lookAt,
  hotspot,
  duration,
  direction,
  newLocation,
}: HotSpotRoutePropTypes) => {
  // Refs
  const routeProgressRef: RefNumberType = useRef(0);

  const {
    activeLocation,
    setActiveLocation,
    playerCameraActiveFov,
    setActiveGardenHotSpot,
    setActiveKitchenHotSpot,
    playerCameraActiveLookAt,
    playerCameraActivePosition,
  } = useGlobalState(
    (state) => ({
      activeLocation: state.activeLocation,
      setActiveLocation: state.setActiveLocation,
      playerCameraActiveFov: state.playerCameraActiveFov,
      setActiveGardenHotSpot: state.setActiveGardenHotSpot,
      setActiveKitchenHotSpot: state.setActiveKitchenHotSpot,
      playerCameraActiveLookAt: state.playerCameraActiveLookAt,
      playerCameraActivePosition: state.playerCameraActivePosition,
    }),
    shallow,
  );

  // Handlers
  const handleRoutePosition = useCallback(() => {
    console.log("hey");
    animateRouteProgress(
      routeProgressRef,
      direction ? 0 : 1,
      direction ? 1 : 0,
      duration,
      () => {
        playerCameraActivePosition.copy(
          route.getPointAt(routeProgressRef.current),
        );
      },
    );
  }, [route, duration, direction, playerCameraActivePosition]);

  const handleRouteFov = useCallback(() => {
    animateRouteFov(playerCameraActiveFov, fov, duration);
  }, [fov, duration, playerCameraActiveFov]);

  const handleRouteLookAt = useCallback(() => {
    animateRouteLookAt(playerCameraActiveLookAt, lookAt, duration);
  }, [lookAt, duration, playerCameraActiveLookAt]);

  const handleRouteTransistion = useCallback(() => {
    if (newLocation !== activeLocation) {
      setActiveLocation(newLocation);
    }

    if (newLocation === "Garden") {
      setActiveGardenHotSpot(hotspot as gardenHotspotKeyType);
    } else if (newLocation === "Kitchen") {
      setActiveKitchenHotSpot(hotspot as kitchenHotspotKeyType);
    }

    handleRouteFov();
    handleRouteLookAt();
    handleRoutePosition();
  }, [
    hotspot,
    newLocation,
    activeLocation,
    handleRouteFov,
    handleRouteLookAt,
    setActiveLocation,
    handleRoutePosition,
    setActiveGardenHotSpot,
    setActiveKitchenHotSpot,
  ]);

  return {
    handleRouteTransistion,
  };
};

export { useHotSpotRoute };
