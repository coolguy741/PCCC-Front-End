import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useSearchResultsStore } from "../../../stores/searchResultsStore";
import Button from "../../Button";
import { Col, GridContainer, Row } from "../../Global/Grid";
import { LanguageToggle } from "../../Global/LanguageToggle";

const fields = [
  "all",
  "topics",
  "activities",
  "recipes",
  "mealtime-moments",
  "foodways",
];

export const DashboardHeader = () => {
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
    <Style.Container>
      <GridContainer>
        <Row>
          <Col>
            <Style.Header>
              <div>
                <img src="/images/homepage/logo.svg" alt="logo" />
              </div>
              <div className="shadow-md form-container">
                <form onSubmit={handleSearch}>
                  <Style.Dropdown isOpen={isOpen}>
                    {isOpen && (
                      <div className="dropdown" onClick={handleClose} />
                    )}
                    <div
                      className="dropdown-trigger"
                      onClick={() => setIsOpen(true)}
                    >
                      <div>{field.replaceAll("-", " ")} </div>
                      <img
                        src="/images/icons/arrow-down.svg"
                        alt="arrow down"
                      />
                    </div>
                    <Style.DropdownMenu isOpen={isOpen} count={fields.length}>
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
                </form>
              </div>
              <div>
                <Button variant="green" size="small" className="btn-alert">
                  <img alt="logout" src="/images/icons/alert.svg" />
                </Button>
              </div>
              <div>
                <LanguageToggle />
              </div>
              <div>
                <img
                  src="/images/homepage/power-full-kids.svg"
                  alt="power full kids"
                />
              </div>
            </Style.Header>
          </Col>
        </Row>
      </GridContainer>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
    padding: calc(2 * var(--gutter-grid)) calc(1.5 * var(--gutter-grid));
  `,
  Header: styled.header`
    display: flex;
    align-items: center;
    gap: calc(2 * var(--gutter-grid));

    .btn-alert {
      width: 44px;
    }

    .form-container {
      flex: 1;
      form {
        display: flex;
        input {
          flex: 1;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          border: none;
          padding: 11px 16px;

          &:focus {
            outline: none;
            border: 2px solid var(--blue-500);
          }
        }
      }
    }
  `,
  Dropdown: styled.div.attrs((props: { isOpen: boolean }) => ({
    isOpen: props.isOpen || false,
  }))`
    position: relative;
    background: linear-gradient(#4cde96, #20ad67);
    width: 128px;
    z-index: 5;
    color: white;
    cursor: pointer;
    padding: 10px 20px;
    border-top-left-radius: 4px;
    transition: all 0.3s ease-in-out;
    border-bottom-left-radius: 4px;

    &:hover {
      box-shadow: 0px 24px 22px rgba(38, 208, 124, 0.5);
    }

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

      & div {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      img {
        transition: all 0.2s ease-in-out;
        width: 24px;
        height: 24px;
      }

      ${({ isOpen }) =>
        isOpen &&
        `img {
         transform: rotate(-180deg);
      }`};
    }
  `,
  DropdownMenu: styled.div.attrs(
    (props: { isOpen: boolean; count: number }) => ({
      isOpen: props.isOpen || false,
      count: props.count || 0,
    }),
  )`
    position: absolute;
    top: 100%;
    left: 0;
    background: linear-gradient(#4cde96, #20ad67);
    z-index: 20;
    border-radius: 4px;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
    height: ${({ isOpen, count }) => (isOpen ? `${count * 44}px` : "0px")};
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
