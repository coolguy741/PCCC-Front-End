import { Link } from "react-router-dom";
import styled from "styled-components";

import { AccountCard } from "../../../components/Accounts/AccountCard";
import { Select } from "../../../components/Global/Select";
import { avatars_data } from "../../../lib/avatars/data";
import UserCards from "../../../lib/mockData/accounts/profiles.json";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";

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
    <Style.PageContainer className="">
      <div className="filters-container manage-users-options">
        {selectsGroup.map((select, index) => (
          <fieldset key={index}>
            <label>{select.label}</label>
            <Select
              width="180px"
              height="5vh"
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
          </fieldset>
        ))}
      </div>
      <section className="users manage-users-content">
        {UserCards.map((Card, index) => {
          return (
            <Link
              to="/dashboard/accounts/profiles/Standard"
              key={`user-${index}`}
            >
              <AccountCard
                img={avatars_data[index]}
                name={Card.name}
                role={Card.role}
                onClick={handleCardDelete}
                key={index}
              />
            </Link>
          );
        })}
      </section>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    height: auto;
    flex-direction: column;

    .filters-container {
      display: flex;
      align-items: center;

      label {
        margin-bottom: ${convertToRelativeUnit(8, "vh")};
        font-weight: 400;
        font-size: ${convertToRelativeUnit(16, "vh")};
        color: var(--neutral-600);
      }

      fieldset {
        margin-right: ${convertToRelativeUnit(24, "vw")};
      }
    }

    .users {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }
  `,
};
