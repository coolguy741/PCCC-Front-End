import { Link } from "react-router-dom";
import styled from "styled-components";

import { AccountCard } from "../../../components/Accounts/AccountCard";
import { DropdownSelect } from "../../../components/Global/DropdownSelect";
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
      <div className="filters-container">
        <Style.SelectGroup>
          {selectsGroup.map((select, index) => (
            <Style.SelectContainer key={index}>
              <Typography variant="paragraph3" mb={2} pb={1}>
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
      <section className="users">
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
      padding-bottom: 40px;
      padding-top: 5px;
    }

    .users {
      display: grid;
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
