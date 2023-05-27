import { FC, memo } from "react";
import ToolRackPOC from "../3-ToolRackPOC/ToolRackPOC";
import { useInspectItemLogic } from "./useInspectItemLogic";

const InspectItem: FC = () => {
  // Hooks
  const { inspectItemMeshRef, handleIsActivatedDown, handleIsActivatedUp } =
    useInspectItemLogic();

  return (
    <group
      ref={inspectItemMeshRef}
      scale={30}
      onPointerDown={handleIsActivatedDown}
      onPointerUp={handleIsActivatedUp}
    >
      <ToolRackPOC />
    </group>
  );
};

export default memo(InspectItem);
