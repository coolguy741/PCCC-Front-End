import { gsap } from "gsap";
import { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import { POWER_1_INOUT } from "../../../../shared/Eases/Eases";
import { ConstantVoidFunctionType } from "../../../../shared/Types/DefineTypes";
import { RefDivType } from "../../../../shared/Types/RefTypes";
import { useHotSpotRoute } from "../../../0-Game/4-Hooks/useHotSpotRoute";
import { GARDENVIEW_FOV } from "../../../0-Game/5-Constants/0-Garden/GARDEN_FOV";
import { GARDENVIEW_LOOKAT_POSITION } from "../../../0-Game/5-Constants/0-Garden/GARDEN_LOOKAT_POSITION";
import {
  GARDENVIEW_BIGTREE_ROUTE,
  GARDENVIEW_GARDENHOSE_ROUTE,
  GARDENVIEW_KITCHENVIEW_ROUTE,
  GARDENVIEW_PLANTBOX_ROUTE,
  GARDENVIEW_SOILCORNER_ROUTE,
  GARDENVIEW_TOOLRACK_ROUTE,
} from "../../../0-Game/5-Constants/0-Garden/GARDEN_ROUTES";
import StaticSVGLoader from "../../5-Reusable/0-StaticSVGLoader.tsx/StaticSVGLoader";
import { EyeSVG } from "../../8-Assets/EyeSVG";
import EyeStyleContainer from "./EyeStyleContainer";

const Eye: FC = () => {
  // Refs
  const eyeRef: RefDivType = useRef(null);

  // Local State
  const [eyeDisabled, setEyeDisabled] = useState(false);

  // Global State
  const {
    menuActive,
    activeLocation,
    activeGardenHotSpot,
    activeKitchenHotSpot,
  } = useGlobalState(
    (state) => ({
      menuActive: state.menuActive,
      activeLocation: state.activeLocation,
      activeGardenHotSpot: state.activeGardenHotSpot,
      activeKitchenHotSpot: state.activeKitchenHotSpot,
    }),
    shallow,
  );

  const handleToolRackToGardenView = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: GARDENVIEW_FOV,
    hotspot: "Overview",
    newLocation: "Garden",
    route: GARDENVIEW_TOOLRACK_ROUTE,
    lookAt: GARDENVIEW_LOOKAT_POSITION,
  });

  const handleGardenHoseToGardenView = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: GARDENVIEW_FOV,
    hotspot: "Overview",
    newLocation: "Garden",
    route: GARDENVIEW_GARDENHOSE_ROUTE,
    lookAt: GARDENVIEW_LOOKAT_POSITION,
  });

  const handleSoilCornerToGardenView = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: GARDENVIEW_FOV,
    hotspot: "Overview",
    newLocation: "Garden",
    route: GARDENVIEW_SOILCORNER_ROUTE,
    lookAt: GARDENVIEW_LOOKAT_POSITION,
  });

  const handlePlantBoxToGardenView = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: GARDENVIEW_FOV,
    hotspot: "Overview",
    newLocation: "Garden",
    route: GARDENVIEW_PLANTBOX_ROUTE,
    lookAt: GARDENVIEW_LOOKAT_POSITION,
  });

  const handleBigTreeToGardenView = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: GARDENVIEW_FOV,
    hotspot: "Overview",
    newLocation: "Garden",
    route: GARDENVIEW_BIGTREE_ROUTE,
    lookAt: GARDENVIEW_LOOKAT_POSITION,
  });

  const handleKitchenViewToGardenView = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: GARDENVIEW_FOV,
    hotspot: "Overview",
    newLocation: "Garden",
    route: GARDENVIEW_KITCHENVIEW_ROUTE,
    lookAt: GARDENVIEW_LOOKAT_POSITION,
  });

  const hideEye: ConstantVoidFunctionType = useCallback((): void => {
    if (!eyeRef.current) return;
    setEyeDisabled(true);
    gsap.to(eyeRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: POWER_1_INOUT,
      overwrite: true,
    });
  }, [setEyeDisabled]);

  const showEye: ConstantVoidFunctionType = useCallback((): void => {
    if (!eyeRef.current) return;
    gsap.to(eyeRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: POWER_1_INOUT,
      delay: 6,
      overwrite: true,
      onComplete: () => {
        setEyeDisabled(false);
      },
    });
  }, [setEyeDisabled]);

  const handleGardenHotSpotTriggers: ConstantVoidFunctionType =
    useCallback((): void => {
      switch (activeGardenHotSpot) {
        case "ToolRack":
          handleToolRackToGardenView.handleRouteTransistion();
          break;
        case "GardenHose":
          handleGardenHoseToGardenView.handleRouteTransistion();
          break;
        case "SoilCorner":
          handleSoilCornerToGardenView.handleRouteTransistion();
          break;
        case "PlantBox":
          handlePlantBoxToGardenView.handleRouteTransistion();
          break;
        case "BigTree":
          handleBigTreeToGardenView.handleRouteTransistion();
          break;
        default:
          break;
      }
      hideEye();
    }, [
      hideEye,
      activeGardenHotSpot,
      handleBigTreeToGardenView,
      handlePlantBoxToGardenView,
      handleToolRackToGardenView,
      handleGardenHoseToGardenView,
      handleSoilCornerToGardenView,
    ]);

  const handleKitchenHotSpotTriggers: ConstantVoidFunctionType =
    useCallback((): void => {
      switch (activeKitchenHotSpot) {
        case "Overview":
          handleKitchenViewToGardenView.handleRouteTransistion();
          break;
        case "Sink":
          console.log("Sink");
          break;
        case "Oven":
          console.log("Oven");
          break;
        case "Pantry":
          console.log("Pantry");
          break;
        case "Workspace":
          console.log("Workspace");
          break;
        default:
          break;
      }
      hideEye();
    }, [hideEye, activeKitchenHotSpot, handleKitchenViewToGardenView]);

  const handleGoBackToOverview: ConstantVoidFunctionType =
    useCallback((): void => {
      if (menuActive) return;

      if (activeLocation === "Garden") {
        handleGardenHotSpotTriggers();
      } else if (activeLocation === "Kitchen") {
        handleKitchenHotSpotTriggers();
      }
    }, [
      menuActive,
      activeLocation,
      handleGardenHotSpotTriggers,
      handleKitchenHotSpotTriggers,
    ]);

  useEffect(() => {
    if (
      activeLocation === "Kitchen" ||
      (activeLocation === "Garden" && activeGardenHotSpot !== "Overview")
    ) {
      showEye();
    }
  }, [showEye, activeGardenHotSpot, activeLocation]);

  return (
    <EyeStyleContainer ref={eyeRef}>
      <button
        className="eye-button"
        disabled={eyeDisabled || activeLocation === "Gate"}
        onClick={handleGoBackToOverview}
      >
        <StaticSVGLoader id="overview-eye" svgPath={EyeSVG} />
      </button>
    </EyeStyleContainer>
  );
};

export default memo(Eye);
