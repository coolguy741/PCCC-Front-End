import { FC, Fragment, memo, useCallback, useState } from "react";
import { shallow } from "zustand/shallow";
import { AchievementAllKeyType } from "../../../../globalState/modules/AchievementModule/AchievementModuleTypes";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import DebugButton from "../1-DebugButton/DebugButton";
import ActiveStateControllerStyleContainer from "./ActiveStateControllerStyleContainer";

const ActiveStateController: FC = () => {
  // Local State
  const [activeStateVisible, setActiveStateVisible] = useState<boolean>(false);

  // Global State
  const {
    activeCamera,
    setActiveCamera,
    activeLocation,
    activeAllAchievements,
    activeGardenHotSpot,
    activeKitchenHotSpot,
  } = useGlobalState(
    (state) => ({
      activeLocation: state.activeLocation,
      activeAllAchievements: state.activeAllAchievements,
      activeGardenHotSpot: state.activeGardenHotSpot,
      activeKitchenHotSpot: state.activeKitchenHotSpot,
      activeCamera: state.activeCamera,
      setActiveCamera: state.setActiveCamera,
    }),
    shallow,
  );

  // Handlers
  const handleSetGlobalStateVisibility = useCallback(() => {
    setActiveStateVisible((prevState) => !prevState);
  }, []);

  const handleSetUpdateActiveInventory = useCallback(() => {
    if (activeCamera === "OrbitControls") {
      setActiveCamera("PlayerCamera");
    } else {
      setActiveCamera("OrbitControls");
    }
  }, [activeCamera, setActiveCamera]);

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
                    {Object.keys(activeAllAchievements).map(
                      (achievement: string) => {
                        return (
                          <li key={achievement}>
                            {achievement}:{" "}
                            {activeAllAchievements[
                              achievement as AchievementAllKeyType
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
                <td>{/* <InventoryTable inventory={activeInventory} /> */}</td>
              </tr>
            </tbody>
          </table>
        </ActiveStateControllerStyleContainer>
      )}

      <DebugButton
        debugButtonStyleObject={{
          "--debug-button-right": "0",
          "--debug-button-bottom": "0",
          "--debug-button-position": "fixed",
          "--debug-button-margin-bottom": "24rem",
        }}
        btnContent={activeStateVisible ? "HIDE STATE" : "SHOW STATE"}
        btnAction={handleSetGlobalStateVisibility}
      />

      <DebugButton
        debugButtonStyleObject={{
          "--debug-button-right": "0",
          "--debug-button-bottom": "0",
          "--debug-button-position": "fixed",
          "--debug-button-margin-bottom": "21rem",
        }}
        btnContent={"SWAP CAM"}
        btnAction={handleSetUpdateActiveInventory}
      />
    </Fragment>
  );
};

export default memo(ActiveStateController);
