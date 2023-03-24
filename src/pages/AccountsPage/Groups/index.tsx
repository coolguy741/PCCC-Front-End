import styled from "styled-components";
import { GroupCard } from "../../../components/Accounts/GroupCard";
import { GroupInvitationCard } from "../../../components/Accounts/GroupInvitationCard";
import { Button } from "../../../components/Global/Button";
import mockData from "../../../lib/mockData/accounts/groups.json";

export const AccountsGroupsPage = () => {
  return (
    <PageContainer>
      <div className="header-container">
        <div className="group-container">
          <div className="label">
            <p>Group</p>
            <input className=""></input>
          </div>
          <div className="label">
            <p>Group ID</p>
            <input className=""></input>
          </div>
          <div className="label">
            <p>School</p>
            <input className=""></input>
          </div>
        </div>
        <div className="button-container">
          <Button>Create Group</Button>
          <Button>Join Group</Button>
        </div>
      </div>
      <div className="row">
        <div className="groups-container">
          {
            mockData.groups.map((group, index) => (
              <GroupCard data={group} key={index}/>
            ))
          }
        </div>
        <div className="group-invitations-container">
          <p className="title-text">{"Group Invitations ( " + mockData.groupInvitations.length + " )"}</p>
          <div className="group-invitations">
            {
              mockData.groupInvitations.map((group, index) => (
                <GroupInvitationCard data = {group} key = {index}/>
              ))
            }
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;

  .header-container {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    .group-container {
      display: flex;

      .label {
        margin-right: 10px;
      }
    }

    .button-container {
      display: flex;

      Button {
        margin-right: 10px;
      }
    }
  }

  .row {
    display: flex;

    .groups-container {
      width: 80%;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      margin: 0px;
      margin-top: 80px;
      padding: 0px;
    }

    .group-invitations-container {
      display: flex;
      flex-direction: column;
      margin: 10px;
      width: 20%;

      .title-text {
        font-size: 1.2rem;
      }

      .group-invitations {
        border: 1px black solid;
        padding: 10px;
        
        .bold-big-text {
          font-size: 1.1 rem;
          font-weight: 700;
        }
      }
    }    
  }
`
