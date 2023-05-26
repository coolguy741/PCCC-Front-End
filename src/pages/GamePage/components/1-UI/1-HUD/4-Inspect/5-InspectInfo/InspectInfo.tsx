import { FC, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { InspectData } from "../6-InspectData/INSPECT_DATA";

const InspectInfo: FC = () => {
  // Global State
  const { activeHoveredEntity } = useGlobalState(
    (state) => ({
      activeHoveredEntity: state.activeHoveredEntity,
    }),
    shallow,
  );
  return (
    <div className="item-info">
      <h1 className="item-title">{activeHoveredEntity}</h1>
      <p className="item-text">
        {activeHoveredEntity && InspectData[activeHoveredEntity].inspectText}
      </p>
    </div>
  );
};

export default memo(InspectInfo);
