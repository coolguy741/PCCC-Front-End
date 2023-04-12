import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { usePathName } from "../../../hooks/usePathName";
import { Logo } from "../Logo";

export const DashboardMenu = () => {
  const [userToolsOpen, setUserToolsOpen] = useState(false);
  const [curriculumOpen, setCurriculumOpen] = useState(false);
  const {
    isDashboard,
    isAccounts,
    isReports,
    isGroupOrganizer,
    isMealPlanner,
    isTopicEditor,
    isMealTimeMoments,
    isActivitiesBuilder,
    isAchievements,
    isFoodwaysEditor,
    isRecipeBuilder,
    isCalendar,
    isGames,
    isCloudDrive,
  } = usePathName();

  return (
    <Style.MenuContainer>
      <div className="logo-container">
        <Link to="/">
          <Logo height={55} />
        </Link>
      </div>
      <div className="item-container">
        <Link to="/dashboard">
          <div className={`item ${isDashboard && "active"}`}>Home</div>
        </Link>
        <Link to="accounts">
          <div className={`item ${isAccounts && "active"}`}>Accounts</div>
        </Link>
        <Link to="achievements">
          <div className={`item ${isAchievements && "active"}`}>
            Achievements
          </div>
        </Link>
        <div
          className={`item`}
          onClick={() => setUserToolsOpen(!userToolsOpen)}
        >
          User Tools
        </div>
        <div className={`drop-down ${userToolsOpen && "open"}`}>
          <Link to="calendar">
            <div className={`item ${isCalendar && "active"}`}>Calendar</div>
          </Link>
          <Link to="meal-planner">
            <div className={`item ${isMealPlanner && "active"}`}>
              Meal Planner
            </div>
          </Link>
        </div>
        <div
          className={`item`}
          onClick={() => setCurriculumOpen(!curriculumOpen)}
        >
          Curriculum
        </div>
        <div className={`drop-down ${curriculumOpen && "open"}`}>
          <Link to="topics">
            <div className={`item ${isTopicEditor && "active"}`}>Topics</div>
          </Link>
          <Link to="activities">
            <div className={`item ${isActivitiesBuilder && "active"}`}>
              Activities
            </div>
          </Link>
          <Link to="recipes">
            <div className={`item ${isRecipeBuilder && "active"}`}>Recipes</div>
          </Link>
          <Link to="mealtime-moments">
            <div className={`item ${isMealTimeMoments && "active"}`}>
              MealTime Moments
            </div>
          </Link>
          <Link to="foodways">
            <div className={`item ${isFoodwaysEditor && "active"}`}>
              Foodways
            </div>
          </Link>
        </div>
        <Link to="games">
          <div className={`item ${isGames && "active"}`}>Games</div>
        </Link>
        <Link to="reports">
          <div className={`item ${isReports && "active"}`}>Reports</div>
        </Link>
        <Link to="cloud-drive">
          <div className={`item ${isCloudDrive && "active"}`}>Cloud Drive</div>
        </Link>
      </div>
    </Style.MenuContainer>
  );
};

const Style = {
  MenuContainer: styled.div`
    position: fixed;
    width: 350px;
    height: 100vh;
    background-color: var(--yellow);
    border-radius: 0 35px 35px 0;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    gap: 100px;
    box-shadow: 3px 0px 13px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;

    .logo-container {
      padding-left: 30px;
    }

    .item-container {
      display: flex;
      flex-direction: column;
      gap: 5px;

      .drop-down {
        display: none;

        &.open {
          display: flex;
          flex-direction: column;
        }

        .item {
          padding-left: 3rem;
        }
      }

      .item {
        font-size: 1.3rem;
        font-weight: 600;
        color: #fff;
        display: flex;
        gap: 20px;
        align-items: center;
        padding: 5px 0;
        transition: 0.3s all ease-in-out;
        padding-left: 30px;
        cursor: pointer;
        user-select: none;

        &.active {
          background-color: var(--orange);
          transition: 0.3s all ease-in-out;
        }
      }
    }
  `,
};
