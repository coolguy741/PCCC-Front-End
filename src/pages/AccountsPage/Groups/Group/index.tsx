import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GroupActivity } from "../../../../components/Accounts/GroupActivity";
import { Photo } from "../../../../components/Accounts/Photo";
import { Button } from "../../../../components/Global/Button";
import { SmallButton } from "../../../../components/Global/SmallButton";
import mockData from "../../../../lib/mockData/accounts/group.json";

export const AccountsGroupPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleEdit = () => {
    navigate("/dashboard/accounts/groups/group/edit");
  };

  const handleViewGroupCalender = () => {
    navigate("/dashboard/accounts/groups/group/calendar");
  };

  return (
    <Style.PageContainer>
      <div className="buttons-container">
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleEdit}>Edit</Button>
      </div>
      <div className="group-info-container">
        <div>
          <h2>{mockData.name}</h2>
          <p className="text">{"Group ID : " + mockData.groupID}</p>
        </div>
        <div>
          <p>{"Last modified: " + mockData.lastModified}</p>
          <p>{"Owner: " + mockData.owner + " ( " + mockData.role + " ) "}</p>
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
        {mockData.members.map((member, index) => (
          <div className="member-container">
            <div className="photo-container">
              <Photo role={member.role} src={member.image} />
            </div>
            <p className="text">{member.name}</p>
          </div>
        ))}
      </div>
      <GroupActivity activities={mockData.activities} />
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
