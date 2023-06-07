import { globalStateApiType } from "../../GlobalStateTypes";

const CameraModule = ({ set, get }: globalStateApiType) => {
  return {
    activeCamera: "PlayerCamera",
    setActiveCamera: (newCamera: string) => {
      set({ activeCamera: newCamera });
    },
  };
};

export { CameraModule };
