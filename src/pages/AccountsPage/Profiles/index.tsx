import { Link } from "react-router-dom";
import styled from "styled-components";

import { AccountCard } from "../../../components/Accounts/AccountCard";
import { DropdownSelect } from "../../../components/Global/DropdownSelect";
import Scrollable from "../../../components/Global/Scrollable";
import { avatars_data } from "../../../lib/avatars/data";
import UserCards from "../../../lib/mockData/accounts/profiles.json";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";

const selectsGroup = [
  {
    label: "User type",
    options: ["Standard", "Admin", "Teacher"],
  },
  {
    label: "Sort",
    options: ["Date", "Name", "Teacher"],
  },
];

export const AccountsProfilesPage = () => {
  const handleCardDelete = () => {
    return "card delete";
  };

  return (
    <Style.PageContainer>
      <div className="filters-container manage-users-options">
        {selectsGroup.map((select, index) => (
          <fieldset key={index}>
            <label>{select.label}</label>
            <DropdownSelect
              width={convertToRelativeUnit(180, "vw")}
              height={convertToRelativeUnit(52, "vh")}
              options={select.options}
              onChange={() => alert("option changed")}
            />
          </fieldset>
        ))}
      </div>

      <Scrollable
        height="65vh"
        thumbWidth="thick"
        className="users manage-users-content"
      >
        {UserCards.map((card, index) => {
          return (
            <Link
              to="/dashboard/accounts/profiles/Standard"
              key={`user-${index}`}
            >
              <AccountCard
                img={avatars_data[index]}
                name={card.name}
                role={card.role}
                onClick={handleCardDelete}
                key={index}
              />
            </Link>
          );
        })}
      </Scrollable>
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
        display: flex;
        flex-direction: column;
      }
    }

    .users {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: ${convertToRelativeUnit(24, "vw")};
      position: relative;
    }
  `,
};
