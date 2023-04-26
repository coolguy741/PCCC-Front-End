export type AchievementKeyType =
  | "Cook"
  | "TidyChef"
  | "CleanEater"
  | "CleanSlate"
  | "CleanSweep"
  | "BraveEater"
  | "KitchenZen"
  | "MasterChef"
  | "WildHarvest"
  | "StylishChef"
  | "PerfectDish"
  | "MadScientist"
  | "SqueakyClean"
  | "CreativeCook"
  | "SunnyGardener"
  | "TidyHairHero"
  | "SlipFreeChef"
  | "HygieneMaster"
  | "CleanGardener"
  | "ItchyEncounter"
  | "GardenExplorer"
  | "MasterGardener"
  | "ApprenticeCook"
  | "NervesOfSteel"
  | "KitchenExplorer"
  | "PrecisionCutter"
  | "CuriousGardener"
  | "GreenThumbForever"
  | "FunctionalWardrobe"
  | "OutOfComfortZone"
  | "GreenThumbProtector"
  | "WorkSmarterNotHarder"
  | "AwarenessAndCommunication";

export type AchievementObjectType = {
  [key in AchievementKeyType]: boolean;
};

export interface AchievementModuleTypes {
  activeAchievements: AchievementObjectType;
  setUpdateActiveAchievements: (
    status: boolean,
    achievementKey: AchievementKeyType,
  ) => void;
}
