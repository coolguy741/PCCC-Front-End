import { useLocation } from "react-router-dom";

export const usePathName = () => {
  const { pathname } = useLocation();

  console.log(pathname);

  const isDashboard = pathname === "/dashboard" || pathname === "/dashboard/";
  const isReports = pathname.includes("reports");
  const isGroupOrganizer = pathname.includes("group-organizer");
  const isMealPlanner = pathname.includes("meal-planner");
  const isTopicEditor = pathname.includes("topic-editor");
  const isDiscoveryEditor = pathname.includes("discovery-editor");
  const isActivitiesBuilder = pathname.includes("activities-builder");
  const isFoodwaysEditor = pathname.includes("foodways-editor");
  const isRecipeBuilder = pathname.includes("recipe-builder");
  const isCalendar = pathname.includes("calendar");

  return {
    isDashboard,
    isReports,
    isGroupOrganizer,
    isMealPlanner,
    isTopicEditor,
    isDiscoveryEditor,
    isActivitiesBuilder,
    isFoodwaysEditor,
    isRecipeBuilder,
    isCalendar,
  };
};
