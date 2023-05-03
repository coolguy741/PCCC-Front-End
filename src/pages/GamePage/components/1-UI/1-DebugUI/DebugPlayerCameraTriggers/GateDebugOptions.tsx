import { FC, memo } from "react";
import { useHotSpotRoute } from "../../../0-R3F/4-Hooks/0-PlayerCameraRouteHooks/useHotSpotRoute";
import {
  PLANTBOX_FOV,
  TOOLRACK_FOV,
} from "../../../0-R3F/5-Constants/0-Garden/GARDEN_FOV";
import {
  PLANTBOX_LOOKAT_POSITION,
  TOOLRACK_LOOKAT_POSITION,
} from "../../../0-R3F/5-Constants/0-Garden/GARDEN_LOOKAT_POSITION";
import {
  GATE_PLANTBOX_ROUTE,
  GATE_TOOLRACK_ROUTE,
} from "../../../0-R3F/5-Constants/0-Garden/GARDEN_ROUTES";
import DebugButton from "../DebugButton";
import DebugPlayerCameraTriggersStyleContainer from "./DebugPlayerCameraTriggersStyleContainer";

const GateDebugOptions: FC = () => {
  // Hooks
  const handleGateToPlantbox = useHotSpotRoute({
    duration: 6,
    direction: true,
    fov: PLANTBOX_FOV,
    hotspot: "PlantBox",
    newLocation: "Garden",
    route: GATE_PLANTBOX_ROUTE,
    lookAt: PLANTBOX_LOOKAT_POSITION,
  });

  const handleGateToToolRack = useHotSpotRoute({
    duration: 6,
    direction: true,
    fov: TOOLRACK_FOV,
    hotspot: "ToolRack",
    newLocation: "Garden",
    route: GATE_TOOLRACK_ROUTE,
    lookAt: TOOLRACK_LOOKAT_POSITION,
  });
  return (
    <DebugPlayerCameraTriggersStyleContainer>
      <DebugButton
        btnContent="PLANTBOX"
        btnAction={handleGateToPlantbox.handleRouteTransistion}
      />
      <DebugButton
        btnContent="TOOLRACK"
        btnAction={handleGateToToolRack.handleRouteTransistion}
      />
    </DebugPlayerCameraTriggersStyleContainer>
  );
};

export default memo(GateDebugOptions);
