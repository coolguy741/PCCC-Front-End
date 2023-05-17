import { FC, memo, useCallback } from "react";
import { FileUploader } from "react-drag-drop-files";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";

const DynamicEnvironmentMapController: FC = () => {
  // Global State
  const { setDynamicEnvironmentMap } = useGlobalState(
    (state) => ({ setDynamicEnvironmentMap: state.setDynamicEnvironmentMap }),
    shallow,
  );

  const handleFileConversion = useCallback(
    (file: File) => {
      const reader = new FileReader();

      reader.addEventListener(
        "load",
        () => {
          setDynamicEnvironmentMap(reader.result as string);
        },
        false,
      );

      reader.readAsDataURL(file);
    },
    [setDynamicEnvironmentMap],
  );

  return (
    <FileUploader
      name="file"
      types={["hdr"]}
      handleChange={handleFileConversion}
    />
  );
};

export default memo(DynamicEnvironmentMapController);
