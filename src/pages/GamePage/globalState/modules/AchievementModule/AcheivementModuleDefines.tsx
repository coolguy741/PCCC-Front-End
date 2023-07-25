import {
  AchievementAllObjectType,
  GardenAllAchievementObjectType,
  GardenCarefulAchievementObjectType,
  GardenCleanAchievementObjectType,
  GardenConfidentAchievementObjectType,
  GardenMasterAchievementObjectType,
  KitchenAllAchievementObjectType,
  KitchenCarefulAchievementObjectType,
  KitchenCleanAchievementObjectType,
  KitchenConfidentAchievementObjectType,
  KitchenMasterAchievementObjectType,
} from "./AchievementModuleTypes";

const GardenCleanAchievementObject: GardenCleanAchievementObjectType = {
  clean_slate: false,
  tidy_tools: true,
  green_thumb_forever: true,
};

const GardenCarefulAchievementObject: GardenCarefulAchievementObjectType = {
  garden_zen: true,
  green_thumb_protector: true,
  sunshine_safety: false,
  wild_harvest: true,
  work_smarter_not_harder: true,
  nature_protector: false,
  dirt_ditcher: true,
};

const GardenConfidentAchievementObject: GardenConfidentAchievementObjectType = {
  curious_grower: true,
  garden_genius: true,
  garden_explorer: true,
  itchy_encounter: true,
  big_brain: false,
  creative_grower: true,
  tomato_harvest: true,
  carrot_harvest: true,
  blueberry_harvest: true,
};

const GardenMasterAchievementObject: GardenMasterAchievementObjectType = {
  master_grower: true,
};

const GardenAllAchievementObject: GardenAllAchievementObjectType = {
  ...GardenMasterAchievementObject,
  ...GardenCleanAchievementObject,
  ...GardenCarefulAchievementObject,
  ...GardenConfidentAchievementObject,
};

const KitchenCleanAchievementObject: KitchenCleanAchievementObjectType = {
  tidy_zone: true,
  functional_fashion: false,
  under_control: true,
  food_safety_savant: true,
  clean_sweep: true,
  hygiene_hero: false,
};

const KitchenConfidentAchievementObject: KitchenConfidentAchievementObjectType =
  {
    knowledge_finder: false,
    knife_wielder: false,
    kitchen_knower: true,
    kitchen_explorer: false,
    creative_cook: true,
    experimentation_nation: true,
    mise_en_place: true,
    recipe_reciter: true,
  };

const KitchenCarefulAchievementObject: KitchenCarefulAchievementObjectType = {
  kitchen_zen: true,
  functional_fit: false,
  solid_ground: true,
  team_titan: true,
};

const KitchenMasterAchievementObject: KitchenMasterAchievementObjectType = {
  master_cook: true,
};

const KitchenAllAchievementObject: KitchenAllAchievementObjectType = {
  ...KitchenMasterAchievementObject,
  ...KitchenCleanAchievementObject,
  ...KitchenCarefulAchievementObject,
  ...KitchenConfidentAchievementObject,
};

const AllAchievementObject: AchievementAllObjectType = {
  ...GardenAllAchievementObject,
  ...KitchenAllAchievementObject,
};

export {
  AllAchievementObject,
  GardenAllAchievementObject,
  GardenCleanAchievementObject,
  GardenCarefulAchievementObject,
  GardenConfidentAchievementObject,
  KitchenAllAchievementObject,
  KitchenCleanAchievementObject,
  KitchenCarefulAchievementObject,
  KitchenConfidentAchievementObject,
  KitchenMasterAchievementObject,
  GardenMasterAchievementObject,
};
