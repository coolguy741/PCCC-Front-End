import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useSearchResultsStore } from "../../../stores/searchResultsStore";
import { useUserStore } from "../../../stores/userStore";
import Button from "../../Button";
import { Col, GridContainer, Row } from "../../Global/Grid";
import { Input } from "../../Global/Input";
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
    <Style.Container>
      <GridContainer>
        <Row>
          <Col>
            <Style.Header>
              <img src="/images/homepage/logo.svg" alt="logo" />
              {!!user && (
                <>
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
                                  <Input
                                    type="radio"
                                    checked={field === currentField}
                                  />
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
                    </form>
                  </div>
                  <div>
                    <Button variant="green" size="medium" className="btn-alert">
                      <img alt="logout" src="/images/icons/alert.svg" />
                    </Button>
                  </div>
                </>
              )}
              <div className={`${!user ? "ml-auto" : ""}`}>
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

    button {
      span {
        padding: 0 8px;
      }
    }

    .form-container {
      flex: 1;
      form {
        display: flex;
        input.search-key {
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

      &:hover {
        box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.1);
      }
    }
  `,
  Dropdown: styled.div.attrs((props: { isOpen: boolean }) => ({
    isOpen: props.isOpen || false,
  }))`
    position: relative;
    background: linear-gradient(#4cde96, #20ad67);
    z-index: 5;
    color: white;
    cursor: pointer;
    padding: 10px 20px;
    border-top-left-radius: 4px;
    transition: all 0.3s ease-in-out;
    border-bottom-left-radius: 4px;

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
      padding: 0 10px;

      & div {
        white-space: nowrap;
        margin-right: 4px;
      }

      img {
        transition: all 0.2s ease-in-out;
        width: 20px;
        height: 20px;
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
      border: 2px solid #0084d5;
    }

    & div {
      color: var(--neutral-700);
      white-space: nowrap;
    }
  `,
};
