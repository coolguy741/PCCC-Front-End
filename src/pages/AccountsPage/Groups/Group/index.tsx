import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Photo } from "../../../../components/Accounts/Photo";
import Button from "../../../../components/Button";
import { SmallButton } from "../../../../components/Global/SmallButton";
import { useAPI } from "../../../../hooks/useAPI";
import { STORAGE_KEY_JWT } from "../../../consts";

export const AccountsGroupPage = () => {
  const [group, setGroup] = useState<any>(null);
  const navigate = useNavigate();
  const { api } = useAPI();
  const [cookies] = useCookies([STORAGE_KEY_JWT]);
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
          Authorization: `Bearer ${cookies.PCCC_TOKEN}`,
        },
      },
    );

    console.log(response);

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
        <Button onClick={handleEdit}>Edit</Button>
      </div>
      {group && (
        <>
          <div className="group-info-container">
            <div>
              <h2>{group.group.name}</h2>
              <p className="text">{"Group ID : " + group.group.id}</p>
            </div>
            <div>
              <p>
                {"Last modified: " + group.group.lastModificationTime ||
                  group.group.creationTime}
              </p>
              <p>
                {"Owner: " +
                  group.owner.username +
                  " ( " +
                  group.owner.role +
                  " ) "}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="sort-container">
              <p>Sort: </p>
              <select>
                <option>A-Z</option>
                <option>Z-A</option>
              </select>
            </div>
            <SmallButton onClick={handleViewGroupCalender}>
              View Group Calender
            </SmallButton>
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
