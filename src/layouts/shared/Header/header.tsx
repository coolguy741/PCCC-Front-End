import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../../../components/Button";
import { Input } from "../../../components/Global/Input";
import { LanguageToggle } from "../../../components/Global/LanguageToggle";
import { Search } from "../../../components/Icons";
import { useSearchResultsStore } from "../../../stores/searchResultsStore";
import { useUserStore } from "../../../stores/userStore";

const fields = [
  "all",
  "topics",
  "activities",
  "recipes",
  "mealtime-moments",
  "foodways",
];

export const Header: React.FC = () => {
  const [field, setField] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUserStore();
  const navigate = useNavigate();

  const { searchKey, handleChangeSearchKey, addResults } =
    useSearchResultsStore();

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addResults();
    navigate("/dashboard/search");
  };

  const handleSetField = (field: string) => {
    setField(field);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Style.Container userAvailable={!!user}>
      <div className="header-left">
        <img
          className="header-logo"
          src="/images/homepage/logo.svg"
          alt="logo"
        />
        {!!user && (
          <form onSubmit={handleSearch}>
            <Style.Dropdown isOpen={isOpen}>
              {isOpen && <div className="dropdown" onClick={handleClose} />}
              <button
                className="dropdown-trigger"
                onClick={() => setIsOpen(true)}
                type="button"
              >
                <p>{field.replaceAll("-", " ")} </p>
                <img src="/images/icons/arrow-down.svg" alt="arrow down" />
              </button>
              <Style.DropdownMenu
                animate={isOpen ? "open" : "close"}
                initial={{
                  height: 0,
                  overflow: "hidden",
                  opacity: 0,
                  padding: 0,
                }}
                variants={{
                  open: {
                    height: "auto",
                    padding: "12px 0",
                    opacity: 1,
                  },
                  closed: { height: 0, padding: "0", opacity: 0 },
                }}
              >
                {fields.map((currentField, index) => {
                  return (
                    <Style.DropdownItem
                      key={`field-${index}`}
                      id={currentField}
                      onClick={() => handleSetField(currentField)}
                    >
                      <div>
                        <Input type="radio" checked={field === currentField} />
                      </div>
                      <div>{currentField.replaceAll("-", " ")}</div>
                    </Style.DropdownItem>
                  );
                })}
              </Style.DropdownMenu>
            </Style.Dropdown>
            <input
              type="text"
              placeholder="Search"
              name="search"
              className="search-key"
              value={searchKey}
              onChange={handleChangeSearchKey}
            />
            <Search className="search" />
          </form>
        )}
      </div>
      <div className="header-right">
        {!!user && (
          <Button
            variant="green"
            size="medium"
            className="header-alert"
            onClick={() => navigate("/dashboard/notifications")}
          >
            <img alt="logout" src="/images/icons/alert.svg" />
          </Button>
        )}
        <div className="header-toggle">
          <LanguageToggle />
        </div>
        {!user && (
          <>
            <Button variant="ghost" to="/signin" size="small">
              Log in
            </Button>
            <Button variant="orange" to="/signup" size="small">
              Sign up
            </Button>
          </>
        )}
        <img
          className="header-powerfull-image"
          src="/images/homepage/power-full-kids.svg"
          alt="power full kids"
        />
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.header<{ userAvailable: boolean }>`
    position: fixed;
    top: 0;
    width: calc((100% + 32px) - var(--dashboard-menu-width-medium));
    right: 0;
    height: 7vh;
    padding: 1.66vh 32px 1.66vh 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
    backdrop-filter: blur(5px);
    gap: 2rem;

    .header-left,
    .header-right {
      display: flex;
      height: 100%;
      display: flex;
      align-items: center;
    }

    .header-left {
      width: ${({ userAvailable }) => (userAvailable ? "68%" : "30%")};

      .header-logo {
        height: 100%;
        width: max-content;
      }

      form {
        display: flex;
        width: 90%;
        position: relative;
        height: 100%;
        align-items: center;
        margin-left: 2.5%;

        & > input {
          width: 100%;
          border-radius: 0px 8px 8px 0px;
          background: rgba(255, 255, 255, 0.5);
          box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
          height: 100%;
          padding: 0 16px;

          ::placeholder {
            font-size: 16px;
            line-height: 20px;
            color: var(--neutral-500);
          }
        }

        svg.search {
          position: absolute;
          right: 10px;
        }
      }
    }

    .header-right {
      width: ${({ userAvailable }) => (userAvailable ? "32%" : "60%")};
      justify-content: ${({ userAvailable }) =>
        userAvailable ? "space-between" : "flex-end"};

      .header-alert {
        height: 100%;
        aspect-ratio: 1 / 1;
      }

      .header-powerfull-image {
        height: 100%;
        width: max-content;
        margin-left: 2.5%;
      }

      .header-toggle {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  `,
  Dropdown: styled.div.attrs((props: { isOpen: boolean }) => ({
    isOpen: props.isOpen || false,
  }))`
    position: relative;
    background: linear-gradient(var(--green-400), var(--green-600));
    z-index: 5;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border-radius: 8px 0px 0px 8px;
    height: 100%;
    width: max-content;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    .dropdown {
      position: fixed;
      z-index: 10;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .dropdown-trigger {
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: capitalize;

      img {
        transition: all 0.2s ease-in-out;
        height: 100%;
      }

      p {
        white-space: nowrap;
        margin-right: 4px;
      }

      ${({ isOpen }) => isOpen && "img { transform: rotate(-180deg);}"};
    }
  `,
  DropdownMenu: styled(motion.div)`
    position: absolute;
    top: 100%;
    left: 0;
    background: #ffffff50;
    z-index: 20;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.1));
  `,
  DropdownItem: styled.div`
    text-transform: capitalize;
    padding: 8px 16px;
    position: relative;
    display: flex;
    gap: 10px;

    & input {
      border: 2px solid var(--blue-500);
    }

    & div {
      color: var(--neutral-700);
      white-space: nowrap;
    }
  `,
};
