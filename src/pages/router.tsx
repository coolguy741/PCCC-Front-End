import { createBrowserRouter, Outlet } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { DashboardPage } from "./DashboardPage";
import { ProfilesPage } from "./ProfilesPage";
import { GroupOrganizerPage } from "./GroupOrganizerPage";
import { MealPlannerPage } from "./MealPlannerPage";
import { TopicEditorPage } from "./TopicEditorPage";
import { DiscoveryEditorPage } from "./DiscoveryEditorPage";
import { ActivitiesBuilderPage } from "./ActivitiesBuilderPage";
import { FoodwaysEditorPage } from "./FoodwaysEditorPage";
import { RecipeBuilderPage } from "./RecipeBuilderPage";
import { CalendarPage } from "./CalendarPage";
import { ReportsPage } from "./ReportsPage";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  {
    path: "/dashboard",
    element: (
      <DashboardPage>
        <Outlet />
      </DashboardPage>
    ),
    children: [
      { path: "", element: <ProfilesPage /> },
      { path: "reports", element: <ReportsPage /> },
      { path: "group-organizer", element: <GroupOrganizerPage /> },
      { path: "meal-planner", element: <MealPlannerPage /> },
      { path: "topic-editor", element: <TopicEditorPage /> },
      { path: "discovery-editor", element: <DiscoveryEditorPage /> },
      { path: "activities-builder", element: <ActivitiesBuilderPage /> },
      { path: "foodways-editor", element: <FoodwaysEditorPage /> },
      { path: "recipe-builder", element: <RecipeBuilderPage /> },
      { path: "calendar", element: <CalendarPage /> },
    ],
  },
]);
