import { FC, memo } from "react";
import InspectExitColliderStyleContainer from "./InspectExitColliderStyleContainer";
import { useInspectExitColliderLogic } from "./useInspectExitColliderLogic";

const InspectExitCollider: FC = () => {
  // Component Logic
  const { inspectExitColliderRef, handleExitInspect } =
    useInspectExitColliderLogic();

  return (
    <InspectExitColliderStyleContainer
      ref={inspectExitColliderRef}
      onClick={handleExitInspect}
    />
  );
};

export default memo(InspectExitCollider);
