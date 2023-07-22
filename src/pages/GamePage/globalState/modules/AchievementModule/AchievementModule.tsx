import { globalStateApiType, GlobalStateTypes } from "../../GlobalStateTypes";
import {
  AllAchievementObject,
  GardenAllAchievementObject,
  GardenCarefulAchievementObject,
  GardenCleanAchievementObject,
  GardenConfidentAchievementObject,
  KitchenAllAchievementObject,
  KitchenCarefulAchievementObject,
  KitchenCleanAchievementObject,
  KitchenConfidentAchievementObject,
} from "./AcheivementModuleDefines";
import {
  AchievementAllKeyType,
  AchievmentsCCCTypes,
  AchievmentsModalTypes,
  GardenAllAchievementKeyType,
  GardenCarefulAchievementKeyType,
  GardenCleanAchievementKeyType,
  GardenConfidentAchievementKeyType,
  KitchenAllAchievementKeyType,
  KitchenCarefulAchievementKeyType,
  KitchenCleanAchievementKeyType,
  KitchenConfidentAchievementKeyType,
} from "./AchievementModuleTypes";

const AchievementModule = ({ set, get }: globalStateApiType) => {
  return {
    activeAchievementsModalTab: "garden",
    setActiveAchievementsModalTab: (tab: AchievmentsModalTypes) => {
      set({ activeAchievementsModalTab: tab });
    },

    activeCCC: "all",
    setActiveCCC: (activeCCC: AchievmentsCCCTypes) => {
      set({ activeCCC: activeCCC });
    },

    activeGardenCleanAchievements: GardenCleanAchievementObject,
    setUpdateActiveGardenCleanAchievements: (
      status: boolean,
      gardenCleanAchievementKey: GardenCleanAchievementKeyType,
    ) => {
      set((state: GlobalStateTypes) => {
        state.activeGardenCleanAchievements[gardenCleanAchievementKey] = status;
      });
    },

    activeGardenConfidentAchievements: GardenConfidentAchievementObject,
    setUpdateActiveGardenConfidentAchievements: (
      status: boolean,
      gardenConfidentAchievementKey: GardenConfidentAchievementKeyType,
    ) => {
      set((state: GlobalStateTypes) => {
        state.activeGardenConfidentAchievements[gardenConfidentAchievementKey] =
          status;
      });
    },

    activeGardenCarefulAchievements: GardenCarefulAchievementObject,
    setUpdateActiveGardenCarefulAchievements: (
      status: boolean,
      gardenCarefulAchievementKey: GardenCarefulAchievementKeyType,
    ) => {
      set((state: GlobalStateTypes) => {
        state.activeGardenCarefulAchievements[gardenCarefulAchievementKey] =
          status;
      });
    },

    activeGardenAllAchievements: GardenAllAchievementObject,
    setUpdateActiveAllCarefulAchievements: (
      status: boolean,
      gardenAllAchievementKey: GardenAllAchievementKeyType,
    ) => {
      set((state: GlobalStateTypes) => {
        state.activeGardenAllAchievements[gardenAllAchievementKey] = status;
      });
    },

    activeKitchenCleanAchievements: KitchenCleanAchievementObject,
    setUpdateActiveKitchenCleanAchievements: (
      status: boolean,
      kitchenCleanAchievementKey: KitchenCleanAchievementKeyType,
    ) => {
      set((state: GlobalStateTypes) => {
        state.activeKitchenCleanAchievements[kitchenCleanAchievementKey] =
          status;
      });
    },

    activeKitchenConfidentAchievements: KitchenConfidentAchievementObject,
    setUpdateActiveKitchenConfidentAchievements: (
      status: boolean,
      kitchenConfidentAchievementKey: KitchenConfidentAchievementKeyType,
    ) => {
      set((state: GlobalStateTypes) => {
        state.activeKitchenConfidentAchievements[
          kitchenConfidentAchievementKey
        ] = status;
      });
    },

    activeKitchenCarefulAchievements: KitchenCarefulAchievementObject,
    setUpdateActiveKitchenCarefulAchievements: (
      status: boolean,
      kitchenCarefulAchievementKey: KitchenCarefulAchievementKeyType,
    ) => {
      set((state: GlobalStateTypes) => {
        state.activeKitchenCarefulAchievements[kitchenCarefulAchievementKey] =
          status;
      });
    },

    activeKitchenAllAchievements: KitchenAllAchievementObject,
    setUpdateActiveKitchenAllAchievements: (
      status: boolean,
      kitchenAllAchievementKey: KitchenAllAchievementKeyType,
    ) => {
      set((state: GlobalStateTypes) => {
        state.activeKitchenAllAchievements[kitchenAllAchievementKey] = status;
      });
    },

    activeAllAchievements: AllAchievementObject,
    setUpdateActiveAllAchievements: (
      status: boolean,
      achievementAllKey: AchievementAllKeyType,
    ) => {
      set((state: GlobalStateTypes) => {
        state.activeAllAchievements[achievementAllKey] = status;
      });
    },
  };
};

export { AchievementModule };
