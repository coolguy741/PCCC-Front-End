import { FC, Fragment, memo, useMemo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import BigTreeDebugOptions from "./BigTreeDebugOptions";
import GardenHoseDebugOptions from "./GardenHoseDebugOptions";
import GardenViewDebugOptions from "./GardenViewDebugOptions";
import GateDebugOptions from "./GateDebugOptions";
import KitchenViewDebugOptions from "./KitchenViewDebugOptions";
import PlantBoxDebugOptions from "./PlantBoxDebugOptions";
import SoilCornerDebugOptions from "./SoilCornerDebugOptions";
import ToolRackDebugOptions from "./ToolRackDebugOptions";

const DebugPlayerCameraTriggers: FC = () => {
  // Global State
  const { activeGardenHotSpot, activeLocation, activeCamera } = useGlobalState(
    (state) => ({
      activeCamera: state.activeCamera,
      activeLocation: state.activeLocation,
      activeGardenHotSpot: state.activeGardenHotSpot,
    }),
    shallow,
  );

  const {
    gateRouteOptions,
    bigTreeRouteOptions,
    kitchenRouteOptions,
    toolRackRouteOptions,
    plantBoxRouteOptions,
    gardenViewRouteOptions,
    soilCornerRouteOptions,
    gardenHoseRouteOptions,
  } = useMemo(() => {
    const gateRouteOptions = activeLocation === "Gate";
    const gardenRouteOptions = activeLocation === "Garden";
    const kitchenRouteOptions = activeLocation === "Kitchen";
    const toolRackRouteOptions =
      gardenRouteOptions && activeGardenHotSpot === "ToolRack";
    const gardenHoseRouteOptions =
      gardenRouteOptions && activeGardenHotSpot === "GardenHose";
    const soilCornerRouteOptions =
      gardenRouteOptions && activeGardenHotSpot === "SoilCorner";
    const bigTreeRouteOptions =
      gardenRouteOptions && activeGardenHotSpot === "BigTree";
    const plantBoxRouteOptions =
      gardenRouteOptions && activeGardenHotSpot === "PlantBox";
    const gardenViewRouteOptions =
      gardenRouteOptions && activeGardenHotSpot === "Overview";

    return {
      gateRouteOptions,
      gardenRouteOptions,
      kitchenRouteOptions,
      bigTreeRouteOptions,
      toolRackRouteOptions,
      plantBoxRouteOptions,
      gardenViewRouteOptions,
      soilCornerRouteOptions,
      gardenHoseRouteOptions,
    };
  }, [activeGardenHotSpot, activeLocation]);

  return activeCamera === "PlayerCamera" ? (
    <Fragment>
      {gateRouteOptions && <GateDebugOptions />}
      {toolRackRouteOptions && <ToolRackDebugOptions />}
      {gardenHoseRouteOptions && <GardenHoseDebugOptions />}
      {soilCornerRouteOptions && <SoilCornerDebugOptions />}
      {bigTreeRouteOptions && <BigTreeDebugOptions />}
      {plantBoxRouteOptions && <PlantBoxDebugOptions />}
      {kitchenRouteOptions && <KitchenViewDebugOptions />}
      {gardenViewRouteOptions && <GardenViewDebugOptions />}
    </Fragment>
  ) : null;
};

export default memo(DebugPlayerCameraTriggers);
