import styled from "styled-components";
import { Button } from "../../../../components/Global/Button";
import { useNavigate } from "react-router-dom";

export const AccountsGroupPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  const handleEdit = () => {
    navigate('/dashboard/accounts/groups/edit');
  }

  return (
    <PageContainer>
      <div className="buttons-container">
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleEdit}>Edit</Button>
      </div>
      <div className="group-info-container">
        <div>
          <h1>{}</h1>
        </div>
      </div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;

  .buttons-container{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
`
