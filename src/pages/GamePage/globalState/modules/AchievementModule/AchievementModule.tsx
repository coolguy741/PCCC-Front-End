import { globalStateApiType, GlobalStateTypes } from "../../GlobalStateTypes";
import { InitAchievements } from "./AcheivementModuleDefines";
import { AchievementKeyType } from "./AchievementModuleTypes";

const AchievementModule = ({ set, get }: globalStateApiType) => {
  return {
    activeAchievements: InitAchievements,
    setUpdateActiveAchievements: (
      status: boolean,
      achievementKey: AchievementKeyType,
    ) => {
      set((state: GlobalStateTypes) => {
        state.activeAchievements[achievementKey] = status;
      });
    },
  };
};

export { AchievementModule };
