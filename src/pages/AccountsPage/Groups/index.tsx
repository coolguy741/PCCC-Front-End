import styled from "styled-components";
import { Button } from "../../../components/Global/Button";

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
          groups container
        </div>
        <div className="group-invitations">
          
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
    margin: 30px;

    .groups-container {
      width: 80%;
      display: flex;
    }

    .group-invitations {
      width: 20%;
      display: flex;
      flex-direction: column;
      margin: 10px;
      border: 1px black solid;
      padding: 10px;

    }
  }
`
