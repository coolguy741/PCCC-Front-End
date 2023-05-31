import { Vector2 } from "three";
import { GATE_FOV } from "../../../components/0-Game/5-Constants/0-Garden/GARDEN_FOV";
import { GATE_LOOKAT_POSITION } from "../../../components/0-Game/5-Constants/0-Garden/GARDEN_LOOKAT_POSITION";
import { GATE_POSITION } from "../../../components/0-Game/5-Constants/0-Garden/GARDEN_POSITION";
import { globalStateApiType } from "../../GlobalStateTypes";

const CameraModule = ({ set, get }: globalStateApiType) => {
  return {
    activeCamera: "PlayerCamera",
    setActiveCamera: (newCamera: string) => {
      set({ activeCamera: newCamera });
    },

    // TODO: Kanui - Change this to the first locationKey
    playerCameraActiveFov: new Vector2(GATE_FOV, 0),
    playerCameraActivePosition: GATE_POSITION.clone(),
    playerCameraActiveLookAt: GATE_LOOKAT_POSITION.clone(),
    // playerCameraActiveFov: new Vector2(TOOLRACK_FOV, 0),
    // playerCameraActivePosition: TOOLRACK_POSITION.clone(),
    // playerCameraActiveLookAt: TOOLRACK_LOOKAT_POSITION.clone(),
  };
};

export { CameraModule };
