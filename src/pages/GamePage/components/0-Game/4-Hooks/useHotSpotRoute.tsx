import { useCallback, useRef } from "react";
import { CubicBezierCurve3, Vector3 } from "three";
import { shallow } from "zustand/shallow";
import {
  gardenHotspotKeyType,
  kitchenHotspotKeyType,
  locationKeyType,
} from "../../../globalState/modules/LocationModule/LocationModuleTypes";
import { useGlobalState } from "../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../shared/Types/DefineTypes";
import { RefNumberType } from "../../../shared/Types/RefTypes";
import {
  leftRightLimit,
  playerCameraActiveFov,
  playerCameraActiveLookAt,
  playerCameraActivePosition,
  playerCameraFullMouseRotationMultiplier,
  playerCameraInitMouseRotationMultiplier,
  playerCameraMouseRotationMultiplierFactor,
} from "../2-Entities/0-Cameras/0-PlayerCamera/PlayerCameraDefines";
import {
  animateMouseMultiplierFactor,
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
    setActiveGardenHotSpot,
    setActiveKitchenHotSpot,
  } = useGlobalState(
    (state) => ({
      activeLocation: state.activeLocation,
      setActiveLocation: state.setActiveLocation,
      setActiveGardenHotSpot: state.setActiveGardenHotSpot,
      setActiveKitchenHotSpot: state.setActiveKitchenHotSpot,
    }),
    shallow,
  );

  // Handlers
  const handleRoutePosition: ConstantVoidFunctionType =
    useCallback((): void => {
      animateMouseMultiplierFactor(
        playerCameraMouseRotationMultiplierFactor,
        playerCameraInitMouseRotationMultiplier,
        0.5,
      );
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
        () => {
          animateMouseMultiplierFactor(
            playerCameraMouseRotationMultiplierFactor,
            playerCameraFullMouseRotationMultiplier,
            1.5,
          );
        },
      );
    }, [route, duration, direction]);

  const handleRouteFov: ConstantVoidFunctionType = useCallback((): void => {
    animateRouteFov(playerCameraActiveFov, fov, duration);
  }, [fov, duration]);

  const handleRouteLookAt: ConstantVoidFunctionType = useCallback((): void => {
    animateRouteLookAt(playerCameraActiveLookAt, lookAt, duration);
  }, [lookAt, duration]);

  const handleCursorMovementLimits: ConstantVoidFunctionType =
    useCallback((): void => {
      if (newLocation === "Garden") {
        if (hotspot === "ToolRack") {
          leftRightLimit.set(1.0, 6.0);
        } else if (hotspot === "PlantBox") {
          leftRightLimit.set(1.0, 2.0);
        } else if (hotspot === "SoilCorner") {
          leftRightLimit.set(6.0, 1.0);
        } else if (hotspot === "GardenHose") {
          leftRightLimit.set(3.0, 3.0);
        } else if (hotspot === "BigTree") {
          leftRightLimit.set(3.0, 5.0);
        } else if (hotspot === "Overview") {
          leftRightLimit.set(0.5, 0.5);
        }
      } else if (newLocation === "Kitchen") {
        if (hotspot === "Overview") {
          leftRightLimit.set(2.0, 2.0);
        }
      }
    }, [newLocation, hotspot]);

  const handleRouteTransistion: ConstantVoidFunctionType =
    useCallback((): void => {
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
      handleCursorMovementLimits();
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
      handleCursorMovementLimits,
    ]);

  return {
    handleRouteTransistion,
  };
};

export { useHotSpotRoute };
