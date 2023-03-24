import styled from "styled-components";
import { Button } from "../../../../components/Global/Button";

export const AccountsGroupPage = () => {
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
      
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`
