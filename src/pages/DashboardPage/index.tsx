import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DashboardMenu } from "../../components/Global/DashboardMenu";
import { useSearchResultsStore } from "../../stores/searchResultsStore";

interface DashboardPageProps {
  children: JSX.Element;
}

const fields = [
  "all",
  "topics",
  "activities",
  "recipes",
  "mealtime-moments",
  "foodways",
];

export const DashboardPage = ({ children }: DashboardPageProps) => {
  const [field, setField] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
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
    <Style.PageContainer>
      <DashboardMenu />
      <div className="main-container">
        <div className="main-container__header">
          <img
            src="/images/powerfullkids.svg"
            alt="Powerfull Kids"
            width="320"
          />
          <form className="search" onSubmit={handleSearch}>
            <div className="flex">
              <Style.Dropdown>
                {isOpen && <div className="dropdown" onClick={handleClose} />}
                <div
                  className="dropdown-trigger"
                  onClick={() => setIsOpen(true)}
                >
                  {field.replaceAll("-", " ")} <span>&lt;</span>
                </div>
                <Style.DropdownMenu isOpen={isOpen}>
                  {fields.map((currentField, index) => {
                    return (
                      <Style.DropdownItem
                        key={`field-${index}`}
                        id={currentField}
                        onClick={() => handleSetField(currentField)}
                      >
                        <div
                          className={`${
                            field === currentField ? "checked" : ""
                          }`}
                        >
                          {currentField.replaceAll("-", " ")}
                        </div>
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
            </div>
            <img
              src="/images/notifications.svg"
              alt="Notifications"
              width="25"
            />
          </form>
          <img src="/images/mock-avatar.svg" alt="Avatar" width="50" />
        </div>
        <div className="__content">{children}</div>
      </div>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;

    .main-container {
      padding: 30px;
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-left: 350px;

      &__header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 50px;

        .search {
          width: 100%;
          display: flex;
          gap: 20px;
          & > div {
            width: 100%;

            select {
              width: 100px;
              outline: none;
              border: none;
              &:focus,
              &:active {
                outline: none;
                border: none;
              }
            }
            input.search-key {
              width: 100%;
              border: none;
              padding: 10px 20px;
              border-top-right-radius: 8px;
              border-bottom-right-radius: 8px;
              &:focus {
                outline: none;
              }
            }
          }
        }
      }

      .__content {
        height: 100%;
      }
    }
  `,
  Dropdown: styled.div`
    position: relative;
    background: white;
    width: 300px;
    padding: 10px 20px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

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
      justify-content: space-between;
      text-transform: capitalize;
      span {
        transform: rotate(-90deg);
      }
    }
  `,
  DropdownMenu: styled.div.attrs((props: { isOpen: boolean }) => ({
    isOpen: props.isOpen || false,
  }))`
    position: absolute;
    top: 100%;
    z-index: 20;
    background: white;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  `,
  DropdownItem: styled.div`
    padding: 10px 40px;
    text-transform: capitalize;
    position: relative;
    & > div {
      white-space: nowrap;
      &.checked:before {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translate(0, -50%);
        background: #396bdb;
        color: white;
        padding: 0 4px;
        content: "✓";
        width: 20px;
        height: 20px;
        border-radius: 5px;
      }
    }
  `,
};
