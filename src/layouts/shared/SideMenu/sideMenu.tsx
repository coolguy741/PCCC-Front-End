import Cookies from "js-cookie";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/Button";
import { MENUS, STORAGE_KEY_JWT } from "../../../pages/consts";
import { useUserStore } from "../../../stores/userStore";

type MenuState = {
  "user-tools": boolean;
  "content-builder": boolean;
};

export function SideMenu() {
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState({
    "user-tools": false,
    "content-builder": false,
  });

  const handleMenuClick = (menu: string) => {
    setMenuOpen({
      ...menuOpen,
      [menu]: !menuOpen[menu as keyof MenuState],
    });
  };

  const logoutHandler = () => {
    Cookies.remove(STORAGE_KEY_JWT);
    setUser(null);

    navigate("/");
  };

  return (
    <Style.MenuContainer>
      <div>
        <Link to="/">
          <div className="logo-container">
            <img src="/images/avatars/avatar.svg" alt="avatar" />
            <div className="username">{user?.username}</div>
          </div>
        </Link>
      </div>
      <div className="item-container">
        {MENUS.map((menu) => (
          <Style.MenuItem key={`menu-${menu.to}`}>
            {menu.subMenus ? (
              <>
                <Style.SubMenuItem
                  className="menu-item"
                  open={menuOpen[menu.to as keyof MenuState]}
                  onClick={() => handleMenuClick(menu.to)}
                >
                  <img
                    src={`/images/icons/${menu.icon}.svg`}
                    className="menu-icon"
                    alt={menu.label}
                  />
                  <div className="menu-content">{menu.label}</div>
                  <img
                    src="/images/icons/arrow-up.svg"
                    className="arrow"
                    alt={menu.label}
                  />
                </Style.SubMenuItem>
                <Style.DropDown
                  open={menuOpen[menu.to as keyof MenuState]}
                  count={menu.subMenus.length}
                  className="drop-down"
                >
                  {menu.subMenus.map((subMenu) => (
                    <Link
                      to={subMenu.to}
                      className="menu-item"
                      key={subMenu.label}
                    >
                      <img
                        src={`/images/icons/${subMenu.icon}.svg`}
                        alt={subMenu.label}
                        className="menu-icon"
                      />
                      <div className="menu-content">{subMenu.label}</div>
                    </Link>
                  ))}
                </Style.DropDown>
              </>
            ) : (
              <Link to={menu.to} className="menu-item" key={menu.label}>
                <img
                  src={`/images/icons/${menu.icon}.svg`}
                  className="menu-icon"
                  alt={menu.label}
                />
                <div className="menu-content">{menu.label}</div>
              </Link>
            )}
          </Style.MenuItem>
        ))}
      </div>
      <Button
        variant="orange"
        size="small"
        className="btn-logout"
        onClick={logoutHandler}
      >
        <div className="logout-content">Logout</div>
        <img alt="logout" src="/images/icons/sign-out.svg" />
      </Button>
    </Style.MenuContainer>
  );
}

const Style = {
  MenuItem: styled.div`
    color: var(--white);

    .menu-item {
      display: flex;
      padding: 20px 36px;
      cursor: pointer;

      .menu-icon {
        margin-right: var(--gutter-grid);
      }

      .arrow {
        margin-left: auto;
      }

      .menu-content {
        line-height: 24px;
        font-weight: 600;
        font-size: 19px;
      }
    }
  `,
  DropDown: styled.div.attrs((props: { open: boolean; count: number }) => ({
    open: props.open,
    count: props.count,
  }))`
    height: ${({ open, count }) => (open ? `${64 * count}px` : 0)};
    transition: height 0.3s ease-in-out;
    overflow: hidden;
  `,
  SubMenuItem: styled.div.attrs((props: { open: boolean }) => ({
    open: props.open,
  }))`
    & .arrow {
      transition: rotate 0.2s ease-in-out;
      transform: rotate(${({ open }) => (open ? "0deg" : "-180deg")});
    }
  `,
  MenuContainer: styled.aside`
    z-index: 100;
    position: fixed;
    overflow-y: auto;
    width: var(--dashboard-menu-width-medium);
    min-height: 100vh;
    height: 100%;
    background: linear-gradient(-90deg, var(--green-400), var(--green-600));
    border-radius: 0 32px 32px 0;
    padding: 36px 0;
    display: flex;
    flex-direction: column;
    filter: drop-shadow(6px 0px 16px rgba(0, 0, 0, 0.1));

    .username {
      line-height: 29px;
      font-weight: 700;
      font-size: 24px;
      transition: all 0.2s ease-in-out;
    }

    .btn-logout {
      position: relative;
      height: 48px;
      min-height: 48px;
      margin-top: 40px;
      margin-left: calc(2 * var(--gutter-grid));
      width: 124px;

      img {
        display: none;
      }

      div.logout-content {
        display: block;
      }
    }

    .logo-container {
      padding-left: 20px;
      display: flex;
      color: white;
      align-items: center;
      margin-bottom: 42px;
    }

    .drop-down {
      padding-left: 40px;
    }

    @media screen {
      width: var(--dashboard-menu-width-medium);

      .drop-down {
        padding-left: 0;
      }

      .btn-logout {
        margin-left: 44px;
        transition: all 0.2s ease-in-out;
        width: 48px;

        div.logout-content {
          display: none;
        }

        img {
          display: block;
        }
      }

      .menu-item {
        padding: 20px 56px;
        transition: padding 0.4s ease-in-out;

        .arrow {
          display: none;
        }

        .menu-content {
          transition: all 0.2s ease-in-out;
          font-size: 0;
        }
      }

      .username {
        font-size: 0;
      }

      &:hover {
        width: var(--dashboard-menu-width-large);
        transition: width 0.1s ease-in-out;

        .drop-down {
          padding-left: 40px;
        }

        .btn-logout {
          margin-left: calc(2 * var(--gutter-grid));
          width: 124px;
          transition: all 0.2s ease-in-out;

          img {
            display: none;
          }

          div.logout-content {
            display: block;
          }
        }

        .menu-item {
          padding: 20px 36px;
          transition: all 0.1s ease-in-out;

          .arrow {
            margin-left: auto;
            display: block;
          }

          .menu-content {
            transition: all 0.3s ease-in-out;
            font-size: 19px;
          }
        }

        .username {
          font-size: 24px;
        }
      }

      .logo-container {
        margin-bottom: 22px;
      }

      transition: width 0.2s ease-in-out;
    }

    .item-container {
      display: flex;
      margin-top: 10px;
      margin-bottom: auto;
      overflow-y: auto;
      flex-direction: column;
    }
  `,
};
