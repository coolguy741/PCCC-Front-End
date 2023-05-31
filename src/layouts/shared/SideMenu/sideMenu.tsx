import Cookies from "js-cookie";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/Button";
import { avatars_data } from "../../../lib/avatars/data";
import { MENUS, STORAGE_KEY_JWT } from "../../../pages/consts";
import { useUserStore } from "../../../stores/userStore";
import {
  convertToRelativeUnit as conv,
  convertToRelativeUnit,
} from "../../../styles/helpers/convertToRelativeUnits";

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
        <Link to="profile">
          <div className="logo-container">
            {avatars_data[0].icon({})}
            <div className="username">
              <div>{user?.username}</div>
            </div>
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
  DropDown: styled.div.attrs((props: { open: boolean; count: number }) => ({
    open: props.open,
    count: props.count,
  }))`
    height: ${({ open, count }) => (open ? `${conv(64 * count, "vh")}` : 0)};
    padding-top: ${({ open }) => (open ? `${conv(32, "vh")}` : 0)};
    transition: height 0.3s ease-in-out, padding-top 0.3s ease-in-out;
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
  MenuItem: styled.div`
    color: var(--white);

    .menu-item {
      display: flex;
      align-items: center;
      cursor: pointer;

      .menu-icon {
        width: ${conv(32, "vh")};
        height: ${conv(32, "vh")};
      }

      .arrow {
        width: ${conv(32, "vh")};
        display: none;
      }

      .menu-content {
        display: none;
      }
    }
  `,
  MenuContainer: styled.aside`
    z-index: 100;
    position: fixed;
    width: var(--dashboard-menu-width-medium);
    height: 100vh;
    background: linear-gradient(-90deg, var(--green-400), var(--green-600));
    border-radius: 0 ${conv(32, "vh")} ${conv(32, "vh")} 0;
    filter: drop-shadow(6px 0px 16px rgba(0, 0, 0, 0.1));
    padding: ${conv(20, "vh")} ${conv(36, "vh")};
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: width 0.2s ease-in-out;
    overflow: hidden;

    .logo-container {
      display: flex;
      color: white;
      justify-content: center;
      align-items: center;
      margin-bottom: ${conv(48, "vh")};
      margin-top: ${conv(48, "vh")};

      svg {
        width: ${convertToRelativeUnit(80, "vh")};
        height: ${convertToRelativeUnit(80, "vh")};
      }
    }

    .btn-logout {
      position: relative;
      height: ${conv(64, "vh")};
      transition: all 0.2s ease-in-out;
      width: ${conv(64, "vh")};

      div.logout-content {
        font-size: ${conv(24, "vh")};
        display: none;
      }

      img {
        width: ${conv(28, "vh")};
        display: block;
      }
    }

    .drop-down {
      display: flex;
      flex-direction: column;
      gap: ${conv(32, "vh")};
    }

    .username {
      font-size: 0;
    }

    &:hover {
      width: ${conv(380, "vh")};
      transition: width 0.2s ease-in-out;

      .logo-container {
        align-items: center;
        justify-content: start;
      }

      .username {
        padding-left: ${conv(24, "vh")};
        line-height: ${conv(32, "vh")};
        font-weight: 700;
        font-size: ${conv(28, "vh")};
        transition: all 0.2s ease-in-out;
      }

      .drop-down {
        padding-left: ${conv(48, "vh")};
      }

      .btn-logout {
        align-self: start;
        width: ${conv(150, "vh")};
        transition: all 0.2s ease-in-out;

        img {
          display: none;
        }

        div.logout-content {
          display: block;
        }
      }

      .menu-item {
        transition: all 0.1s ease-in-out;
        justify-content: center;
        text-decoration: none;

        .arrow {
          margin-left: auto;
          display: block;
        }

        .menu-content {
          display: block;
          flex-grow: 1;
          margin-left: ${conv(20, "vh")};
          font-weight: 600;
          font-size: ${conv(24, "vh")};
          line-height: ${conv(32, "vh")};
          white-space: nowrap;
          transition: all 0.3s ease-in-out;
        }
      }

      .item-container {
        align-items: start;
      }
    }

    .item-container {
      flex-grow: 1;
      margin-bottom: auto;
      display: flex;
      flex-direction: column;
      gap: ${conv(36, "vh")};
      align-items: center;
    }
  `,
};
