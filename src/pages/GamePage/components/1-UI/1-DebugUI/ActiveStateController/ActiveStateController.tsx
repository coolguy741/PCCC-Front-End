import { FC, Fragment, memo, useCallback, useState } from "react";
import { shallow } from "zustand/shallow";
import { AchievementKeyType } from "../../../../globalState/modules/AchievementModule/AchievementModuleTypes";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import ActiveStateControllerButtonStyle from "./ActiveStateControllerButtonStyle";
import ActiveStateControllerStyleContainer from "./ActiveStateControllerStyleContainer";
import { InventoryTable } from "./InventoryTable";

const ActiveStateController: FC = () => {
  // Local State
  const [activeStateVisible, setActiveStateVisible] = useState<boolean>(false);

  // Global State
  const {
    activeLocation,
    activeInventory,
    activeAchievements,
    activeGardenHotSpot,
    activeKitchenHotSpot,
    setUpdateActiveInventory,
  } = useGlobalState(
    (state) => ({
      activeLocation: state.activeLocation,
      activeInventory: state.activeInventory,
      activeAchievements: state.activeAchievements,
      activeGardenHotSpot: state.activeGardenHotSpot,
      activeKitchenHotSpot: state.activeKitchenHotSpot,
      setUpdateActiveInventory: state.setUpdateActiveInventory,
    }),
    shallow,
  );

  // Handlers
  const handleSetGlobalStateVisibility = useCallback(() => {
    setActiveStateVisible((prevState) => !prevState);
  }, []);

  const handleSetUpdateActiveInventory = useCallback(() => {
    setUpdateActiveInventory("Hat", true);
  }, []);

  return (
    <Fragment>
      {activeStateVisible && (
        <ActiveStateControllerStyleContainer>
          <table>
            <tbody>
              <tr>
                <th>Active Location</th>
                <td title="Active Location">{activeLocation}</td>
              </tr>
              <tr>
                <th>Active Garden HotSpot</th>
                <td title="Active Garden HotSpot">{activeGardenHotSpot}</td>
              </tr>
              <tr>
                <th>Active Kitchen HotSpot</th>
                <td title="Active Kitchen HotSpot">{activeKitchenHotSpot}</td>
              </tr>
              <tr>
                <th>Active Achievements</th>
                <td title="Achievement Status">
                  <ul>
                    {Object.keys(activeAchievements).map(
                      (achievement: string) => {
                        return (
                          <li key={achievement}>
                            {achievement}:{" "}
                            {activeAchievements[
                              achievement as AchievementKeyType
                            ]
                              ? "Yes"
                              : "No"}
                            ,
                          </li>
                        );
                      },
                    )}
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Active Inventory</th>
                <td>
                  <InventoryTable inventory={activeInventory} />
                </td>
              </tr>
            </tbody>
          </table>
        </ActiveStateControllerStyleContainer>
      )}

      <ActiveStateControllerButtonStyle
        onClick={handleSetGlobalStateVisibility}
      >
        {activeStateVisible ? "Hide Active State" : "Show Active State"}
      </ActiveStateControllerButtonStyle>

      <ActiveStateControllerButtonStyle
        onClick={handleSetUpdateActiveInventory}
      >
        RUN
      </ActiveStateControllerButtonStyle>
    </Fragment>
  );
};

export default memo(ActiveStateController);
