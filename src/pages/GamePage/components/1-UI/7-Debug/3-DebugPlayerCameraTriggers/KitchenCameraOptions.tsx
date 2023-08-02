import { FC, memo, useCallback } from "react";
import {
  playerCameraActiveLookAt,
  playerCameraActivePosition,
} from "../../../0-Game/2-Entities/0-Cameras/0-PlayerCamera/PlayerCameraDefines";
import {
  FRIDGE_LOOKAT_POSITION,
  HYDROPONICS_LOOKAT_POSITION,
  LOCKER_LOOKAT_POSITION,
  PANTRY_LOOKAT_POSITION,
  SINK_LOOKAT_POSITION,
  STOVE_LOOKAT_POSITION,
  WORKSPACE_LOOKAT_POSITION,
} from "../../../0-Game/5-Constants/1-Kitchen/KITCHEN_LOOKAT_POSITION";
import {
  FRIDGE_POSITION,
  HYDROPONICS_POSITION,
  LOCKER_POSITION,
  PANTRY_POSITION,
  SINK_POSITION,
  STOVE_POSITION,
  WORKSPACE_POSITION,
} from "../../../0-Game/5-Constants/1-Kitchen/KITCHEN_POSITION";
import DebugButton from "../1-DebugButton/DebugButton";
import DebugPlayerCameraTriggersStyleContainer from "./DebugPlayerCameraTriggersStyleContainer";

const KitchenCameraOptions: FC = () => {
  const handleGoToFridge = useCallback(() => {
    playerCameraActivePosition.copy(FRIDGE_POSITION);
    playerCameraActiveLookAt.copy(FRIDGE_LOOKAT_POSITION);
  }, []);

  const handleGoToPantry = useCallback(() => {
    playerCameraActivePosition.copy(PANTRY_POSITION);
    playerCameraActiveLookAt.copy(PANTRY_LOOKAT_POSITION);
  }, []);

  const handleGoToStove = useCallback(() => {
    playerCameraActivePosition.copy(STOVE_POSITION);
    playerCameraActiveLookAt.copy(STOVE_LOOKAT_POSITION);
  }, []);

  const handleGoToLocker = useCallback(() => {
    playerCameraActivePosition.copy(LOCKER_POSITION);
    playerCameraActiveLookAt.copy(LOCKER_LOOKAT_POSITION);
  }, []);

  const handleGoToHydroponics = useCallback(() => {
    playerCameraActivePosition.copy(HYDROPONICS_POSITION);
    playerCameraActiveLookAt.copy(HYDROPONICS_LOOKAT_POSITION);
  }, []);

  const handleGoToSink = useCallback(() => {
    playerCameraActivePosition.copy(SINK_POSITION);
    playerCameraActiveLookAt.copy(SINK_LOOKAT_POSITION);
  }, []);

  const handleGoToWorkSpace = useCallback(() => {
    playerCameraActivePosition.copy(WORKSPACE_POSITION);
    playerCameraActiveLookAt.copy(WORKSPACE_LOOKAT_POSITION);
  }, []);

  return (
    <DebugPlayerCameraTriggersStyleContainer>
      <DebugButton btnContent="FRIDGE" btnAction={handleGoToFridge} />
      <DebugButton btnContent="PANTRY" btnAction={handleGoToPantry} />
      <DebugButton btnContent="STOVE" btnAction={handleGoToStove} />
      <DebugButton btnContent="LOCKER" btnAction={handleGoToLocker} />
      <DebugButton btnContent="HYDROPONICS" btnAction={handleGoToHydroponics} />
      <DebugButton btnContent="SINK" btnAction={handleGoToSink} />
      <DebugButton btnContent="WORKSPACE" btnAction={handleGoToWorkSpace} />
    </DebugPlayerCameraTriggersStyleContainer>
  );
};

export default memo(KitchenCameraOptions);
