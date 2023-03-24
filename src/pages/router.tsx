import { createBrowserRouter, Outlet } from "react-router-dom";
import { HomePage } from "./HomePage";
import { SignInPage } from "./AuthPage/SignInPage";
import { SignUpPage } from "./AuthPage/SignUpPage";
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
import { TestLandingPage } from "./TestLandingPage";
import { AchievementsPage } from "./AchievementsPage";
import { AuthPage } from "./AuthPage";
import { MealPlannerPrintPage } from "./MealPlannerPage/Print";
import { PrintPage } from "./PrintPage";
import { MealPlannerGroceryPage } from "./MealPlannerPage/Grocery";
import { MealPlannerGroceryPrintPage } from "./MealPlannerPage/Grocery/Print";
import { MealPlannerRecipePage } from "./MealPlannerPage/Recipe";
import { AccountsProfilesPage } from "./AccountsPage/Profiles";
import { AccountsGroupsPage } from "./AccountsPage/Groups";
import { AccountsUserProfilePage } from "./AccountsPage/Profiles/User";
import { AccountsUserLessonAssessmentPage } from "./AccountsPage/Profiles/LessonAssessment";
import { AccountsUserLessonAssessmentPrintPage } from "./AccountsPage/Profiles/LessonAssessmentPrint";
import { AccountsCreateGroupPage } from "./AccountsPage/Groups/CreateGroup";
import { AccountsGroupPage } from "./AccountsPage/Groups/Group";
import { AccountsEditGroupPage } from "./AccountsPage/Groups/EditGroup";
import { AccountsGroupCalendarPage } from "./AccountsPage/Groups/GroupCalendar";
import { AccountsGroupCalendarPrintPage } from "./AccountsPage/Groups/GroupCalendarPrint";
import { TempHomePage } from "./TempHomePage";
import { GamesPage } from "./GamesPage";
import { ForgotPasswordPage } from "./AuthPage/ForgotPasswordPage";
import { ResetPasswordPage } from "./AuthPage/ResetPasswordPage";
import { MealPlannerRecipePrintPage } from "./MealPlannerPage/Recipe/Print";
import { CreateFoodwaysPage } from "./FoodwaysPage/Create";
import { FoodwaysOverviewPage } from "./FoodwaysPage/Overview";
import { EditFoodwaysPage } from "./FoodwaysPage/Edit";

export const router = createBrowserRouter([
  { path: "/", element: <TempHomePage /> },
  { path: "/landing", element: <TestLandingPage /> },
  {
    path: "/signin",
    element: (
      <AuthPage>
        <Outlet />
      </AuthPage>
    ),
    children: [
      {
        path: "",
        children: [
          { path: "", element: <SignInPage /> },
          {
            path: "forgot-password",
            element: <ForgotPasswordPage />,
          },
          {
            path: "reset-password",
            element: <ResetPasswordPage />,
          },
        ],
      },
    ],
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
  {
    path: "/dashboard/accounts/profiles/:user/:lessonAssessment/print",
    element: <AccountsUserLessonAssessmentPrintPage />,
  },
  {
    path: "/dashboard",
    element: (
      <DashboardPage>
        <Outlet />
      </DashboardPage>
    ),
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "accounts",
        element: (
          <AccountsPage>
            <Outlet />
          </AccountsPage>
        ),
        children: [
          { path: "profiles", element: <AccountsProfilesPage /> },
          { path: "profiles/:user", element: <AccountsUserProfilePage /> },
          {
            path: "profiles/:user/:lessonAssessment",
            element: <AccountsUserLessonAssessmentPage />,
          },
          
          { path: "groups", element: <AccountsGroupsPage /> },
          { path: "groups/create", element: <AccountsCreateGroupPage /> },
          { path: "groups/:group", element: <AccountsGroupPage /> },
          { path: "groups/:group/edit", element: <AccountsEditGroupPage /> },
          {
            path: "groups/:group/calendar",
            element: <AccountsGroupCalendarPage />,
          },
          {
            path: "groups/:group/calendar/print",
            element: <AccountsGroupCalendarPrintPage />,
          },
        ],
      },
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
            element: <MealPlannerRecipePage />,
          },
          { path: "edit", element: <MealPlannerPage /> },
          { path: "grocery-list", element: <MealPlannerGroceryPage /> },
        ],
      },
      { path: "topics", element: <TopicEditorPage /> },
      { path: "daily-discovery", element: <DiscoveryEditorPage /> },
      { path: "activities", element: <ActivitiesBuilderPage /> },
      {
        path: "foodways",
        children: [
          { path: "", element: <FoodwaysPage /> },
          {
            path: "create",
            element: <CreateFoodwaysPage />,
          },
          {
            path: ":foodway",
            children: [
              { path: "", element: <FoodwaysOverviewPage /> },
              { path: "edit", element: <EditFoodwaysPage /> },
            ],
          },
        ],
      },
      { path: "recipes", element: <RecipeBuilderPage /> },
      { path: "calendar", element: <CalendarPage /> },
      { path: "achievements", element: <AchievementsPage /> },
      { path: "games", element: <GamesPage /> },
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
          { path: ":recipe/print", element: <MealPlannerRecipePrintPage /> },
        ],
      },
    ],
  },
]);
