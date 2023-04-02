import styled from "styled-components";
import { Button } from "../../../components/Global/Button";
import { useNavigate } from "react-router-dom";
import mockData from "../../../lib/mockData/mealtime-moments/mealtime-moment.json";
import { Text } from "../../../components/Global/Text";
import { MealtimeMomentTip } from "../../../components/MealtimeMoment/MealtimeMomentTip";

export const MealTimeMomentPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  const handleAddToCalendar = () => {
    alert("AddToCalendar");
  }

  const handleEdit = () => {
    navigate("./edit");
  }

  const handlePublish = () => {
    alert("Publish");
  }

  const handlePrint = () => {
    navigate("./print");
  }

  return (
    <PageContainer>
      <ButtonGroup>
        <Button onClick={handleBack}>Back</Button>
        <RightButtonGroup>
          <Button onClick={handleEdit}>Edit</Button>
          <Button onClick={handleAddToCalendar}>Add to calendar</Button>
          <Button onClick={handlePublish}>Publish</Button>
          <Button onClick={handlePrint}>Print</Button>
        </RightButtonGroup>
      </ButtonGroup>
      <h2>{mockData.title}</h2>
      <Content>
        <Text>{mockData.overview}</Text>
        <StyledImage src={mockData.image} alt={mockData.alt}/> 
      </Content>
      <MealtimeMomentTip />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const RightButtonGroup = styled.div`
  display: flex;
  gap: 20px;
`

const Content = styled.div`
  display: flex;
  gap: 50px;
`

const StyledImage = styled.img`
`