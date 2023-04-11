import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ActivityContent } from '../../../components/Activities/ActivityContent';
import { ActivityTip } from '../../../components/Activities/ActivityTip';
import { Button } from '../../../components/Global/Button';

export const ActivityPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleEdit = () => {
    navigate('./edit');
  };

  const handlePrint = () => {
    navigate('./print');
  };

  return (
    <PageContainer>
      <ButtonGroup>
        <Button onClick={handleBack}>Back</Button>
        <SubButtonGroup>
          <Button onClick={handleEdit}>Edit</Button>
          <Button onClick={handlePrint}>Print</Button>
        </SubButtonGroup>
      </ButtonGroup>
      <ActivityContent />
      <ActivityTip activityLink1="#" activityLink2="#" />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SubButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
