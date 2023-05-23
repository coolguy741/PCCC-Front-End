import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary/errorBoundary";
import { PageTitleLayout } from "../components/Global/PageTitleLayout";
import { AuthLayout } from "../layouts/AuthLayout/authLayout";
import { DashboardLayout } from "../layouts/DashboardLayout/dashboardLayout";
import { getAuthenticatedUser } from "../lib/api/helpers/getAuthenticatedUser";
import { getFoodway } from "../lib/api/helpers/getFoodway";
import { getGroupInvitations } from "../lib/api/helpers/getGroupInvitations";
import { getGroups } from "../lib/api/helpers/getGroups";
import { redirectIfNotLoggedIn } from "../lib/api/helpers/redirectIfNotLoggedIn";
import { AccountsPage } from "./AccountsPage";
import { AccountsGroupsPage } from "./AccountsPage/Groups";
import { AccountsCreateGroupPage } from "./AccountsPage/Groups/CreateGroup";
import { AccountsEditGroupPage } from "./AccountsPage/Groups/EditGroup";
import { AccountsGroupPage } from "./AccountsPage/Groups/Group";
import { AccountsGroupCalendarPage } from "./AccountsPage/Groups/GroupCalendar";
import { AccountsGroupCalendarPrintPage } from "./AccountsPage/Groups/GroupCalendarPrint";
import { AccountsProfilesPage } from "./AccountsPage/Profiles";
import { AccountsUserLessonAssessmentPage } from "./AccountsPage/Profiles/LessonAssessment";
import { AccountsUserLessonAssessmentPrintPage } from "./AccountsPage/Profiles/LessonAssessmentPrint";
import { AccountsUserProfilePage } from "./AccountsPage/Profiles/User";
import { AchievementsPage } from "./AchievementsPage";
import { ActivitiesPage } from "./ActivitiesBuilderPage";
import { ActivitiesCreatePage } from "./ActivitiesBuilderPage/ActivitiesCreatePage";
import { ActivitiesEditPage } from "./ActivitiesBuilderPage/ActivitiesEditPage";
import { ActivitiesPreviewPage } from "./ActivitiesBuilderPage/ActivitiesPreviewPage";
import { ActivityPage } from "./ActivitiesBuilderPage/ActivityPage";
import { ActivityPrintPage } from "./ActivitiesBuilderPage/ActivityPrintPage";
import { ForgotPasswordPage } from "./AuthPage/ForgotPage";
import { ResetPasswordPage } from "./AuthPage/ResetPasswordPage";
import { SecurityQuestionsPage } from "./AuthPage/SecurityQuestionsPage";
import { SignInPage } from "./AuthPage/SignInPage";
import { SignUpPage } from "./AuthPage/SignUpPage";
import { CalendarPage } from "./CalendarPage";
import { CalendarPrintPage } from "./CalendarPage/Print";
import { CloudDrivePage } from "./CloudDrivePage";
import { CookTogetherPage } from "./CookTogetherPage";
import { DiscoverTogetherPage } from "./DiscoverTogetherPage";
import { FoodwaysPage, foodwaysPageLoader } from "./FoodwaysPage";
import { CreateFoodwaysPage } from "./FoodwaysPage/Create";
import { EditFoodwaysPage } from "./FoodwaysPage/Edit";
import { FoodwaysOverviewPage } from "./FoodwaysPage/Overview";
import { FoodwaysPreviewPage } from "./FoodwaysPage/Preview";
import { FoodwaysPrintPage } from "./FoodwaysPage/Print";
import GamePage from "./GamePage/GamePage";
import { GamesPage } from "./GamesPage";
import { GroupOrganizerPage } from "./GroupOrganizerPage";
import { GrowTogetherPage } from "./GrowTogetherPage";
import { HomePage } from "./HomePage";
import { MealPlannerPage } from "./MealPlannerPage";
import { MealPlannerGroceryPage } from "./MealPlannerPage/Grocery";
import { MealPlannerGroceryPrintPage } from "./MealPlannerPage/Grocery/Print";
import { MealPlannerPrintPage } from "./MealPlannerPage/Print";
import { MealPlannerRecipePage } from "./MealPlannerPage/Recipe";
import { MealPlannerRecipePrintPage } from "./MealPlannerPage/Recipe/Print";
import { MealTimeMomentPage } from "./MealTimeMomentsPage/MealTimeMomentPage";
import { MealtimeMomentPrintPage } from "./MealTimeMomentsPage/MealtimeMomentPrintPage";
import { MealTimeMomentsCreatePage } from "./MealTimeMomentsPage/MealTimeMomentsCreatePage";
import { MealTimeMomentsEditMealTimeMomentPage } from "./MealTimeMomentsPage/MealTimeMomentsEditMealTimeMomentPage";
import { MealTimeMomentsPage } from "./MealTimeMomentsPage/MealtimeMomentsPage";
import { MealTimeMomentsPreviewPage } from "./MealTimeMomentsPage/MealTimeMomentsPreviewPage";
import { NotificationsPage } from "./NotificationsPage";
import { PrintPage } from "./PrintPage";
import { ProfilePage } from "./Profile";
import { ProfileSettingsPage } from "./Profile/ProfileSettings";
import { RecipesPage } from "./RecipeBuilderPage";
import { RecipePage } from "./RecipeBuilderPage/RecipePage";
import { RecipePrintPage } from "./RecipeBuilderPage/RecipePrintPage";
import { RecipesCreateLessonAssessment } from "./RecipeBuilderPage/RecipesCreateLessonAssessment";
import { RecipesCreatePreviewLessonAssessment } from "./RecipeBuilderPage/RecipesCreatePreviewLessonAssessment";
import { RecipesCreatePreviewRecipePage } from "./RecipeBuilderPage/RecipesCreatePreviewRecipePage";
import { RecipesCreateRecipePage } from "./RecipeBuilderPage/RecipesCreateRecipePage";
import { RecipesEditLessonAssessment } from "./RecipeBuilderPage/RecipesEditLessonAssessment";
import { RecipesEditRecipePage } from "./RecipeBuilderPage/RecipesEditRecipePage";
import { RecipesLessonAssessment } from "./RecipeBuilderPage/RecipesLessonAssessment";
import { ReportsPage } from "./ReportsPage";
import { ImpactReportingPage } from "./ReportsPage/ImpactReporting";
import { LessonAssessmentPage } from "./ReportsPage/LessonAssessment";
import { ReportsPrintPage } from "./ReportsPage/Print";
import { SearchPage } from "./SearchPage";
import { TempHomePage } from "./TempHomePage";
import { TestLandingPage } from "./TestLandingPage";
import { Topics } from "./TopicBuilderPage";
import { TopicCreatePage } from "./TopicBuilderPage/Create";
import { TopicOverviewPage } from "./TopicBuilderPage/Overview";
import { TopicPrintPage } from "./TopicBuilderPage/Overview/Print";

export const router = createBrowserRouter([
  { path: "/", element: <TempHomePage />, errorElement: <ErrorBoundary /> },
  { path: "/landing", element: <TestLandingPage /> },
  {
    path: "/signin",
    element: (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
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
            path: "security-questions",
            element: <SecurityQuestionsPage />,
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
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ),

    children: [{ path: "", element: <SignUpPage /> }],
  },
  {
    path: "/dashboard",
    element: (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    ),
    loader: async () => {
      await getAuthenticatedUser();
      return null;
    },
    children: [
      { path: "", element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      {
        path: "accounts",
        element: (
          <AccountsPage>
            <Outlet />
          </AccountsPage>
        ),
        loader: async () => {
          await redirectIfNotLoggedIn();

          return null;
        },
        children: [
          { path: "", element: <Navigate to="./profiles" /> },
          { path: "profiles", element: <AccountsProfilesPage /> },
          { path: "profiles/:user", element: <AccountsUserProfilePage /> },
          {
            path: "profiles/:user/:lessonAssessment",
            element: <AccountsUserLessonAssessmentPage />,
          },
          {
            path: "groups",
            element: <AccountsGroupsPage />,
            loader: async () => {
              const groups = await getGroups();
              const invitations = await getGroupInvitations();

              return { invitations, groups };
            },
          },
          { path: "groups/create", element: <AccountsCreateGroupPage /> },
          { path: "groups/:group", element: <AccountsGroupPage /> },
          {
            path: "groups/:group/edit",
            element: <AccountsEditGroupPage />,
          },
          {
            path: "groups/:group/calendar",
            element: <AccountsGroupCalendarPage />,
          },
        ],
      },
      {
        path: "reports",
        element: (
          <ReportsPage>
            <Outlet />
          </ReportsPage>
        ),
        children: [
          { path: "", element: <Navigate to="./lesson-assessment" /> },
          { path: "lesson-assessment", element: <LessonAssessmentPage /> },
          { path: "impact-reporting", element: <ImpactReportingPage /> },
        ],
      },
      { path: "group-organizer", element: <GroupOrganizerPage /> },
      {
        path: "plate-full-planner",
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
        element: <PageTitleLayout title="Topic" icon="topic-orange-outlined" />,
        children: [
          { path: "", element: <Topics /> },
          { path: "create/:slug", element: <TopicCreatePage /> },
          {
            path: "preview/create/:slug",
            element: <TopicOverviewPage isCreatePreview />,
          },
          { path: ":id/:slug/edit", element: <TopicCreatePage /> },
          { path: ":id/:slug", element: <TopicOverviewPage /> },
        ],
      },
      {
        path: "mealtime-moments",
        element: (
          <PageTitleLayout
            title="Mealtime Moments"
            icon="mealtime-moments-orange-outlined"
          />
        ),
        children: [
          { path: "", element: <MealTimeMomentsPage /> },
          { path: "create", element: <MealTimeMomentsCreatePage /> },
          { path: "preview", element: <MealTimeMomentsPreviewPage /> },
          { path: ":mealtimeMoment", element: <MealTimeMomentPage /> },
          {
            path: ":mealtimeMoment/edit",
            element: <MealTimeMomentsEditMealTimeMomentPage />,
          },
        ],
      },
      {
        path: "activities",
        element: (
          <PageTitleLayout
            title="Activities"
            icon="activities-orange-outlined"
          />
        ),
        children: [
          { path: "", element: <ActivitiesPage /> },
          { path: "create", element: <ActivitiesCreatePage /> },
          { path: "preview", element: <ActivitiesPreviewPage /> },
          { path: ":mealtimeMoment", element: <ActivityPage /> },
          {
            path: ":mealtimeMoment/edit",
            element: <ActivitiesEditPage />,
          },
        ],
      },
      {
        path: "foodways",
        element: (
          <PageTitleLayout title="Foodways" icon="foodways-orange-outlined" />
        ),
        children: [
          {
            path: "",
            element: <FoodwaysPage />,
            loader: foodwaysPageLoader,
          },
          {
            path: "create",
            element: <CreateFoodwaysPage />,
          },
          {
            path: ":id",
            children: [
              {
                path: "",
                element: <FoodwaysOverviewPage />,
                id: "foodway",
                loader: async ({ params }) => {
                  const foodway = await getFoodway(params.id);

                  return foodway;
                },
              },
              {
                path: "edit",
                element: <EditFoodwaysPage />,
                loader: async ({ params }) => {
                  const foodway = await getFoodway(params.id);

                  return foodway;
                },
              },
              { path: "preview", element: <FoodwaysPreviewPage /> },
            ],
          },
        ],
      },
      {
        path: "recipes",
        element: (
          <PageTitleLayout title="Recipes" icon="Recipes-orange-outlined" />
        ),
        children: [
          { path: "", element: <RecipesPage /> },
          { path: "create", element: <RecipesCreateRecipePage /> },
          { path: ":recipe", element: <RecipePage /> },
          { path: ":recipe/edit", element: <RecipesEditRecipePage /> },
          {
            path: ":recipe/preview",
            element: <RecipesCreatePreviewRecipePage />,
          },
          {
            path: "lesson-assessment/create",
            element: <RecipesCreateLessonAssessment />,
          },
          {
            path: "lesson-assessment/create/preview",
            element: <RecipesCreatePreviewLessonAssessment />,
          },
          {
            path: ":recipt/lesson-assessment",
            element: <RecipesLessonAssessment />,
          },
          {
            path: ":recipt/lesson-assessment/edit",
            element: <RecipesEditLessonAssessment />,
          },
        ],
      },
      {
        path: "profile",
        element: (
          <PageTitleLayout
            title="Your profile"
            icon="profile-orange-outlined"
          />
        ),
        children: [
          { path: "", element: <ProfilePage /> },
          { path: "settings", element: <ProfileSettingsPage /> },
        ],
      },
      { path: "calendar", element: <CalendarPage /> },
      { path: "achievements", element: <AchievementsPage /> },
      { path: "games", element: <GamesPage /> },
      {
        path: "cloud-drive",
        element: <PageTitleLayout title="Cloud Drive" />,
        children: [{ path: "", element: <CloudDrivePage /> }],
      },
      { path: "discover-together", element: <DiscoverTogetherPage /> },
      { path: "grow-together", element: <GrowTogetherPage /> },
      { path: "cook-together", element: <CookTogetherPage /> },
      { path: "search", element: <SearchPage /> },
      { path: "notifications", element: <NotificationsPage /> },
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
        path: "dashboard/plate-full-planner",
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
        path: "dashboard/topics/:id/:slug/print",
        element: <TopicPrintPage />,
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
        path: "dashboard/accounts/profiles/:user/:lessonAssessment/print",
        element: <AccountsUserLessonAssessmentPrintPage />,
      },
      {
        path: "dashboard/recipes/:recipe/print",
        element: <RecipePrintPage />,
      },
      {
        path: "dashboard/activities/:activity/print",
        element: <ActivityPrintPage />,
      },
      {
        path: "dashboard/mealtime-moments/:mealtime-moment/print",
        element: <MealtimeMomentPrintPage />,
      },
      { path: "dashboard/calendar/print", element: <CalendarPrintPage /> },
      { path: "dashboard/reports/:slug/print", element: <ReportsPrintPage /> },
    ],
  },
  {
    path: "gamedebug",
    element: <GamePage />,
  },
  {
    path: "*",
    element: <h1>Route not found</h1>,
  },
]);
