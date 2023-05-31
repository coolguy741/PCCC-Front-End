import { FC, memo } from "react";
import ToolRackPOC from "../3-ToolRackPOC/ToolRackPOC";
import { useInspectItemLogic } from "./useInspectItemLogic";

const InspectItem: FC = () => {
  // Hooks
  const { inspectItemMeshRef } = useInspectItemLogic();

  return (
    <group ref={inspectItemMeshRef} scale={30}>
      <ToolRackPOC />
    </group>
  );
};

export default memo(InspectItem);
