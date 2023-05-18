import { FC, memo } from "react";
import { useHotSpotRoute } from "../../../0-Game/4-Hooks/useHotSpotRoute";
import {
  BIGTREE_FOV,
  GARDENHOSE_FOV,
  KITCHENVIEW_FOV,
  PLANTBOX_FOV,
  SOILCORNER_FOV,
  TOOLRACK_FOV,
} from "../../../0-Game/5-Constants/0-Garden/GARDEN_FOV";
import {
  BIGTREE_LOOKAT_POSITION,
  GARDENHOSE_LOOKAT_POSITION,
  KITCHENVIEW_LOOKAT_POSITION,
  PLANTBOX_LOOKAT_POSITION,
  SOILCORNER_LOOKAT_POSITION,
  TOOLRACK_LOOKAT_POSITION,
} from "../../../0-Game/5-Constants/0-Garden/GARDEN_LOOKAT_POSITION";
import {
  GARDENVIEW_BIGTREE_ROUTE,
  GARDENVIEW_GARDENHOSE_ROUTE,
  GARDENVIEW_KITCHENVIEW_ROUTE,
  GARDENVIEW_PLANTBOX_ROUTE,
  GARDENVIEW_SOILCORNER_ROUTE,
  GARDENVIEW_TOOLRACK_ROUTE,
} from "../../../0-Game/5-Constants/0-Garden/GARDEN_ROUTES";
import DebugButton from "../0-DebugButton/DebugButton";
import DebugPlayerCameraTriggersStyleContainer from "./DebugPlayerCameraTriggersStyleContainer";

const GardenViewDebugOptions: FC = () => {
  const handleGardenViewToKitchenView = useHotSpotRoute({
    duration: 7,
    direction: true,
    fov: KITCHENVIEW_FOV,
    hotspot: "Overview",
    newLocation: "Kitchen",
    route: GARDENVIEW_KITCHENVIEW_ROUTE,
    lookAt: KITCHENVIEW_LOOKAT_POSITION,
  });

  const handleGardenViewToPlantBox = useHotSpotRoute({
    duration: 7,
    direction: true,
    fov: PLANTBOX_FOV,
    hotspot: "PlantBox",
    newLocation: "Garden",
    route: GARDENVIEW_PLANTBOX_ROUTE,
    lookAt: PLANTBOX_LOOKAT_POSITION,
  });

  const handleGardenViewToBigTree = useHotSpotRoute({
    duration: 7,
    direction: true,
    fov: BIGTREE_FOV,
    hotspot: "BigTree",
    newLocation: "Garden",
    route: GARDENVIEW_BIGTREE_ROUTE,
    lookAt: BIGTREE_LOOKAT_POSITION,
  });

  const handleGardenViewToToolRack = useHotSpotRoute({
    duration: 7,
    direction: true,
    fov: TOOLRACK_FOV,
    hotspot: "ToolRack",
    newLocation: "Garden",
    route: GARDENVIEW_TOOLRACK_ROUTE,
    lookAt: TOOLRACK_LOOKAT_POSITION,
  });

  const handleGardenViewToSoilCorner = useHotSpotRoute({
    duration: 7,
    direction: true,
    fov: SOILCORNER_FOV,
    hotspot: "SoilCorner",
    newLocation: "Garden",
    route: GARDENVIEW_SOILCORNER_ROUTE,
    lookAt: SOILCORNER_LOOKAT_POSITION,
  });

  const handleGardenViewToGardenHose = useHotSpotRoute({
    duration: 7,
    direction: true,
    fov: GARDENHOSE_FOV,
    hotspot: "GardenHose",
    newLocation: "Garden",
    route: GARDENVIEW_GARDENHOSE_ROUTE,
    lookAt: GARDENHOSE_LOOKAT_POSITION,
  });

  return (
    <DebugPlayerCameraTriggersStyleContainer>
      <DebugButton
        btnContent="KITCHEN"
        btnAction={handleGardenViewToKitchenView.handleRouteTransistion}
      />
      <DebugButton
        btnContent="PLANTBOX"
        btnAction={handleGardenViewToPlantBox.handleRouteTransistion}
      />
      <DebugButton
        btnContent="BIGTREE"
        btnAction={handleGardenViewToBigTree.handleRouteTransistion}
      />
      <DebugButton
        btnContent="TOOLRACK"
        btnAction={handleGardenViewToToolRack.handleRouteTransistion}
      />
      <DebugButton
        btnContent="SOILCORNER"
        btnAction={handleGardenViewToSoilCorner.handleRouteTransistion}
      />
      <DebugButton
        btnContent="GARDENHOSE"
        btnAction={handleGardenViewToGardenHose.handleRouteTransistion}
      />
    </DebugPlayerCameraTriggersStyleContainer>
  );
};

export default memo(GardenViewDebugOptions);
