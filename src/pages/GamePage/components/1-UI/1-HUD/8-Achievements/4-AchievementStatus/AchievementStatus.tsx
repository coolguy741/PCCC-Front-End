import { AnimatePresence, motion } from "framer-motion";
import { FC, memo, useCallback, useEffect, useState } from "react";
import { shallow } from "zustand/shallow";
import {
  AchievementAllKeyType,
  AchievementAllObjectType,
} from "../../../../../globalState/modules/AchievementModule/AchievementModuleTypes";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import AchivementStatusStyleContainer from "./AchivementStatusStyleContainer";

const AchievementStatus: FC = () => {
  // Refs
  const [cleanEarned, setCleanEarned] = useState<number>(0);
  const [carefulEarned, setCarefulEarned] = useState<number>(0);
  const [confidentEarned, setConfidentEarned] = useState<number>(0);

  // Global State
  const {
    activeAchievementsModalTab,
    activeGardenCleanAchievements,
    activeKitchenCleanAchievements,
    activeGardenCarefulAchievements,
    activeKitchenCarefulAchievements,
    activeGardenConfidentAchievements,
    activeKitchenConfidentAchievements,
  } = useGlobalState(
    (state) => ({
      activeAchievementsModalTab: state.activeAchievementsModalTab,
      activeGardenCleanAchievements: state.activeGardenCleanAchievements,
      activeKitchenCleanAchievements: state.activeKitchenCleanAchievements,
      activeGardenCarefulAchievements: state.activeGardenCarefulAchievements,
      activeKitchenCarefulAchievements: state.activeKitchenCarefulAchievements,
      activeGardenConfidentAchievements:
        state.activeGardenConfidentAchievements,
      activeKitchenConfidentAchievements:
        state.activeKitchenConfidentAchievements,
    }),
    shallow,
  );

  const handleEarnedConfidentCountUpdate: ConstantVoidFunctionType =
    useCallback((): void => {
      let initCount = 0;
      const achivements =
        activeAchievementsModalTab === "garden"
          ? activeGardenConfidentAchievements
          : activeKitchenConfidentAchievements;

      Object.keys(achivements).forEach((item) => {
        if (
          (achivements as AchievementAllObjectType)[
            item as AchievementAllKeyType
          ]
        ) {
          initCount += 1;
        }
      });

      setConfidentEarned(initCount);
    }, [
      setConfidentEarned,
      activeAchievementsModalTab,
      activeGardenConfidentAchievements,
      activeKitchenConfidentAchievements,
    ]);

  const handleEarnedCleanCountUpdate: ConstantVoidFunctionType =
    useCallback((): void => {
      let initCount = 0;
      const achivements =
        activeAchievementsModalTab === "garden"
          ? activeGardenCleanAchievements
          : activeKitchenCleanAchievements;

      Object.keys(achivements).forEach((item) => {
        if (
          (achivements as AchievementAllObjectType)[
            item as AchievementAllKeyType
          ]
        ) {
          initCount += 1;
        }
      });

      setCleanEarned(initCount);
    }, [
      setCleanEarned,
      activeAchievementsModalTab,
      activeGardenCleanAchievements,
      activeKitchenCleanAchievements,
    ]);

  const handleEarnedCarefulCountUpdate: ConstantVoidFunctionType =
    useCallback((): void => {
      let initCount = 0;
      const achivements =
        activeAchievementsModalTab === "garden"
          ? activeGardenCarefulAchievements
          : activeKitchenCarefulAchievements;

      Object.keys(achivements).forEach((item) => {
        if (
          (achivements as AchievementAllObjectType)[
            item as AchievementAllKeyType
          ]
        ) {
          initCount += 1;
        }
      });

      setCarefulEarned(initCount);
    }, [
      setCarefulEarned,
      activeAchievementsModalTab,
      activeGardenCarefulAchievements,
      activeKitchenCarefulAchievements,
    ]);

  // Listeners
  useEffect(handleEarnedConfidentCountUpdate, [
    handleEarnedConfidentCountUpdate,
    activeGardenConfidentAchievements,
    activeKitchenConfidentAchievements,
  ]);

  useEffect(handleEarnedCleanCountUpdate, [
    handleEarnedCleanCountUpdate,
    activeGardenCleanAchievements,
    activeKitchenCleanAchievements,
  ]);

  useEffect(handleEarnedCarefulCountUpdate, [
    handleEarnedCarefulCountUpdate,
    activeGardenCarefulAchievements,
    activeKitchenCarefulAchievements,
  ]);

  return (
    <AchivementStatusStyleContainer>
      <AnimatePresence mode={"wait"}>
        {activeAchievementsModalTab === "garden" ? (
          <motion.div
            key={"garden"}
            className="status"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <div className="status-item">
              <h1 className="status-ratio">
                {Object.keys(activeGardenConfidentAchievements).length} /{" "}
                {confidentEarned}
              </h1>
              <div className="confident-status-bar">
                <div className="confident-status-bar-bg" />
                <div
                  className="confident-status-bar-fill"
                  style={{
                    width: `${
                      (confidentEarned * 100) /
                      Object.keys(activeGardenConfidentAchievements).length
                    }%`,
                  }}
                />
              </div>
            </div>
            <div className="status-item">
              <h1 className="status-ratio">
                {Object.keys(activeGardenCleanAchievements).length} /{" "}
                {cleanEarned}
              </h1>
              <div className="clean-status-bar">
                <div className="clean-status-bar-bg" />
                <div
                  className="clean-status-bar-fill"
                  style={{
                    width: `${
                      (cleanEarned * 100) /
                      Object.keys(activeGardenCleanAchievements).length
                    }%`,
                  }}
                />
              </div>
            </div>
            <div className="status-item">
              <h1 className="status-ratio">
                {Object.keys(activeGardenCarefulAchievements).length} /{" "}
                {carefulEarned}
              </h1>
              <div className="careful-status-bar">
                <div className="careful-status-bar-bg" />
                <div
                  className="careful-status-bar-fill"
                  style={{
                    width: `${
                      (carefulEarned * 100) /
                      Object.keys(activeGardenCarefulAchievements).length
                    }%`,
                  }}
                />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={"kitchen"}
            className="status"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <div className="status-item">
              <h1 className="status-ratio">
                {Object.keys(activeKitchenConfidentAchievements).length} /{" "}
                {confidentEarned}
              </h1>
              <div className="confident-status-bar">
                <div className="confident-status-bar-bg" />
                <div
                  className="confident-status-bar-fill"
                  style={{
                    width: `${
                      (confidentEarned * 100) /
                      Object.keys(activeKitchenConfidentAchievements).length
                    }%`,
                  }}
                />
              </div>
            </div>
            <div className="status-item">
              <h1 className="status-ratio">
                {Object.keys(activeKitchenCleanAchievements).length} /{" "}
                {cleanEarned}
              </h1>
              <div className="clean-status-bar">
                <div className="clean-status-bar-bg" />
                <div
                  className="clean-status-bar-fill"
                  style={{
                    width: `${
                      (cleanEarned * 100) /
                      Object.keys(activeKitchenCleanAchievements).length
                    }%`,
                  }}
                />
              </div>
            </div>
            <div className="status-item">
              <h1 className="status-ratio">
                {Object.keys(activeKitchenCarefulAchievements).length} /{" "}
                {carefulEarned}
              </h1>
              <div className="careful-status-bar">
                <div className="careful-status-bar-bg" />
                <div
                  className="careful-status-bar-fill"
                  style={{
                    width: `${
                      (carefulEarned * 100) /
                      Object.keys(activeKitchenCarefulAchievements).length
                    }%`,
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AchivementStatusStyleContainer>
  );
};

export default memo(AchievementStatus);
