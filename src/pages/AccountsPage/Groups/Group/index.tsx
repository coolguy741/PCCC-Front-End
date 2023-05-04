import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { GroupActivity } from "../../../../components/Accounts/GroupActivity";
import Button from "../../../../components/Button";
import { BackButton } from "../../../../components/Global/BackButton";
import { useAPI } from "../../../../hooks/useAPI";
import {
  PccServer23GroupsCustomGetJoinedGroupUsersDto,
  PccServer23GroupsGroupWithNavigationPropertiesDto,
} from "../../../../lib/api/api";
import { capitalize } from "../../../../lib/util/capitalize";
import { formatDate } from "../../../../lib/util/formatDate";
import { STORAGE_KEY_JWT } from "../../../consts";

export const AccountsGroupPage = () => {
  const [group, setGroup] =
    useState<PccServer23GroupsGroupWithNavigationPropertiesDto>();
  const [members, setMembers] = useState<
    PccServer23GroupsCustomGetJoinedGroupUsersDto[]
  >([]);
  const navigate = useNavigate();
  const { api } = useAPI();
  const params = useParams();

  const handleBack = () => {
    navigate(-1);
  };

  const handleEdit = () => {
    navigate(`/dashboard/accounts/groups/${params.group}/edit`);
  };

  const handleViewGroupCalender = () => {
    navigate("/dashboard/accounts/groups/group/calendar");
  };

  const getGroup = async () => {
    const response = await api.appCustomGroupsMyCreatedGroupsList(
      {},
      {
        headers: {
          Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
        },
      },
    );

    if (response.data.items) {
      response.data.items.find((item: any) => {
        console.log(item.group.id, params.group);
        if (item.group.id === params.group) {
          setGroup(item);
        }
      });
    }
  };

  const getMembers = async () => {
    if (params.group) {
      const response = await api.appCustomGroupsJoinedGroupUsersList(
        { GroupId: params.group },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
          },
        },
      );

      if (response.data.items) {
        setMembers(response.data.items);
      }
    }
  };

  useEffect(() => {
    getGroup();
    getMembers();
  }, []);

  return (
    <Style.PageContainer>
      <div className="buttons-container">
        <BackButton onClick={handleBack} />
        <Button onClick={handleViewGroupCalender}>View Group calendar</Button>
      </div>
      {group && (
        <>
          <div className="group-info-container">
            <div>
              <h2>{group?.group?.name}</h2>
              <span className="group-id">
                {"Group ID : " + group?.group?.id}
              </span>
              <span className="modified">
                {`Last modified: ${formatDate(
                  group?.group?.lastModificationTime ||
                    group?.group?.creationTime,
                )}`}
              </span>
            </div>
          </div>
          <div className="content">
            <div className="members-container">
              <h2>Owner: {group?.owner?.username}</h2>
              <div className="members-container-content">
                {members &&
                  members.map((member, index) => (
                    <div className="member-container">
                      <img src="/images/avatars/avatar.svg" alt="user-icon" />
                      <div>
                        <span className="user">
                          {member.userName || "UserName"}
                        </span>
                        <span className="role">
                          {`${capitalize(member.userRole)} User`}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <GroupActivity />
          </div>
        </>
      )}
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;

    .buttons-container {
      margin: 20px 0px;
      display: flex;
      justify-content: space-between;
    }

    .group-info-container {
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        h2 {
          font-size: 1.7rem;
          margin-bottom: 1rem;
          color: var(--neutral-900);
        }

        .group-id {
          font-weight: 500;
          font-size: 1.1rem;
          color: var(--neutral-600);
        }

        .modified {
          font-size: 0.9rem;
          color: var(--neutral-600);
        }
      }
    }

    .content {
      margin-top: 2rem;
      display: flex;
      gap: 2rem;

      .members-container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 30px;
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        padding: 1.4rem;
        border-radius: 16px;
        width: calc(100% * (5 / 12));

        .members-container-content {
          display: grid;
          grid-template-columns: 1fr 1fr;

          .member-container {
            display: flex;
            flex-direction: row;
            align-items: center;

            div {
              display: flex;
              flex-direction: column;
              color: var(--neutral-800);

              .user {
                font-size: 1.2rem;
                font-weight: 600;
              }

              .role {
                font-size: 0.9rem;
              }
            }
          }
        }
      }

      .row {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;

        .sort-container {
          display: flex;
          align-items: center;

          select {
            margin-left: 20px;
            padding: 5px;
          }
        }
      }
    }
  `,
};
