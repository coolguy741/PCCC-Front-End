import {
  AchievementAllObjectType,
  GardenAllAchievementObjectType,
  GardenCarefulAchievementObjectType,
  GardenCleanAchievementObjectType,
  GardenConfidentAchievementObjectType,
  KitchenAllAchievementObjectType,
  KitchenCarefulAchievementObjectType,
  KitchenCleanAchievementObjectType,
  KitchenConfidentAchievementObjectType,
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

const GardenAllAchievementObject: GardenAllAchievementObjectType = {
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

const KitchenAllAchievementObject: KitchenAllAchievementObjectType = {
  tidy_zone: true,
  functional_fashion: true,
  under_control: true,
  food_safety_savant: true,
  clean_sweep: true,
  hygiene_hero: true,
  knowledge_finder: true,
  knife_wielder: true,
  kitchen_knower: true,
  kitchen_explorer: true,
  creative_cook: true,
  experimentation_nation: true,
  mise_en_place: true,
  recipe_reciter: true,
  kitchen_zen: true,
  functional_fit: true,
  solid_ground: true,
  team_titan: true,
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
};
