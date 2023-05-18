import { FC, memo } from "react";
import { useHotSpotRoute } from "../../../0-Game/4-Hooks/useHotSpotRoute";
import {
  BIGTREE_FOV,
  GARDENHOSE_FOV,
  GARDENVIEW_FOV,
  PLANTBOX_FOV,
  SOILCORNER_FOV,
  TOOLRACK_FOV,
} from "../../../0-Game/5-Constants/0-Garden/GARDEN_FOV";
import {
  BIGTREE_LOOKAT_POSITION,
  GARDENHOSE_LOOKAT_POSITION,
  GARDENVIEW_LOOKAT_POSITION,
  PLANTBOX_LOOKAT_POSITION,
  SOILCORNER_LOOKAT_POSITION,
  TOOLRACK_LOOKAT_POSITION,
} from "../../../0-Game/5-Constants/0-Garden/GARDEN_LOOKAT_POSITION";
import {
  GARDENVIEW_KITCHENVIEW_ROUTE,
  KITCHENVIEW_BIGTREE_ROUTE,
  KITCHENVIEW_GARDENHOSE_ROUTE,
  KITCHENVIEW_PLANTBOX_ROUTE,
  KITCHENVIEW_SOILCORNER_ROUTE,
  KITCHENVIEW_TOOLRACK_ROUTE,
} from "../../../0-Game/5-Constants/0-Garden/GARDEN_ROUTES";
import DebugButton from "../0-DebugButton/DebugButton";
import DebugPlayerCameraTriggersStyleContainer from "./DebugPlayerCameraTriggersStyleContainer";

const KitchenViewDebugOptions: FC = () => {
  const handleKitchenViewToGardenView = useHotSpotRoute({
    duration: 6,
    direction: false,
    fov: GARDENVIEW_FOV,
    hotspot: "Overview",
    newLocation: "Garden",
    route: GARDENVIEW_KITCHENVIEW_ROUTE,
    lookAt: GARDENVIEW_LOOKAT_POSITION,
  });

  const handleKitchenViewToPlantBox = useHotSpotRoute({
    duration: 6,
    direction: true,
    fov: PLANTBOX_FOV,
    hotspot: "PlantBox",
    newLocation: "Garden",
    route: KITCHENVIEW_PLANTBOX_ROUTE,
    lookAt: PLANTBOX_LOOKAT_POSITION,
  });

  const handleKitchenViewToBigTree = useHotSpotRoute({
    duration: 6,
    direction: true,
    fov: BIGTREE_FOV,
    hotspot: "BigTree",
    newLocation: "Garden",
    route: KITCHENVIEW_BIGTREE_ROUTE,
    lookAt: BIGTREE_LOOKAT_POSITION,
  });

  const handleKitchenViewToToolRack = useHotSpotRoute({
    duration: 6,
    direction: true,
    fov: TOOLRACK_FOV,
    hotspot: "ToolRack",
    newLocation: "Garden",
    route: KITCHENVIEW_TOOLRACK_ROUTE,
    lookAt: TOOLRACK_LOOKAT_POSITION,
  });

  const handleKitchenViewToSoilCorner = useHotSpotRoute({
    duration: 6,
    direction: true,
    fov: SOILCORNER_FOV,
    hotspot: "SoilCorner",
    newLocation: "Garden",
    route: KITCHENVIEW_SOILCORNER_ROUTE,
    lookAt: SOILCORNER_LOOKAT_POSITION,
  });

  const handleKitchenViewToGardenHose = useHotSpotRoute({
    duration: 6,
    direction: true,
    fov: GARDENHOSE_FOV,
    hotspot: "GardenHose",
    newLocation: "Garden",
    route: KITCHENVIEW_GARDENHOSE_ROUTE,
    lookAt: GARDENHOSE_LOOKAT_POSITION,
  });

  return (
    <DebugPlayerCameraTriggersStyleContainer>
      <DebugButton
        btnContent="GARDEN"
        btnAction={handleKitchenViewToGardenView.handleRouteTransistion}
      />
      <DebugButton
        btnContent="PLANTBOX"
        btnAction={handleKitchenViewToPlantBox.handleRouteTransistion}
      />
      <DebugButton
        btnContent="BIGTREE"
        btnAction={handleKitchenViewToBigTree.handleRouteTransistion}
      />
      <DebugButton
        btnContent="TOOLRACK"
        btnAction={handleKitchenViewToToolRack.handleRouteTransistion}
      />
      <DebugButton
        btnContent="SOILCORNER"
        btnAction={handleKitchenViewToSoilCorner.handleRouteTransistion}
      />
      <DebugButton
        btnContent="GARDENHOSE"
        btnAction={handleKitchenViewToGardenHose.handleRouteTransistion}
      />
    </DebugPlayerCameraTriggersStyleContainer>
  );
};

export default memo(KitchenViewDebugOptions);
