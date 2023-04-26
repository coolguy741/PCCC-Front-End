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

  const handleFileConversion = useCallback((file: any) => {
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        setDynamicEnvironmentMap(reader.result);
      },
      false,
    );

    reader.readAsDataURL(file);
  }, []);

  return (
    <FileUploader
      name="file"
      types={["hdr"]}
      handleChange={handleFileConversion}
    />
  );
};

export default memo(DynamicEnvironmentMapController);
