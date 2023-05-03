import { FC, memo } from "react";
import { useHotSpotRoute } from "../../../0-R3F/4-Hooks/0-PlayerCameraRouteHooks/useHotSpotRoute";
import {
  BIGTREE_FOV,
  GARDENHOSE_FOV,
  GARDENVIEW_FOV,
  KITCHENVIEW_FOV,
  PLANTBOX_FOV,
  SOILCORNER_FOV,
} from "../../../0-R3F/5-Constants/0-Garden/GARDEN_FOV";
import {
  BIGTREE_LOOKAT_POSITION,
  GARDENHOSE_LOOKAT_POSITION,
  GARDENVIEW_LOOKAT_POSITION,
  KITCHENVIEW_LOOKAT_POSITION,
  PLANTBOX_LOOKAT_POSITION,
  SOILCORNER_LOOKAT_POSITION,
} from "../../../0-R3F/5-Constants/0-Garden/GARDEN_LOOKAT_POSITION";
import {
  BIGTREE_TOOLRACK_ROUTE,
  GARDENVIEW_TOOLRACK_ROUTE,
  KITCHENVIEW_TOOLRACK_ROUTE,
  PLANTBOX_TOOLRACK_ROUTE,
  TOOLRACK_GARDENHOSE_ROUTE,
  TOOLRACK_SOILCORNER_ROUTE,
} from "../../../0-R3F/5-Constants/0-Garden/GARDEN_ROUTES";
import DebugButton from "../DebugButton";
import DebugPlayerCameraTriggersStyleContainer from "./DebugPlayerCameraTriggersStyleContainer";

const ToolRackDebugOptions: FC = () => {
  const handleToolRackToGardenView = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: GARDENVIEW_FOV,
    hotspot: "Overview",
    newLocation: "Garden",
    route: GARDENVIEW_TOOLRACK_ROUTE,
    lookAt: GARDENVIEW_LOOKAT_POSITION,
  });

  const handleToolRackToKitchenView = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: KITCHENVIEW_FOV,
    hotspot: "Overview",
    newLocation: "Kitchen",
    route: KITCHENVIEW_TOOLRACK_ROUTE,
    lookAt: KITCHENVIEW_LOOKAT_POSITION,
  });

  const handleToolRackToPlantBox = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: PLANTBOX_FOV,
    hotspot: "PlantBox",
    newLocation: "Garden",
    route: PLANTBOX_TOOLRACK_ROUTE,
    lookAt: PLANTBOX_LOOKAT_POSITION,
  });

  const handleToolRackToBigTree = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: BIGTREE_FOV,
    hotspot: "BigTree",
    newLocation: "Garden",
    route: BIGTREE_TOOLRACK_ROUTE,
    lookAt: BIGTREE_LOOKAT_POSITION,
  });

  const handleToolRackToSoilCorner = useHotSpotRoute({
    duration: 6,
    direction: true,
    fov: SOILCORNER_FOV,
    hotspot: "SoilCorner",
    newLocation: "Garden",
    route: TOOLRACK_SOILCORNER_ROUTE,
    lookAt: SOILCORNER_LOOKAT_POSITION,
  });

  const handleToolRackToGardenHose = useHotSpotRoute({
    duration: 6,
    direction: true,
    fov: GARDENHOSE_FOV,
    hotspot: "GardenHose",
    newLocation: "Garden",
    route: TOOLRACK_GARDENHOSE_ROUTE,
    lookAt: GARDENHOSE_LOOKAT_POSITION,
  });
  return (
    <DebugPlayerCameraTriggersStyleContainer>
      <DebugButton
        btnContent="GARDEN"
        btnAction={handleToolRackToGardenView.handleRouteTransistion}
      />
      <DebugButton
        btnContent="KITCHEN"
        btnAction={handleToolRackToKitchenView.handleRouteTransistion}
      />
      <DebugButton
        btnContent="PLANTBOX"
        btnAction={handleToolRackToPlantBox.handleRouteTransistion}
      />
      <DebugButton
        btnContent="BIGTREE"
        btnAction={handleToolRackToBigTree.handleRouteTransistion}
      />
      <DebugButton
        btnContent="SOILCORNER"
        btnAction={handleToolRackToSoilCorner.handleRouteTransistion}
      />
      <DebugButton
        btnContent="GARDENHOSE"
        btnAction={handleToolRackToGardenHose.handleRouteTransistion}
      />
    </DebugPlayerCameraTriggersStyleContainer>
  );
};

export default memo(ToolRackDebugOptions);
