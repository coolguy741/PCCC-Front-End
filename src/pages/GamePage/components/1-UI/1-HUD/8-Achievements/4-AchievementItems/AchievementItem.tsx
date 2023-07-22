import { motion } from "framer-motion";
import { FC, memo } from "react";
import { shallow } from "zustand/shallow";
import { AchievementAllKeyType } from "../../../../../globalState/modules/AchievementModule/AchievementModuleTypes";
import { useGlobalState } from "../../../../../globalState/useGlobalState";

type AchievementColorTypes = "blue" | "green" | "red" | "peach";

interface AchievementItemProps {
  item: AchievementAllKeyType;
  badgeColor: AchievementColorTypes;
}

const AchievementItem: FC<AchievementItemProps> = ({ item, badgeColor }) => {
  // Global State
  const { activeLanguage } = useGlobalState(
    (state) => ({
      activeLanguage: state.activeLanguage,
    }),
    shallow,
  );

  return (
    <motion.div
      className="achievement-item"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
    >
      <div className="item-bg" />
      <motion.div className="item-img" whileHover={{ scale: 1.1 }}>
        <img
          alt={item}
          draggable={false}
          className="badge-bg"
          src={`/game_assets/ui_images/achievements/achievement_badge_bgs/${badgeColor}_badge.webp`}
        />
        <img
          alt={item}
          draggable={false}
          className="badge-icon"
          src={`/game_assets/ui_images/achievements/achievement_badge_icons/${item}.webp`}
        />
        {activeLanguage === "eng" ? (
          <img
            alt={item}
            draggable={false}
            className="badge-title"
            src={`/game_assets/ui_images/achievements/achievement_badge_titles/achievement_badge_en_titles/${item}_en.webp`}
          />
        ) : (
          <h1 className="test-name">
            {item
              .split("_")
              .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
              .join(" ")}{" "}
            - fr
          </h1>
        )}
      </motion.div>
    </motion.div>
  );
};

export default memo(AchievementItem);
