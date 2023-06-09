import { FC, memo, useCallback } from "react";
import { FileUploader } from "react-drag-drop-files";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";

const handleDetermineFileType = (fileName: string): boolean => {
  return fileName.includes(".glb");
};

const handleDetermineGardenGLBType = (fileName: string): boolean => {
  return fileName.includes("garden");
};

const handleDetermineKitchenGLBType = (fileName: string): boolean => {
  return fileName.includes("kitchen");
};

const DynamicFileController: FC = () => {
  // Global State
  const {
    setDynamicGLB,
    setDynamicGarden,
    setDynamicKitchen,
    setDynamicEnvironmentMap,
  } = useGlobalState(
    (state) => ({
      setDynamicGLB: state.setDynamicGLB,
      setDynamicGarden: state.setDynamicGarden,
      setDynamicKitchen: state.setDynamicKitchen,
      setDynamicEnvironmentMap: state.setDynamicEnvironmentMap,
    }),
    shallow,
  );

  const handleFileConversion = useCallback(
    (file: File) => {
      const reader = new FileReader();

      const isGLB = handleDetermineFileType(file.name);

      reader.addEventListener(
        "load",
        () => {
          if (isGLB) {
            const isGarden = handleDetermineGardenGLBType(file.name);
            const isKitchen = handleDetermineKitchenGLBType(file.name);

            if (isGarden) {
              setDynamicGarden(reader.result as string);
            } else if (isKitchen) {
              setDynamicKitchen(reader.result as string);
            } else {
              setDynamicGLB(reader.result as string);
            }
          } else {
            setDynamicEnvironmentMap(reader.result as string);
          }
        },
        false,
      );
      if (isGLB) {
        reader.readAsArrayBuffer(file);
      } else {
        reader.readAsDataURL(file);
      }
    },
    [
      setDynamicGLB,
      setDynamicGarden,
      setDynamicKitchen,
      setDynamicEnvironmentMap,
    ],
  );

  return (
    <FileUploader
      name="file"
      types={["hdr", "glb"]}
      handleChange={handleFileConversion}
    />
  );
};

export default memo(DynamicFileController);
