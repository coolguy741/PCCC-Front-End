import { Link, useLoaderData } from "react-router-dom";
import styled from "styled-components";

import Cookies from "js-cookie";
import { AccountCard } from "../../../components/Accounts/AccountCard";
import { DropdownSelect } from "../../../components/Global/DropdownSelect";
import Scrollable from "../../../components/Global/Scrollable";
import { Api, PccServer23UsersGetUsersDto } from "../../../lib/api/api";
import { BASE_API_URL } from "../../../lib/api/helpers/consts";
import { avatars_data } from "../../../lib/avatars/data";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { STORAGE_KEY_JWT } from "../../consts";

const selectsGroup = [
  {
    label: "User type",
    options: ["Standard", "Admin", "Teacher"],
  },
];

export const profilesPageLoader = async () => {
  const { api } = new Api({
    baseURL: BASE_API_URL,
  });

  try {
    const response = await api.appUserUsersList(
      {},
      {
        headers: {
          Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
        },
      },
    );

    if (response.status === 200) {
      return response.data.items;
    }
  } catch (error: unknown) {
    console.warn(error);
  }

  return null;
};

export const AccountsProfilesPage = () => {
  const handleCardDelete = () => {
    return "card delete";
  };

  const users = useLoaderData() as PccServer23UsersGetUsersDto[];

  console.log(users);

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
        {users.map((user, index) => {
          return (
            <Link to={`./${user.id}`} key={`user-${index}`}>
              <AccountCard
                img={avatars_data[index]}
                name={user.name}
                role={user.role}
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
      grid-template-rows: repeat(4, 1fr);
      column-gap: ${convertToRelativeUnit(24, "vw")};
      position: relative;
    }
  `,
};
