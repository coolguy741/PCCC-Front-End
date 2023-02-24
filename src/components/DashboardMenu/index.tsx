import { Link } from "react-router-dom";
import styled from "styled-components";
import { usePathName } from "../../hooks/usePathName";
import { Logo } from "../Logo";

export const DashboardMenu = () => {
  const {
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
  } = usePathName();

  return (
    <MenuContainer>
      <Logo width={120} />
      <div className="item-container">
        <Link to="/dashboard">
          <div className={`item ${isDashboard && "active"}`}>
            <img src="/images/student-icon.svg" width="25" />
            Student Profiles
          </div>
        </Link>
        <Link to="reports">
          <div className={`item ${isReports && "active"}`}>
            <img src="/images/reports-icon.svg" width="25" />
            Reports
          </div>
        </Link>
        <Link to="group-organizer">
          <div className={`item ${isGroupOrganizer && "active"}`}>
            <img src="/images/group-icon.svg" width="25" />
            Group Organizer
          </div>
        </Link>
        <Link to="meal-planner">
          <div className={`item ${isMealPlanner && "active"}`}>
            <img src="/images/meal-icon.svg" width="25" />
            Meal Planner
          </div>
        </Link>
        <Link to="topic-editor">
          <div className={`item ${isTopicEditor && "active"}`}>
            <img src="/images/topic-icon.svg" width="25" />
            Topic Editor
          </div>
        </Link>
        <Link to="discovery-editor">
          <div className={`item ${isDiscoveryEditor && "active"}`}>
            <img src="/images/discovery-icon.svg" width="25" />
            Discovery Editor
          </div>
        </Link>
        <Link to="activities-builder">
          <div className={`item ${isActivitiesBuilder && "active"}`}>
            <img src="/images/activities-icon.svg" width="25" />
            Activities Builder
          </div>
        </Link>
        <Link to="foodways-editor">
          <div className={`item ${isFoodwaysEditor && "active"}`}>
            <img src="/images/foodways-icon.svg" width="25" />
            Foodways Editor
          </div>
        </Link>
        <Link to="recipe-builder">
          <div className={`item ${isRecipeBuilder && "active"}`}>
            <img src="/images/student-icon.svg" width="25" />
            Recipe Builder
          </div>
        </Link>
        <Link to="calendar">
          <div className={`item ${isCalendar && "active"}`}>
            <img src="/images/calendar-icon.svg" width="25" />
            Calendar
          </div>
        </Link>
      </div>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  width: 280px;
  height: 100vh;
  background-color: var(--yellow);
  border-radius: 0 35px 35px 0;
  padding: 30px 0 30px 30px;
  display: flex;
  flex-direction: column;
  gap: 100px;

  .item-container {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .item {
      font-size: 1.3rem;
      font-weight: 600;
      color: #fff;
      display: flex;
      gap: 20px;
      align-items: center;
      padding: 15px 0;
      border-radius: 20px 0 0 20px;
      transition: 0.3s all ease-in-out;
      padding-left: 20px;

      &.active {
        background-color: #fff;
        color: var(--yellow);
        transition: 0.3s all ease-in-out;
      }
    }
  }
`;
