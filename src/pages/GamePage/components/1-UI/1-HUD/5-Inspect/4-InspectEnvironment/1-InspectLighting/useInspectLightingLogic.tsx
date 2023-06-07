import { useRef } from "react";
import { RefDirectionalLightType } from "../../../../../../shared/Types/RefTypes";

// Types
interface UseInspectLightingLogicReturnTypes {
  inspectLightRef: RefDirectionalLightType;
}

const useInspectLightingLogic = (): UseInspectLightingLogicReturnTypes => {
  // Refs
  const inspectLightRef: RefDirectionalLightType = useRef(null);

  return { inspectLightRef };
};

export { useInspectLightingLogic };
