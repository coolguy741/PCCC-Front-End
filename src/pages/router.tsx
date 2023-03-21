import { createBrowserRouter, Outlet } from "react-router-dom";
import { HomePage } from "./HomePage";
import { SignInPage } from "./SignInPage";
import { SignUpPage } from "./SignUpPage";
import { DashboardPage } from "./DashboardPage";
import { AccountsPage } from "./AccountsPage";
import { GroupOrganizerPage } from "./GroupOrganizerPage";
import { MealPlannerPage } from "./MealPlannerPage";
import { TopicEditorPage } from "./TopicEditorPage";
import { DiscoveryEditorPage } from "./DiscoveryEditorPage";
import { ActivitiesBuilderPage } from "./ActivitiesBuilderPage";
import { FoodwaysPage } from "./FoodwaysPage";
import { RecipeBuilderPage } from "./RecipeBuilderPage";
import { CalendarPage } from "./CalendarPage";
import { ReportsPage } from "./ReportsPage";
import { LandingPage } from "./LandingPage";
import { AchievementsPage } from "./AchievementsPage";
import { AuthPage } from "./AuthPage";
import { MealPlannerPrintPage } from "./MealPlannerPage/Print";
import { PrintPage } from "./PrintPage";
import { MealPlannerGroceryPage } from "./MealPlannerPage/Grocery";
import { MealPlannerGroceryPrintPage } from "./MealPlannerPage/Grocery/Print";
import { MealPlannerRecipePage } from "./MealPlannerPage/Recipe";
import { MealPlannerAssessmentPage } from "./MealPlannerPage/Recipe/Assessment";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/signin",
    element: (
      <AuthPage>
        <Outlet />
      </AuthPage>
    ),
    children: [{ path: "", element: <SignInPage /> }],
  },
  {
    path: "/signup",
    element: (
      <AuthPage>
        <Outlet />
      </AuthPage>
    ),
    children: [{ path: "", element: <SignUpPage /> }],
  },
  { path: "/landing", element: <LandingPage /> },
  {
    path: "/dashboard",
    element: (
      <DashboardPage>
        <Outlet />
      </DashboardPage>
    ),
    children: [
      { path: "", element: <AccountsPage /> },
      { path: "reports", element: <ReportsPage /> },
      { path: "group-organizer", element: <GroupOrganizerPage /> },
      {
        path: "meal-planner",
        element: (
          <>
            <Outlet />
          </>
        ),
        children: [
          { path: "", element: <MealPlannerPage /> },
          { path: ":recipe", element: <MealPlannerRecipePage /> },
          {
            path: ":recipe/:assessment",
            element: <MealPlannerAssessmentPage />,
          },
          { path: "edit", element: <MealPlannerPage /> },
          { path: "grocery-list", element: <MealPlannerGroceryPage /> },
        ],
      },
      { path: "topics", element: <TopicEditorPage /> },
      { path: "daily-discovery", element: <DiscoveryEditorPage /> },
      { path: "activities", element: <ActivitiesBuilderPage /> },
      { path: "foodways", element: <FoodwaysPage /> },
      { path: "recipe-builder", element: <RecipeBuilderPage /> },
      { path: "calendar", element: <CalendarPage /> },
      { path: "achievements", element: <AchievementsPage /> },
    ],
  },
  {
    path: "",
    element: (
      <PrintPage>
        <Outlet />
      </PrintPage>
    ),
    children: [
      {
        path: "dashboard/meal-planner",
        element: (
          <>
            <Outlet />
          </>
        ),
        children: [
          { path: "print", element: <MealPlannerPrintPage /> },
          {
            path: "grocery-list/print",
            element: <MealPlannerGroceryPrintPage />,
          },
          { path: ":recipe/print", element: <MealPlannerRecipePage /> },
        ],
      },
    ],
  },
]);
