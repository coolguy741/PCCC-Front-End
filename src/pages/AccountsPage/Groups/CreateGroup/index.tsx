import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../../components/Button";
import { BackButton } from "../../../../components/Global/BackButton";
import { Input } from "../../../../components/Global/Input";
import { Select } from "../../../../components/Global/Select";
import { useAPI } from "../../../../hooks/useAPI";
import { PccServer23GroupsCustomGetJoinedGroupUsersDto } from "../../../../lib/api/api";
import { capitalize } from "../../../../lib/util/capitalize";
import { convertToRelativeUnit } from "../../../../styles/helpers/convertToRelativeUnits";
import { STORAGE_KEY_JWT } from "../../../consts";

export const AccountsCreateGroupPage = () => {
  const [members] = useState<PccServer23GroupsCustomGetJoinedGroupUsersDto[]>(
    [],
  );
  const [groupName, setGroupName] = useState("");
  const navigate = useNavigate();
  const { api } = useAPI();

  const handleBack = () => {
    navigate(-1);
  };

  const handleCreate = async () => {
    const response = await api.appGroupsCreate(
      {
        name: groupName,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
        },
      },
    );

    if (response.status === 200) navigate("/accounts/groups");
  };

  return (
    <Style.Container>
      <div className="buttons-container manage-users-options">
        <BackButton onClick={handleBack} />
      </div>
      <section className="manage-users-content">
        <h2>Create Group</h2>
        <div className="content">
          <div className="group-container">
            <div className="group-header">
              <div className="group-name">
                <h3>Group Name</h3>
                <Input
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  placeholder="Enter your group name"
                />
              </div>
              <div className="group-owner">
                <h3>Owner:</h3>
                <Select>
                  <option value="1">Owner</option>
                </Select>
              </div>
            </div>
            <div className="group-body">
              <h3>Group members</h3>
              <div className="group-body-members">
                {members.map((member, index) => (
                  <div className="member-container-row" key={index}>
                    <div className="member-container">
                      <img
                        src="/images/avatars/avatar.svg"
                        alt="member"
                        placeholder="image"
                        width="50"
                      />
                      <div>
                        <span className="user">
                          {member.userName || "UserName"}
                        </span>
                        <span className="role">
                          {capitalize(member.userRole)}
                        </span>
                      </div>
                    </div>
                    <Button size="small" variant="yellow">
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="user-container">
            <div className="user-header">
              <h3>Username</h3>
              <Input placeholder="Search by username" />
              <div className="users-body"></div>
            </div>
          </div>
        </div>
        <div className="edit-button-container">
          <Button onClick={handleCreate}>Create</Button>
        </div>
      </section>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    /* classnames to target content for manage users layout */
    /* decreasing the options size & increasing content size */
    div.manage-users-options {
      height: 10vh;
    }

    section.manage-users-content {
      height: 68.5vh;
    }

    h2 {
      color: var(--neutral-800);
      font-size: ${convertToRelativeUnit(33, "vh")};
      font-weight: 600;
    }

    .buttons-container {
      display: flex;
      justify-content: space-between;
    }

    .content {
      display: flex;
      gap: ${convertToRelativeUnit(26, "vw")};
      height: 77.5%;

      h3 {
        color: var(--neutral-600);
        font-size: ${convertToRelativeUnit(18, "vw")};
        font-weight: 600;
      }

      .group-container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: ${convertToRelativeUnit(30, "vw")};
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        padding: ${convertToRelativeUnit(24, "vw")};
        border-radius: 16px;
        width: calc(100% * (8 / 12));

        .group-header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          gap: ${convertToRelativeUnit(18, "vw")};

          .group-name,
          .group-owner {
            display: flex;
            flex-direction: column;
            gap: ${convertToRelativeUnit(12, "vw")};
            width: 100%;
          }

          .group-meta {
            display: flex;
            flex-direction: column;
            gap: ${convertToRelativeUnit(12, "vw")};
            width: 60%;
            color: var(--neutral-600);
          }
        }

        .group-body {
          .group-body-members {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0 ${convertToRelativeUnit(32, "vw")};

            .member-container-row {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;

              .member-container {
                display: flex;
                width: 50%;
                align-items: center;

                img {
                  border-radius: 50%;
                  width: ${convertToRelativeUnit(80, "vw")};
                  height: ${convertToRelativeUnit(80, "vh")};
                }

                div {
                  display: flex;
                  flex-direction: column;

                  .user {
                    font-weight: 600;
                    font-size: ${convertToRelativeUnit(18, "vh")};
                    color: var(--neutral-800);
                  }

                  .role {
                    font-size: ${convertToRelativeUnit(14, "vh")};
                    color: var(--neutral-700);
                  }
                }
              }
            }
          }
        }
      }

      .user-container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: ${convertToRelativeUnit(30, "vw")};
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        padding: ${convertToRelativeUnit(20, "vw")};
        border-radius: 16px;
        width: calc(100% * (4 / 12));

        .user-header {
          display: flex;
          flex-direction: column;
          gap: ${convertToRelativeUnit(12, "vw")};
        }
      }

      .member-container-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .member-container {
          display: flex;
          width: 50%;
          align-items: center;

          img {
            border-radius: 50%;
            width: ${convertToRelativeUnit(80, "vw")};
            height: ${convertToRelativeUnit(80, "vh")};
          }

          div {
            display: flex;
            flex-direction: column;

            .user {
              font-weight: 600;
              font-size: ${convertToRelativeUnit(18, "vh")};
              color: var(--neutral-800);
            }

            .role {
              font-size: ${convertToRelativeUnit(14, "vh")};
              color: var(--neutral-700);
            }
          }
        }
      }
    }
    .edit-button-container {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      margin-top: ${convertToRelativeUnit(24, "vh")};
    }
  `,
};
