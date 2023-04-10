import { memo, useCallback } from "react";
import { FileUploader } from "react-drag-drop-files";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";

const DynamicEnvironmentMapController = () => {
  // Global State
  const { setDynamicEnvironmentMap } = useGlobalState(
    (state) => ({ setDynamicEnvironmentMap: state.setDynamicEnvironmentMap }),
    shallow
  );
  const convertFileToImage = useCallback((file: any) => {
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        setDynamicEnvironmentMap(reader.result);
      },
      false
    );

    reader.readAsDataURL(file);
  }, []);

  return (
    <FileUploader
      handleChange={(file: any) => convertFileToImage(file)}
      name="file"
      types={["hdr"]}
    />
  );
};

export default memo(DynamicEnvironmentMapController);
