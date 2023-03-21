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
import { Children } from "react";
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
      { 
        path: "accounts", 
        element: (
          <AccountsPage>
            <Outlet />
          </AccountsPage>
        ),
        children:[
          { path: "profiles", element: <AccountsProfilesPage/>},
          { path: 'profiles/:user', element: <AccountsUserProfilePage /> },
          { path: 'profiles/:user/:lessonAssessment', element: <AccountsUserLessonAssessmentPage /> },
          { path: 'profiles/:user/:lessonAssessment/print', element: <AccountsUserLessonAssessmentPrintPage /> },
          { path: "groups", element: <AccountsGroupsPage/> },
          { path: 'groups/create', element: <AccountsCreateGroupPage /> },
          { path: 'groups/:group', element: <AccountsGroupPage /> },
          { path: 'groups/:group/edit', element: <AccountsEditGroupPage /> },
          { path: 'groups/:group/calendar', element: <AccountsGroupCalendarPage /> },
          { path: 'groups/:group/calendar/print', element: <AccountsGroupCalendarPrintPage /> },
        ]
      },
      { path: "reports", element: <ReportsPage /> },
      { path: "group-organizer", element: <GroupOrganizerPage /> },
      { path: "meal-planner", element: <MealPlannerPage /> },
      { path: "topics", element: <TopicEditorPage /> },
      { path: "daily-discovery", element: <DiscoveryEditorPage /> },
      { path: "activities", element: <ActivitiesBuilderPage /> },
      { path: "foodways", element: <FoodwaysPage /> },
      { path: "recipe-builder", element: <RecipeBuilderPage /> },
      { path: "calendar", element: <CalendarPage /> },
      { path: "achievements", element: <AchievementsPage /> },
    ],
  },
]);
