import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { usePathName } from "../../../hooks/usePathName";
import { MENUS } from "../../../pages/consts";
import Button from "../../Button";
import { Typography } from "../Typography";

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
      <div>
        <div className="logo-container">
          <Link to="/">
            <img src="/images/avatars/avatar.svg" alt="avatar" />
          </Link>
        </div>
        <div className="item-container">
          {MENUS.map((menu) => (
            <Style.MenuItem>
              {menu.subMenus ? (
                <>
                  <div className="menu-item">
                    <img
                      src={`/images/icons/${menu.icon}.svg`}
                      className="menu-icon"
                      alt={menu.label}
                    />
                    <Typography
                      variant="title"
                      weight="semi-bold"
                      size="large"
                      className="menu-content"
                    >
                      {menu.label}
                    </Typography>
                    <img
                      src="/images/icons/arrow-up.svg"
                      className="arrow"
                      alt={menu.label}
                    />
                  </div>
                  <div className="drop-down">
                    {menu.subMenus.map((subMenu) => (
                      <Link
                        to={subMenu.to}
                        className="menu-item"
                        key={subMenu.label}
                      >
                        <img
                          src={`/images/icons/${subMenu.icon}.svg`}
                          alt={subMenu.label}
                        />
                        <Typography
                          variant="title"
                          weight="semi-bold"
                          size="large"
                          className="menu-content"
                        >
                          {menu.label}
                        </Typography>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link to={menu.to} className="menu-item" key={menu.label}>
                  <img
                    src={`/images/icons/${menu.icon}.svg`}
                    className="menu-icon"
                    alt={menu.label}
                  />
                  <Typography
                    variant="title"
                    weight="semi-bold"
                    size="large"
                    className="menu-content"
                  >
                    {menu.label}
                  </Typography>
                </Link>
              )}
            </Style.MenuItem>
          ))}
        </div>
      </div>
      <Button variant="orange" size="small" className="btn-logout">
        <Typography>Logout</Typography>
        <img alt="logout" src="/images/icons/sign-out.svg" />
      </Button>
    </Style.MenuContainer>
  );
};

const Style = {
  MenuItem: styled.div`
    .menu-item {
      display: flex;
      color: white;
      padding: 0 36px;
      cursor: pointer;

      .menu-icon {
        margin-right: var(--gutter-grid);
      }

      .menu-content {
        font-size: 22px;
      }

      .arrow {
        margin-left: auto;
      }
    }
  `,
  MenuContainer: styled.div`
    z-index: 100;
    width: var(--dashboard-menu-width-large);
    height: 100vh;
    background: linear-gradient(-90deg, #4cde96, #20ad67);
    border-radius: 0 32px 32px 0;
    padding: 36px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 3px 0px 13px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;

    .btn-logout {
      position: relative;
      height: 48px;
      margin-left: calc(2 * var(--gutter-grid));
      width: 124px;
      img {
        display: none;
      }
      div {
        display: block;
      }
    }

    @media screen and (max-width: 1920px) {
      width: var(--dashboard-menu-width-medium);

      .btn-logout {
        margin-left: 44px;
        transition: all 0.2s ease-in-out;
        width: 48px;
        div {
          display: none;
        }
        img {
          display: block;
        }
      }
      .menu-item {
        padding: 0 56px;
        transition: all 0.5s ease-in-out;

        .arrow {
          display: none;
        }
        .menu-content {
          transition: all 0.1s ease-in-out;
          font-size: 0;
        }
      }

      &:hover {
        width: var(--dashboard-menu-width-large);
        transition: width 0.3s ease-in-out;

        .btn-logout {
          margin-left: calc(2 * var(--gutter-grid));
          width: 124px;
          transition: all 0.2s ease-in-out;

          img {
            display: none;
          }
          div {
            display: block;
          }
        }

        .menu-item {
          padding: 0 36px;
          transition: all 0.1s ease-in-out;

          .arrow {
            margin-left: auto;
            display: block;
          }
        }

        .menu-content {
          transition: all 0.4s ease-in-out;
          font-size: 22px;
        }
      }
      transition: width 0.3s ease-in-out;
    }

    .logo-container {
      padding-left: 30px;
    }

    .item-container {
      display: flex;
      flex-direction: column;
      gap: 40px;

      .drop-down {
        display: none;

        &.open {
          display: flex;
          flex-direction: column;
        }
      }
    }
  `,

  SubMenuItem: styled.div``,
};
