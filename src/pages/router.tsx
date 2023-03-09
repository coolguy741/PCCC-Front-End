import { createBrowserRouter, Outlet } from "react-router-dom";
import { HomePage } from "./HomePage";
import { SignInPage } from "./SignInPage";
import { SignUpPage } from "./SignUpPage";
import { DashboardPage } from "./DashboardPage";
import { ProfilesPage } from "./AccountsPage";
import { GroupOrganizerPage } from "./GroupOrganizerPage";
import { MealPlannerPage } from "./MealPlannerPage";
import { TopicEditorPage } from "./TopicEditorPage";
import { DiscoveryEditorPage } from "./DiscoveryEditorPage";
import { ActivitiesBuilderPage } from "./ActivitiesBuilderPage";
import { FoodwaysEditorPage } from "./FoodwaysEditorPage";
import { RecipeBuilderPage } from "./RecipeBuilderPage";
import { CalendarPage } from "./CalendarPage";
import { ReportsPage } from "./ReportsPage";
import { LandingPage } from "./LandingPage";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/signin", element: <SignInPage /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/landing", element: <LandingPage /> },
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
      { path: "topics", element: <TopicEditorPage /> },
      { path: "daily-discovery", element: <DiscoveryEditorPage /> },
      { path: "activities-builder", element: <ActivitiesBuilderPage /> },
      { path: "foodways-editor", element: <FoodwaysEditorPage /> },
      { path: "recipe-builder", element: <RecipeBuilderPage /> },
      { path: "calendar", element: <CalendarPage /> },
    ],
  },
]);
