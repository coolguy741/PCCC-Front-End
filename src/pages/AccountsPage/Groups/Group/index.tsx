import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Photo } from "../../../../components/Accounts/Photo";
import Button from "../../../../components/Button";
import { useAPI } from "../../../../hooks/useAPI";
import { formatDate } from "../../../../lib/util/formatDate";
import { STORAGE_KEY_JWT } from "../../../consts";

export const AccountsGroupPage = () => {
  const [group, setGroup] = useState<any>(null);
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

  useEffect(() => {
    getGroup();
  }, []);

  return (
    <Style.PageContainer>
      <div className="buttons-container">
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleViewGroupCalender}>View Group calendar</Button>
      </div>
      {group && (
        <>
          <div className="group-info-container">
            <div>
              <h2>{group.group.name}</h2>
              <span className="group-id">{"Group ID : " + group.group.id}</span>
              <span className="modified">
                {`Last modified: ${formatDate(
                  group.group.lastModificationTime || group.group.creationTime,
                )}`}
              </span>
            </div>
            {/* <div>
              <p>
                {"Owner: " +
                  group.owner.username +
                  " ( " +
                  group.owner.role +
                  " ) "}
              </p>
            </div> */}
          </div>
          <div className="members-container">
            {group.group.members &&
              group.group.members.map((member: any, index: any) => (
                <div className="member-container">
                  <div className="photo-container">
                    <Photo role={member.role} src={member.image} />
                  </div>
                  <p className="text">{member.name}</p>
                </div>
              ))}
          </div>
          {/* <GroupActivity activities={group.group.activities} /> */}
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

    .members-container {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;

      .member-container {
        display: flex;
        align-items: center;

        .photo-container {
          width: 70px;
          height: 70px;
        }

        .text {
          margin-left: 20px;
        }
      }
    }

    .group-info-container {
      display: flex;
      justify-content: space-between;

      div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        h2 {
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
  `,
};
