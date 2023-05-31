import { Link } from "react-router-dom";
import styled from "styled-components";

import { AccountCard } from "../../../components/Accounts/AccountCard";
import { DropdownSelect } from "../../../components/Global/DropdownSelect";
import Scrollbar from "../../../components/Global/Scrollbar";
import { Typography } from "../../../components/Global/Typography";
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
        <Style.SelectGroup>
          {selectsGroup.map((select, index) => (
            <Style.SelectContainer key={index}>
              <Typography variant="paragraph3" pb={1}>
                {select.label}
              </Typography>
              <DropdownSelect
                width={convertToRelativeUnit(180, "vw")}
                height={convertToRelativeUnit(52, "vh")}
                options={select.options}
                onChange={() => alert("option changed")}
              />
            </Style.SelectContainer>
          ))}
        </Style.SelectGroup>
      </div>
      <Scrollbar height="65vh" thumbWidth="thick">
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
      </Scrollbar>
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

      div.sort-options {
        margin-right: ${convertToRelativeUnit(24, "vw")};
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }

    .users {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
      position: relative;
      padding-bottom: ${convertToRelativeUnit(100, "vh")};
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
