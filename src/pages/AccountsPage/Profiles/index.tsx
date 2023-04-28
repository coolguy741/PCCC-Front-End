import { Link } from "react-router-dom";
import styled from "styled-components";

import { AccountCard } from "../../../components/Accounts/AccountCard";
import { Select } from "../../../components/Global/Select";
import { Typography } from "../../../components/Global/Typography";
import { avatars_data } from "../../../lib/avatars/data";
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
                  img={avatars_data[index]}
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
