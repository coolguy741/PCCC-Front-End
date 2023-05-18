import { FC, memo } from "react";
import { useHotSpotRoute } from "../../../0-Game/4-Hooks/useHotSpotRoute";
import {
  BIGTREE_FOV,
  GARDENVIEW_FOV,
  KITCHENVIEW_FOV,
  PLANTBOX_FOV,
  SOILCORNER_FOV,
} from "../../../0-Game/5-Constants/0-Garden/GARDEN_FOV";
import {
  BIGTREE_LOOKAT_POSITION,
  GARDENHOSE_LOOKAT_POSITION,
  GARDENVIEW_LOOKAT_POSITION,
  KITCHENVIEW_LOOKAT_POSITION,
  PLANTBOX_LOOKAT_POSITION,
  TOOLRACK_LOOKAT_POSITION,
} from "../../../0-Game/5-Constants/0-Garden/GARDEN_LOOKAT_POSITION";
import {
  BIGTREE_SOILCORNER_ROUTE,
  GARDENVIEW_SOILCORNER_ROUTE,
  KITCHENVIEW_SOILCORNER_ROUTE,
  PLANTBOX_SOILCORNER_ROUTE,
  SOILCORNER_GARDENHOSE_ROUTE,
  TOOLRACK_SOILCORNER_ROUTE,
} from "../../../0-Game/5-Constants/0-Garden/GARDEN_ROUTES";
import DebugButton from "../0-DebugButton/DebugButton";
import DebugPlayerCameraTriggersStyleContainer from "./DebugPlayerCameraTriggersStyleContainer";

const SoilCornerDebugOptions: FC = () => {
  const handleSoilCornerToGardenView = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: GARDENVIEW_FOV,
    hotspot: "Overview",
    newLocation: "Garden",
    route: GARDENVIEW_SOILCORNER_ROUTE,
    lookAt: GARDENVIEW_LOOKAT_POSITION,
  });

  const handleSoilCornerToKitchenView = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: KITCHENVIEW_FOV,
    hotspot: "Overview",
    newLocation: "Kitchen",
    route: KITCHENVIEW_SOILCORNER_ROUTE,
    lookAt: KITCHENVIEW_LOOKAT_POSITION,
  });

  const handleSoilCornerToPlantBox = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: PLANTBOX_FOV,
    hotspot: "PlantBox",
    newLocation: "Garden",
    route: PLANTBOX_SOILCORNER_ROUTE,
    lookAt: PLANTBOX_LOOKAT_POSITION,
  });

  const handleSoilCornerToBigTree = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: BIGTREE_FOV,
    hotspot: "BigTree",
    newLocation: "Garden",
    route: BIGTREE_SOILCORNER_ROUTE,
    lookAt: BIGTREE_LOOKAT_POSITION,
  });

  const handleSoilCornerToToolRack = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: SOILCORNER_FOV,
    hotspot: "ToolRack",
    newLocation: "Garden",
    route: TOOLRACK_SOILCORNER_ROUTE,
    lookAt: TOOLRACK_LOOKAT_POSITION,
  });

  const handleSoilCornerToGardenHose = useHotSpotRoute({
    duration: 6,
    direction: true,
    fov: SOILCORNER_FOV,
    hotspot: "GardenHose",
    newLocation: "Garden",
    route: SOILCORNER_GARDENHOSE_ROUTE,
    lookAt: GARDENHOSE_LOOKAT_POSITION,
  });
  return (
    <DebugPlayerCameraTriggersStyleContainer>
      <DebugButton
        btnContent="GARDEN"
        btnAction={handleSoilCornerToGardenView.handleRouteTransistion}
      />
      <DebugButton
        btnContent="KITCHEN"
        btnAction={handleSoilCornerToKitchenView.handleRouteTransistion}
      />
      <DebugButton
        btnContent="PLANTBOX"
        btnAction={handleSoilCornerToPlantBox.handleRouteTransistion}
      />
      <DebugButton
        btnContent="BIGTREE"
        btnAction={handleSoilCornerToBigTree.handleRouteTransistion}
      />
      <DebugButton
        btnContent="TOOLRACK"
        btnAction={handleSoilCornerToToolRack.handleRouteTransistion}
      />
      <DebugButton
        btnContent="GARDENHOSE"
        btnAction={handleSoilCornerToGardenHose.handleRouteTransistion}
      />
    </DebugPlayerCameraTriggersStyleContainer>
  );
};

export default memo(SoilCornerDebugOptions);
