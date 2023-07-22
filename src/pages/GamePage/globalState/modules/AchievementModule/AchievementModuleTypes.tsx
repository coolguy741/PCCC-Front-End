export type GardenCleanAchievementKeyType =
  | "clean_slate"
  | "tidy_tools"
  | "green_thumb_forever";

export type GardenCleanAchievementObjectType = {
  [key in GardenCleanAchievementKeyType]: boolean;
};

export type GardenCarefulAchievementKeyType =
  | "garden_zen"
  | "green_thumb_protector"
  | "sunshine_safety"
  | "wild_harvest"
  | "work_smarter_not_harder"
  | "nature_protector"
  | "dirt_ditcher";

export type GardenCarefulAchievementObjectType = {
  [key in GardenCarefulAchievementKeyType]: boolean;
};

export type GardenConfidentAchievementKeyType =
  | "curious_grower"
  | "garden_genius"
  | "garden_explorer"
  | "itchy_encounter"
  | "big_brain"
  | "creative_grower"
  | "tomato_harvest"
  | "carrot_harvest"
  | "blueberry_harvest";

export type GardenConfidentAchievementObjectType = {
  [key in GardenConfidentAchievementKeyType]: boolean;
};

export type GardenAllAchievementKeyType =
  | GardenCleanAchievementKeyType
  | GardenCarefulAchievementKeyType
  | GardenConfidentAchievementKeyType;

export type GardenAllAchievementObjectType = {
  [key in GardenAllAchievementKeyType]: boolean;
};

export type KitchenCleanAchievementKeyType =
  | "tidy_zone"
  | "functional_fashion"
  | "under_control"
  | "food_safety_savant"
  | "clean_sweep"
  | "hygiene_hero";

export type KitchenCleanAchievementObjectType = {
  [key in KitchenCleanAchievementKeyType]: boolean;
};

export type KitchenConfidentAchievementKeyType =
  | "knowledge_finder"
  | "knife_wielder"
  | "kitchen_knower"
  | "kitchen_explorer"
  | "creative_cook"
  | "experimentation_nation"
  | "mise_en_place"
  | "recipe_reciter";

export type KitchenConfidentAchievementObjectType = {
  [key in KitchenConfidentAchievementKeyType]: boolean;
};

export type KitchenCarefulAchievementKeyType =
  | "kitchen_zen"
  | "functional_fit"
  | "solid_ground"
  | "team_titan";

export type KitchenCarefulAchievementObjectType = {
  [key in KitchenCarefulAchievementKeyType]: boolean;
};

export type KitchenAllAchievementKeyType =
  | KitchenCleanAchievementKeyType
  | KitchenCarefulAchievementKeyType
  | KitchenConfidentAchievementKeyType;

export type KitchenAllAchievementObjectType = {
  [key in KitchenAllAchievementKeyType]: boolean;
};

export type AchievementAllKeyType =
  | GardenAllAchievementKeyType
  | KitchenAllAchievementKeyType;

export type AchievementAllObjectType = {
  [key in AchievementAllKeyType]: boolean;
};

export type AchievmentsModalTypes = "garden" | "kitchen";

export type AchievmentsCCCTypes = "all" | "confident" | "clean" | "careful";
export interface AchievementModuleTypes {
  activeAchievementsModalTab: AchievmentsModalTypes;
  setActiveAchievementsModalTab: (tab: AchievmentsModalTypes) => void;

  activeCCC: AchievmentsCCCTypes;
  setActiveCCC: (activeCCC: AchievmentsCCCTypes) => void;

  activeGardenCleanAchievements: GardenCleanAchievementObjectType;
  setUpdateActiveGardenCleanAchievements: (
    status: boolean,
    gardenCleanAchievementKey: GardenCleanAchievementKeyType,
  ) => void;

  activeGardenConfidentAchievements: GardenConfidentAchievementObjectType;
  setUpdateActiveGardenConfidentAchievements: (
    status: boolean,
    gardenConfidentAchievementKey: GardenConfidentAchievementKeyType,
  ) => void;

  activeGardenCarefulAchievements: GardenCarefulAchievementObjectType;
  setUpdateActiveGardenCarefulAchievements: (
    status: boolean,
    gardenCarefulAchievementKey: GardenCarefulAchievementKeyType,
  ) => void;

  activeGardenAllAchievements: GardenAllAchievementObjectType;
  setUpdateActiveAllCarefulAchievements: (
    status: boolean,
    gardenAllAchievementKey: GardenAllAchievementKeyType,
  ) => void;

  activeKitchenCleanAchievements: KitchenCleanAchievementObjectType;
  setUpdateActiveKitchenCleanAchievements: (
    status: boolean,
    kitchenCleanAchievementKey: KitchenCleanAchievementKeyType,
  ) => void;

  activeKitchenConfidentAchievements: KitchenConfidentAchievementObjectType;
  setUpdateActiveKitchenConfidentAchievements: (
    status: boolean,
    kitchenConfidentAchievementKey: KitchenConfidentAchievementKeyType,
  ) => void;

  activeKitchenCarefulAchievements: KitchenCarefulAchievementObjectType;
  setUpdateActiveKitchenCarefulAchievements: (
    status: boolean,
    kitchenCarefulAchievementKey: KitchenCarefulAchievementKeyType,
  ) => void;

  activeKitchenAllAchievements: KitchenAllAchievementObjectType;
  setUpdateActiveKitchenAllAchievements: (
    status: boolean,
    kitchenAllAchievementKey: KitchenAllAchievementKeyType,
  ) => void;

  activeAllAchievements: AchievementAllObjectType;
  setUpdateActiveAllAchievements: (
    status: boolean,
    achievementAllKey: AchievementAllKeyType,
  ) => void;
}
