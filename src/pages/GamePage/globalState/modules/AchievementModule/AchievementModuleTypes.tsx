export type AchievementKeyType =
  | "Cook"
  | "Tidy Chef"
  | "Clean Eater"
  | "Clean Slate"
  | "Clean Sweep"
  | "Brave Eater"
  | "Kitchen Zen"
  | "Master Chef"
  | "Wild Harvest"
  | "Stylish Chef"
  | "Perfect Dish"
  | "Mad Scientist"
  | "Squeaky Clean"
  | "Creative Cook"
  | "Sunny Gardener"
  | "Tidy Hair Hero"
  | "Slip-Free Chef"
  | "Hygiene Master"
  | "Clean Gardener"
  | "Itchy Encounter"
  | "Garden Explorer"
  | "Master Gardener"
  | "Apprentice Cook"
  | "Nerves of Steel"
  | "Kitchen Explorer"
  | "Precision Cutter"
  | "Curious Gardener"
  | "Green Thumb Forever"
  | "Functional Wardrobe"
  | "Out of Comfort Zone"
  | "Green Thumb Protector"
  | "Work Smarter Not Harder"
  | "Awareness and Communication";

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
