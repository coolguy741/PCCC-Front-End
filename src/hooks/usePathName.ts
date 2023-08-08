import { useLocation } from "react-router-dom";

export const usePathName = () => {
  const { pathname } = useLocation();

  const isDashboard = pathname === "/";
  const isAccounts = pathname.includes("accounts");
  const isReports = pathname.includes("reports");
  const isGroupOrganizer = pathname.includes("group-organizer");
  const isAchievements = pathname.includes("achievements");
  const isMealPlanner = pathname.includes("meal-planner");
  const isTopicEditor = pathname.includes("topics");
  const isMealTimeMoments = pathname.includes("mealtime-moments");
  const isActivitiesBuilder = pathname.includes("/activities");
  const isFoodwaysEditor = pathname.includes("foodways");
  const isRecipeBuilder = pathname.includes("/recipes");
  const isCalendar = pathname.includes("calendar");
  const isGames = pathname.includes("games");
  const isCloudDrive = pathname.includes("isCloudDrive");

  return {
    isDashboard,
    isAccounts,
    isReports,
    isAchievements,
    isGroupOrganizer,
    isMealPlanner,
    isTopicEditor,
    isMealTimeMoments,
    isActivitiesBuilder,
    isFoodwaysEditor,
    isRecipeBuilder,
    isCalendar,
    isGames,
    isCloudDrive,
  };
};
