import { FC, memo } from "react";
import { useHotSpotRoute } from "../../../0-Game/4-Hooks/useHotSpotRoute";
import {
  BIGTREE_FOV,
  GARDENHOSE_FOV,
  GARDENVIEW_FOV,
  KITCHENVIEW_FOV,
  SOILCORNER_FOV,
  TOOLRACK_FOV,
} from "../../../0-Game/5-Constants/0-Garden/GARDEN_FOV";
import {
  BIGTREE_LOOKAT_POSITION,
  GARDENHOSE_LOOKAT_POSITION,
  GARDENVIEW_LOOKAT_POSITION,
  KITCHENVIEW_LOOKAT_POSITION,
  SOILCORNER_LOOKAT_POSITION,
  TOOLRACK_LOOKAT_POSITION,
} from "../../../0-Game/5-Constants/0-Garden/GARDEN_LOOKAT_POSITION";
import {
  GARDENVIEW_PLANTBOX_ROUTE,
  KITCHENVIEW_PLANTBOX_ROUTE,
  PLANTBOX_BIGTREE_ROUTE,
  PLANTBOX_GARDENHOSE_ROUTE,
  PLANTBOX_SOILCORNER_ROUTE,
  PLANTBOX_TOOLRACK_ROUTE,
} from "../../../0-Game/5-Constants/0-Garden/GARDEN_ROUTES";
import DebugButton from "../0-DebugButton/DebugButton";
import DebugPlayerCameraTriggersStyleContainer from "./DebugPlayerCameraTriggersStyleContainer";

const PlantBoxDebugOptions: FC = () => {
  const handlePlantBoxToGardenView = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: GARDENVIEW_FOV,
    hotspot: "Overview",
    newLocation: "Garden",
    route: GARDENVIEW_PLANTBOX_ROUTE,
    lookAt: GARDENVIEW_LOOKAT_POSITION,
  });

  const handlePlantBoxToKitchenView = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: KITCHENVIEW_FOV,
    hotspot: "Overview",
    newLocation: "Kitchen",
    route: KITCHENVIEW_PLANTBOX_ROUTE,
    lookAt: KITCHENVIEW_LOOKAT_POSITION,
  });

  const handlePlantBoxToBigTree = useHotSpotRoute({
    duration: 6,
    direction: true,
    fov: BIGTREE_FOV,
    hotspot: "BigTree",
    newLocation: "Garden",
    route: PLANTBOX_BIGTREE_ROUTE,
    lookAt: BIGTREE_LOOKAT_POSITION,
  });

  const handlePlantBoxToToolRack = useHotSpotRoute({
    duration: 6,
    direction: true,
    fov: TOOLRACK_FOV,
    hotspot: "ToolRack",
    newLocation: "Garden",
    route: PLANTBOX_TOOLRACK_ROUTE,
    lookAt: TOOLRACK_LOOKAT_POSITION,
  });

  const handlePlantBoxToSoilCorner = useHotSpotRoute({
    duration: 6,
    direction: true,
    fov: SOILCORNER_FOV,
    hotspot: "SoilCorner",
    newLocation: "Garden",
    route: PLANTBOX_SOILCORNER_ROUTE,
    lookAt: SOILCORNER_LOOKAT_POSITION,
  });

  const handlePlantBoxToGardenHose = useHotSpotRoute({
    duration: 6,
    direction: true,
    fov: GARDENHOSE_FOV,
    hotspot: "GardenHose",
    newLocation: "Garden",
    route: PLANTBOX_GARDENHOSE_ROUTE,
    lookAt: GARDENHOSE_LOOKAT_POSITION,
  });

  return (
    <DebugPlayerCameraTriggersStyleContainer>
      <DebugButton
        btnContent="GARDEN"
        btnAction={handlePlantBoxToGardenView.handleRouteTransistion}
      />
      <DebugButton
        btnContent="KITCHEN"
        btnAction={handlePlantBoxToKitchenView.handleRouteTransistion}
      />
      <DebugButton
        btnContent="BIGTREE"
        btnAction={handlePlantBoxToBigTree.handleRouteTransistion}
      />
      <DebugButton
        btnContent="TOOLRACK"
        btnAction={handlePlantBoxToToolRack.handleRouteTransistion}
      />
      <DebugButton
        btnContent="SOILCORNER"
        btnAction={handlePlantBoxToSoilCorner.handleRouteTransistion}
      />
      <DebugButton
        btnContent="GARDENHOSE"
        btnAction={handlePlantBoxToGardenHose.handleRouteTransistion}
      />
    </DebugPlayerCameraTriggersStyleContainer>
  );
};

export default memo(PlantBoxDebugOptions);
