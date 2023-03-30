import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { HomePage } from "./HomePage";
import { SignInPage } from "./AuthPage/SignInPage";
import { SignUpPage } from "./AuthPage/SignUpPage";
import { DashboardPage } from "./DashboardPage";
import { AccountsPage } from "./AccountsPage";
import { GroupOrganizerPage } from "./GroupOrganizerPage";
import { MealPlannerPage } from "./MealPlannerPage";
import { TopicBuilderPage } from "./TopicBuilderPage";
import { DiscoveryEditorPage } from "./DiscoveryEditorPage";
import { ActivitiesBuilderPage } from "./ActivitiesBuilderPage";
import { FoodwaysPage } from "./FoodwaysPage";
import { RecipesBuilderPage } from "./RecipeBuilderPage";
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
import { Topics } from "./TopicBuilderPage/Topics";
import { TopicCreatePage } from "./TopicBuilderPage/Create";
import { TopicOverviewPage } from "./TopicBuilderPage/Overview";
import { TopicCreatePreviewPage } from "./TopicBuilderPage/Create/Preview";
import { CreateFoodwaysPage } from "./FoodwaysPage/Create";
import { FoodwaysOverviewPage } from "./FoodwaysPage/Overview";
import { EditFoodwaysPage } from "./FoodwaysPage/Edit";
import { FoodwaysPrintPage } from "./FoodwaysPage/Print";
import { FoodwaysPreviewPage } from "./FoodwaysPage/Preview";
import { RecipesPage } from "./RecipeBuilderPage/RecipesPage";
import { RecipePage } from "./RecipeBuilderPage/RecipePage";
import { RecipesEditRecipePage } from "./RecipeBuilderPage/RecipesEditRecipePage";
import { RecipesCreateRecipePage } from "./RecipeBuilderPage/RecipesCreateRecipePage";
import { RecipesLessonAssessment } from "./RecipeBuilderPage/RecipesLessonAssessment";
import { RecipesEditLessonAssessment } from "./RecipeBuilderPage/RecipesEditLessonAssessment";
import { RecipesCreateLessonAssessment } from "./RecipeBuilderPage/RecipesCreateLessonAssessment";
import { RecipesCreatePreviewLessonAssessment } from "./RecipeBuilderPage/RecipesCreatePreviewLessonAssessment";
import { RecipesCreatePreviewRecipePage } from "./RecipeBuilderPage/RecipesCreatePreviewRecipePage";
import { RecipePrint } from "./RecipeBuilderPage/RecipePrint";

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
          { path: "", element: <Navigate to="./profiles" />  },
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
      {
        path: "topics",
        element: <TopicBuilderPage />,
        children: [
          { path: "", element: <Topics /> },
          { path: "create/:slug", element: <TopicCreatePage /> },
          { path: "create/:slug/preview", element: <TopicCreatePreviewPage /> },
          { path: ":id/:slug/edit", element: <TopicCreatePage /> },
          { path: ":id/:slug", element: <TopicOverviewPage /> },
        ],
      },
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
              { path: "preview", element: <FoodwaysPreviewPage /> },
            ],
          },
        ],
      },
      { 
        path: "recipes", 
        element: (
          <RecipesBuilderPage>
            <Outlet/>
          </RecipesBuilderPage>
        ),
        children: [
          { path: "", element: <RecipesPage /> },
          { path: "create", element: <RecipesCreateRecipePage /> },
          { path: "create/preview", element: <RecipesCreatePreviewRecipePage /> },
          { path: ":recipt", element: <RecipePage /> },
          { path: ":recipt/edit", element: <RecipesEditRecipePage /> },
          { path: "lesson-assessment/create", element: <RecipesCreateLessonAssessment /> },
          { path: "lesson-assessment/create/preview", element: <RecipesCreatePreviewLessonAssessment /> },
          { path: ":recipt/lesson-assessment", element: <RecipesLessonAssessment /> },
          { path: ":recipt/lesson-assessment/edit", element: <RecipesEditLessonAssessment /> },
        ]
      },
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
        children: [
          { path: "print", element: <MealPlannerPrintPage /> },
          {
            path: "grocery-list/print",
            element: <MealPlannerGroceryPrintPage />,
          },
          { path: ":recipe/print", element: <MealPlannerRecipePrintPage /> },
        ],
      },
      {
        path: "dashboard/foodways",
        children: [
          {
            path: ":foodway/print",
            element: <FoodwaysPrintPage />,
          },
        ],
      },
      {
        path: "dashboard/accounts/groups/:group/calendar/print",
        element: <AccountsGroupCalendarPrintPage />,
      },
      {
        path: "/dashboard/accounts/profiles/:user/:lessonAssessment/print",
        element: <AccountsUserLessonAssessmentPrintPage />,
      },
      {
        path: "dashboard/recipes/:recipe/print",
        element: <RecipePrint />,
      },
    ],
  },
]);
