import { FC, memo } from "react";
import { useHotSpotRoute } from "../../../0-R3F/4-Hooks/useHotSpotRoute";
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
  GARDENVIEW_LOOKAT_POSITION,
  KITCHENVIEW_LOOKAT_POSITION,
  PLANTBOX_LOOKAT_POSITION,
  SOILCORNER_LOOKAT_POSITION,
  TOOLRACK_LOOKAT_POSITION,
} from "../../../0-R3F/5-Constants/0-Garden/GARDEN_LOOKAT_POSITION";
import {
  BIGTREE_GARDENHOSE_ROUTE,
  GARDENVIEW_GARDENHOSE_ROUTE,
  KITCHENVIEW_GARDENHOSE_ROUTE,
  PLANTBOX_GARDENHOSE_ROUTE,
  SOILCORNER_GARDENHOSE_ROUTE,
  TOOLRACK_GARDENHOSE_ROUTE,
} from "../../../0-R3F/5-Constants/0-Garden/GARDEN_ROUTES";
import DebugButton from "../DebugButton";
import DebugPlayerCameraTriggersStyleContainer from "./DebugPlayerCameraTriggersStyleContainer";

const GardenHoseDebugOptions: FC = () => {
  const handleGardenHoseToGardenView = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: GARDENVIEW_FOV,
    hotspot: "Overview",
    newLocation: "Garden",
    route: GARDENVIEW_GARDENHOSE_ROUTE,
    lookAt: GARDENVIEW_LOOKAT_POSITION,
  });

  const handleGardenHoseToKitchenView = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: KITCHENVIEW_FOV,
    hotspot: "Overview",
    newLocation: "Kitchen",
    route: KITCHENVIEW_GARDENHOSE_ROUTE,
    lookAt: KITCHENVIEW_LOOKAT_POSITION,
  });

  const handleGardenHoseToPlantBox = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: PLANTBOX_FOV,
    hotspot: "PlantBox",
    newLocation: "Garden",
    route: PLANTBOX_GARDENHOSE_ROUTE,
    lookAt: PLANTBOX_LOOKAT_POSITION,
  });

  const handleGardenHoseToBigTree = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: BIGTREE_FOV,
    hotspot: "BigTree",
    newLocation: "Garden",
    route: BIGTREE_GARDENHOSE_ROUTE,
    lookAt: BIGTREE_LOOKAT_POSITION,
  });

  const handleGardenHoseToSoilCorner = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: SOILCORNER_FOV,
    hotspot: "SoilCorner",
    newLocation: "Garden",
    route: SOILCORNER_GARDENHOSE_ROUTE,
    lookAt: SOILCORNER_LOOKAT_POSITION,
  });

  const handleGardenHoseToToolRack = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: GARDENHOSE_FOV,
    hotspot: "ToolRack",
    newLocation: "Garden",
    route: TOOLRACK_GARDENHOSE_ROUTE,
    lookAt: TOOLRACK_LOOKAT_POSITION,
  });
  return (
    <DebugPlayerCameraTriggersStyleContainer>
      <DebugButton
        btnContent="GARDEN"
        btnAction={handleGardenHoseToGardenView.handleRouteTransistion}
      />
      <DebugButton
        btnContent="KITCHEN"
        btnAction={handleGardenHoseToKitchenView.handleRouteTransistion}
      />
      <DebugButton
        btnContent="PLANTBOX"
        btnAction={handleGardenHoseToPlantBox.handleRouteTransistion}
      />
      <DebugButton
        btnContent="BIGTREE"
        btnAction={handleGardenHoseToBigTree.handleRouteTransistion}
      />
      <DebugButton
        btnContent="TOOLRACK"
        btnAction={handleGardenHoseToToolRack.handleRouteTransistion}
      />
      <DebugButton
        btnContent="SOILCORNER"
        btnAction={handleGardenHoseToSoilCorner.handleRouteTransistion}
      />
    </DebugPlayerCameraTriggersStyleContainer>
  );
};

export default memo(GardenHoseDebugOptions);
