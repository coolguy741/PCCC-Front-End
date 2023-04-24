import { Link } from "react-router-dom";
import styled from "styled-components";

import { AccountCard } from "../../../components/Accounts/AccountCard";
import { Select } from "../../../components/Global/Select";
import { Typography } from "../../../components/Global/Typography";
import UserCards from "../../../lib/mockData/accounts/profiles.json";

const selectsGroup = [
  {
    label: "User type",
    options: [
      { label: "Standard", value: "standard" },
      { label: "Admin", value: "admin" },
      { label: "Teacher", value: "teacher" },
    ],
  },
  {
    label: "Sort",
    options: [
      { label: "Date", value: "date" },
      { label: "Name", value: "name" },
      { label: "Teacher", value: "teacher" },
    ],
  },
];

export const AccountsProfilesPage = () => {
  const handleUserTypeChange = () => {
    return "user type change";
  };

  const handleSortTypeChange = () => {
    return "sort type change";
  };

  const handleCardDelete = () => {
    return "card delete";
  };

  return (
    <Style.PageContainer>
      <div className="filters-container">
        <Style.SelectGroup>
          {selectsGroup.map((select, index) => (
            <Style.SelectContainer key={index}>
              <Typography variant="paragraph3" mb={2} pb={1}>
                {select.label}
              </Typography>
              <Select
                width="180px"
                height="52px"
                className="username-select"
                required
              >
                {select.options.map((option) => (
                  <option
                    className="place-holder"
                    key={`option-${option.label}`}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </Select>
            </Style.SelectContainer>
          ))}
        </Style.SelectGroup>
      </div>
      <div className="users">
        {UserCards.map((Card, index) => {
          return (
            <div key={`user-${index}`}>
              <Link to="/dashboard/accounts/profiles/Standard">
                <AccountCard
                  img={Card.img}
                  name={Card.name}
                  role={Card.role}
                  onClick={handleCardDelete}
                  key={index}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;

    .filters-container {
      display: flex;
      padding-bottom: 40px;
    }

    .users {
      display: grid;
      overflow-y: auto;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
      padding-right: 16px;
      margin-right: -24px;

      ::-webkit-scrollbar {
        width: 8px;
        height: 20px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        display: none;
      }

      ::-webkit-scrollbar-button {
        display: none;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #ffffff80;
        border-radius: 8px;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #ffffff90;
      }
    }
  `,
  SelectGroup: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0px;
    gap: 24px;
    width: 180px;
  `,
  SelectContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 180px;
  `,
};
