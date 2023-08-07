import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary/errorBoundary";
import { PageTitleLayout } from "../components/Global/PageTitleLayout";
import { AuthLayout } from "../layouts/AuthLayout/authLayout";
import { DashboardLayout } from "../layouts/DashboardLayout/dashboardLayout";
import { ManageUsersLayout } from "../layouts/DashboardLayout/ManageUsersLayout";
import { getAuthenticatedUser } from "../lib/api/helpers/getAuthenticatedUser";
import { getFoodway } from "../lib/api/helpers/getFoodway";
import { getGroupInvitations } from "../lib/api/helpers/getGroupInvitations";
import { getGroups } from "../lib/api/helpers/getGroups";
import { redirectIfNotLoggedIn } from "../lib/api/helpers/redirectIfNotLoggedIn";
import { AccessibilityPage } from "./AccessibilityPage";
import { AccountsGroupsPage } from "./AccountsPage/Groups";
import { AccountsCreateGroupPage } from "./AccountsPage/Groups/CreateGroup";
import { AccountsEditGroupPage } from "./AccountsPage/Groups/EditGroup";
import { AccountsGroupPage } from "./AccountsPage/Groups/Group";
import { AccountsGroupCalendarPage } from "./AccountsPage/Groups/GroupCalendar";
import { AccountsGroupCalendarPrintPage } from "./AccountsPage/Groups/GroupCalendarPrint";
import {
  AccountsProfilesPage,
  profilesPageLoader,
} from "./AccountsPage/Profiles";
import { AccountsUserLessonAssessmentPage } from "./AccountsPage/Profiles/LessonAssessment";
import { AccountsUserLessonAssessmentPrintPage } from "./AccountsPage/Profiles/LessonAssessmentPrint";
import {
  AccountsUserProfilePage,
  profilePageLoader,
} from "./AccountsPage/Profiles/User";
import { AchievementsPage } from "./AchievementsPage";
import { ActivitiesPage } from "./ActivitiesBuilderPage";
import { ActivityPage } from "./ActivitiesBuilderPage/ActivityPage";
import { ActivityPrintPage } from "./ActivitiesBuilderPage/ActivityPage/Print";
import { ActivitiesCreatePage } from "./ActivitiesBuilderPage/Create";
import { ActivitiesPreviewPage } from "./ActivitiesBuilderPage/Create/Preview";
import { ForgotPasswordPage } from "./AuthPage/ForgotPage";
import { ResetPasswordPage } from "./AuthPage/ResetPasswordPage";
import { SecurityQuestionsPage } from "./AuthPage/SecurityQuestionsPage";
import { SignInPage } from "./AuthPage/SignInPage";
import { SignUpPage } from "./AuthPage/SignUpPage";
import { CalendarPage } from "./CalendarPage";
import { CalendarPrintPage } from "./CalendarPage/Print";
import { CloudDrivePage, cloudDrivePageLoader } from "./CloudDrivePage";
import { ContactUsPage } from "./ContactUsPage";
import { CookTogetherPage } from "./CookTogetherPage";
import { DiscoverTogetherPage } from "./DiscoverTogetherPage";
import { FoodwaysPage, foodwaysPageLoader } from "./FoodwaysPage";
import { CreateFoodwaysPage } from "./FoodwaysPage/Create";
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
import { MealtimeMomentsPage } from "./MealtimeMomentsPage";
import { CreateMealtimeMomentPage } from "./MealtimeMomentsPage/Create";
import { MealtimeMomentOverviewPage } from "./MealtimeMomentsPage/Overview";
import { MealtimeMomentsPreviewPage } from "./MealtimeMomentsPage/Preview";
import { MealtimeMomentPrintPage } from "./MealtimeMomentsPage/Print";

import { NotificationsPage } from "./NotificationsPage";
import { PrintPage } from "./PrintPage";
import { PrivacyPolicyPage } from "./PrivacyPolicyPage";
import { ProfilePage } from "./Profile";
import { ProfileAchievementsPage } from "./Profile/Achievements";
import { ProfileSettingsPage } from "./Profile/ProfileSettings";
import { RecipesPage } from "./RecipeBuilderPage";
import { RecipeCreatePage } from "./RecipeBuilderPage/Create";
import { RecipePreviewPage } from "./RecipeBuilderPage/Create/Preview";
import { RecipePage } from "./RecipeBuilderPage/RecipePage";
import { RecipePrintPage } from "./RecipeBuilderPage/RecipePage/Print";
import { RecipesCreateLessonAssessment } from "./RecipeBuilderPage/RecipesCreateLessonAssessment";
import { RecipesCreatePreviewLessonAssessment } from "./RecipeBuilderPage/RecipesCreatePreviewLessonAssessment";
import { RecipesEditLessonAssessment } from "./RecipeBuilderPage/RecipesEditLessonAssessment";
import { RecipesLessonAssessment } from "./RecipeBuilderPage/RecipesLessonAssessment";
import { ReportsPage } from "./ReportsPage";
import { ImpactReportingPage } from "./ReportsPage/ImpactReporting";
import { LessonAssessmentPage } from "./ReportsPage/LessonAssessment";
import { ReportsPrintPage } from "./ReportsPage/Print";
import { SearchPage } from "./SearchPage";
import { TCPage } from "./T&CPage";
import { TempHomePage } from "./TempHomePage";
import { TestContentPage } from "./TestContent";
import { TestLandingPage } from "./TestLandingPage";
import { Themes } from "./ThemeBuilderPage";
import { ThemeCreatePage } from "./ThemeBuilderPage/Create";
import { ThemePreviewPage } from "./ThemeBuilderPage/Create/Preview";
import { ThemePrintPage } from "./ThemeBuilderPage/Print";
import { ThemePage } from "./ThemeBuilderPage/ThemePage";

export const router = createBrowserRouter([
  { path: "/temp", element: <TempHomePage />, errorElement: <ErrorBoundary /> },
  {
    path: "/test-content",
    element: <TestContentPage />,
    errorElement: <ErrorBoundary />,
  },
  { path: "/landing", element: <TestLandingPage /> },
  {
    path: "/terms",
    element: <TCPage />,
  },
  {
    path: "/privacy",
    element: <PrivacyPolicyPage />,
  },
  {
    path: "/accessibility",
    element: <AccessibilityPage />,
  },
  {
    path: "/contact",
    element: <ContactUsPage />,
  },
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
    path: "/",
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
          <ManageUsersLayout>
            <Outlet />
          </ManageUsersLayout>
        ),
        loader: async () => {
          await redirectIfNotLoggedIn();

          return null;
        },
        children: [
          { path: "", element: <Navigate to="./profiles" /> },
          {
            path: "profiles",
            element: <AccountsProfilesPage />,
            loader: profilesPageLoader,
          },
          {
            path: "profiles/:user",
            element: <AccountsUserProfilePage />,
            loader: async ({ params }) => {
              if (params.id) return profilePageLoader(params.id);

              return null;
            },
          },
          {
            path: "profiles/:user/:lessonAssessment",
            element: <AccountsUserLessonAssessmentPage />,
          },
          {
            path: "profiles/:user/achievements",
            element: <ProfileAchievementsPage />,
          },
          {
            path: "groups",
            element: <AccountsGroupsPage />,
            loader: async () => {
              await redirectIfNotLoggedIn();

              const groups = await getGroups();
              const invitations = await getGroupInvitations();

              return { invitations, groups };
            },
          },
          { path: "groups/create", element: <AccountsCreateGroupPage /> },
          {
            path: "groups/:group",
            element: <AccountsGroupPage />,
            children: [],
          },
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
        loader: async () => {
          await redirectIfNotLoggedIn();

          return null;
        },
        children: [
          { path: "", element: <Navigate to="./lesson-assessment" /> },
          { path: "lesson-assessment", element: <LessonAssessmentPage /> },
          { path: "impact-reporting", element: <ImpactReportingPage /> },
        ],
      },
      {
        path: "group-organizer",
        element: <GroupOrganizerPage />,
        loader: async () => {
          await redirectIfNotLoggedIn();

          return null;
        },
      },
      {
        path: "plate-full-planner",
        element: (
          <PageTitleLayout
            title="Plate Full Planner"
            icon="topic-orange-outlined"
          />
        ),
        loader: async () => {
          await redirectIfNotLoggedIn();

          return null;
        },
        children: [
          { path: "", element: <MealPlannerPage /> },
          { path: ":recipe", element: <MealPlannerRecipePage /> },
          {
            path: ":recipe/:assessment",
            element: <MealPlannerRecipePage />,
          },
          { path: "edit", element: <MealPlannerPage /> },
          {
            path: "grocery-list",
            element: <MealPlannerGroceryPage />,
          },
        ],
      },
      {
        path: "themes",
        element: <PageTitleLayout title="Theme" icon="topic-orange-outlined" />,
        loader: async () => {
          // await redirectIfNotLoggedIn();

          return null;
        },
        children: [
          { path: "", element: <Themes /> },
          { path: "create", element: <ThemeCreatePage /> },
          { path: ":item", element: <ThemePage /> },
          { path: ":item/edit", element: <ThemeCreatePage /> },
          { path: "preview", element: <ThemePreviewPage /> },
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
        loader: async () => {
          await redirectIfNotLoggedIn();

          return null;
        },
        children: [
          { path: "", element: <MealtimeMomentsPage /> },
          { path: "create", element: <CreateMealtimeMomentPage /> },
          { path: "preview", element: <MealtimeMomentsPreviewPage /> },
          {
            path: ":id",
            children: [
              {
                path: "",
                element: <MealtimeMomentOverviewPage />,
                id: "mealtime-moment",
              },
              {
                path: "edit",
                element: <CreateMealtimeMomentPage />,
                // loader: async ({ params }) => {
                //   const mealtimeMoment = await getMealtimeMoment(params.id);

                //   return mealtimeMoment;
                // },
              },
              { path: "preview", element: <MealtimeMomentsPreviewPage /> },
            ],
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
        loader: async () => {
          await redirectIfNotLoggedIn();

          return null;
        },
        children: [
          { path: "", element: <ActivitiesPage /> },
          { path: "create", element: <ActivitiesCreatePage /> },
          { path: "preview", element: <ActivitiesPreviewPage /> },
          { path: ":item", element: <ActivityPage /> },
          { path: ":item/edit", element: <ActivitiesCreatePage /> },
        ],
      },
      {
        path: "foodways",
        element: (
          <PageTitleLayout title="Foodways" icon="foodways-orange-outlined" />
        ),
        loader: async () => {
          await redirectIfNotLoggedIn();

          return null;
        },
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
            path: "preview",
            element: <FoodwaysPreviewPage />,
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
                element: <CreateFoodwaysPage />,
                loader: async ({ params }) => {
                  const foodway = await getFoodway(params.id);

                  return foodway;
                },
              },
            ],
          },
        ],
      },
      {
        path: "recipes",
        element: (
          <PageTitleLayout title="Recipes" icon="Recipes-orange-outlined" />
        ),
        loader: async () => {
          await redirectIfNotLoggedIn();

          return null;
        },
        children: [
          { path: "", element: <RecipesPage /> },
          { path: "create", element: <RecipeCreatePage /> },
          {
            path: "preview",
            element: <RecipePreviewPage />,
          },
          { path: ":item", element: <RecipePage /> },
          { path: ":item/edit", element: <RecipeCreatePage /> },
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
        loader: async () => {
          await redirectIfNotLoggedIn();

          return null;
        },
        children: [
          { path: "", element: <ProfilePage /> },
          { path: "settings", element: <ProfileSettingsPage /> },
          { path: "achievements", element: <ProfileAchievementsPage /> },
        ],
      },
      {
        path: "calendar",
        element: <CalendarPage />,
        loader: async () => {
          await redirectIfNotLoggedIn();

          return null;
        },
      },
      {
        path: "achievements",
        element: <AchievementsPage />,
        loader: async () => {
          await redirectIfNotLoggedIn();

          return null;
        },
      },
      { path: "games", element: <GamesPage /> },
      {
        path: "cloud-drive",
        element: (
          <PageTitleLayout title="Cloud Drive" icon="cloud-orange-outlined" />
        ),
        children: [
          {
            path: "",
            element: <CloudDrivePage />,
            loader: cloudDrivePageLoader,
          },
        ],
        loader: async () => {
          await redirectIfNotLoggedIn();

          return null;
        },
      },
      {
        path: "discover-together",
        element: <PageTitleLayout title="Discover Together" />,
        children: [{ path: "", element: <DiscoverTogetherPage /> }],
      },
      {
        path: "grow-together",
        element: <PageTitleLayout title="Grow Together" />,
        children: [{ path: "", element: <GrowTogetherPage /> }],
      },
      {
        path: "cook-together",
        element: <PageTitleLayout title="Cook Together" />,
        children: [{ path: "", element: <CookTogetherPage /> }],
      },
      { path: "search", element: <SearchPage /> },
      {
        path: "notifications",
        element: (
          <PageTitleLayout
            title="Notifications"
            icon="notifications-orange-outlined"
          />
        ),
        loader: async () => {
          await redirectIfNotLoggedIn();

          return null;
        },
        children: [{ path: "", element: <NotificationsPage /> }],
      },
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
        path: "plate-full-planner",
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
        path: "foodways",
        children: [
          {
            path: ":foodway/:slide/print",
            element: <FoodwaysPrintPage />,
          },
        ],
      },
      {
        path: "accounts/groups/:group/calendar/print",
        element: <AccountsGroupCalendarPrintPage />,
      },
      {
        path: "accounts/profiles/:user/:lessonAssessment/print",
        element: <AccountsUserLessonAssessmentPrintPage />,
      },
      {
        path: "recipes/:item/:slide/print",
        element: <RecipePrintPage />,
      },
      {
        path: "activities/:item/:slide/print",
        element: <ActivityPrintPage />,
      },
      {
        path: "themes/:slug/print",
        element: <ThemePrintPage />,
      },
      {
        path: "mealtime-moments/:id/print",
        element: <MealtimeMomentPrintPage />,
      },
      { path: "calendar/print", element: <CalendarPrintPage /> },
      { path: "reports/:slug/print", element: <ReportsPrintPage /> },
    ],
  },
  {
    path: "gamedebug",
    element: <GamePage />,
  },
  {
    path: "game",
    element: <GamePage />,
  },
  {
    path: "*",
    element: <h1>Route not found</h1>,
  },
]);
