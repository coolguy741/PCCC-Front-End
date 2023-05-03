import { FC, memo } from "react";
import { useHotSpotRoute } from "../../../0-R3F/4-Hooks/0-PlayerCameraRouteHooks/useHotSpotRoute";
import {
  GARDENHOSE_FOV,
  GARDENVIEW_FOV,
  KITCHENVIEW_FOV,
  PLANTBOX_FOV,
  SOILCORNER_FOV,
  TOOLRACK_FOV,
} from "../../../0-R3F/5-Constants/0-Garden/GARDEN_FOV";
import {
  GARDENHOSE_LOOKAT_POSITION,
  GARDENVIEW_LOOKAT_POSITION,
  KITCHENVIEW_LOOKAT_POSITION,
  PLANTBOX_LOOKAT_POSITION,
  SOILCORNER_LOOKAT_POSITION,
  TOOLRACK_LOOKAT_POSITION,
} from "../../../0-R3F/5-Constants/0-Garden/GARDEN_LOOKAT_POSITION";
import {
  BIGTREE_GARDENHOSE_ROUTE,
  BIGTREE_SOILCORNER_ROUTE,
  BIGTREE_TOOLRACK_ROUTE,
  GARDENVIEW_BIGTREE_ROUTE,
  KITCHENVIEW_BIGTREE_ROUTE,
  PLANTBOX_BIGTREE_ROUTE,
} from "../../../0-R3F/5-Constants/0-Garden/GARDEN_ROUTES";
import DebugButton from "../DebugButton";
import DebugPlayerCameraTriggersStyleContainer from "./DebugPlayerCameraTriggersStyleContainer";

const BigTreeDebugOptions: FC = () => {
  const handleBigTreeToGardenView = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: GARDENVIEW_FOV,
    hotspot: "Overview",
    newLocation: "Garden",
    route: GARDENVIEW_BIGTREE_ROUTE,
    lookAt: GARDENVIEW_LOOKAT_POSITION,
  });

  const handleBigTreeToKitchenView = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: KITCHENVIEW_FOV,
    hotspot: "Overview",
    newLocation: "Kitchen",
    route: KITCHENVIEW_BIGTREE_ROUTE,
    lookAt: KITCHENVIEW_LOOKAT_POSITION,
  });

  const handleBigTreeToPlantBox = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: PLANTBOX_FOV,
    hotspot: "PlantBox",
    newLocation: "Garden",
    route: PLANTBOX_BIGTREE_ROUTE,
    lookAt: PLANTBOX_LOOKAT_POSITION,
  });

  const handleBigTreeToToolRack = useHotSpotRoute({
    duration: 6,
    direction: true,
    fov: TOOLRACK_FOV,
    hotspot: "ToolRack",
    newLocation: "Garden",
    route: BIGTREE_TOOLRACK_ROUTE,
    lookAt: TOOLRACK_LOOKAT_POSITION,
  });

  const handleBigTreeToSoilCorner = useHotSpotRoute({
    duration: 6,
    direction: true,
    fov: SOILCORNER_FOV,
    hotspot: "SoilCorner",
    newLocation: "Garden",
    route: BIGTREE_SOILCORNER_ROUTE,
    lookAt: SOILCORNER_LOOKAT_POSITION,
  });

  const handleBigTreeToGardenHose = useHotSpotRoute({
    duration: 6,
    direction: true,
    fov: GARDENHOSE_FOV,
    hotspot: "GardenHose",
    newLocation: "Garden",
    route: BIGTREE_GARDENHOSE_ROUTE,
    lookAt: GARDENHOSE_LOOKAT_POSITION,
  });

  return (
    <DebugPlayerCameraTriggersStyleContainer>
      <DebugButton
        btnContent="GARDEN"
        btnAction={handleBigTreeToGardenView.handleRouteTransistion}
      />
      <DebugButton
        btnContent="KITCHEN"
        btnAction={handleBigTreeToKitchenView.handleRouteTransistion}
      />
      <DebugButton
        btnContent="PLANTBOX"
        btnAction={handleBigTreeToPlantBox.handleRouteTransistion}
      />
      <DebugButton
        btnContent="TOOLRACK"
        btnAction={handleBigTreeToToolRack.handleRouteTransistion}
      />
      <DebugButton
        btnContent="SOILCORNER"
        btnAction={handleBigTreeToSoilCorner.handleRouteTransistion}
      />
      <DebugButton
        btnContent="GARDENHOSE"
        btnAction={handleBigTreeToGardenHose.handleRouteTransistion}
      />
    </DebugPlayerCameraTriggersStyleContainer>
  );
};

export default memo(BigTreeDebugOptions);
