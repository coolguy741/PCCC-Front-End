import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../components/Global/Button";
import { Text } from "../../../components/Global/Text";
import { MealtimeMomentTip } from "../../../components/MealtimeMoment/MealtimeMomentTip";
import mockData from "../../../lib/mockData/mealtime-moments/mealtime-moment.json";

export const MealTimeMomentPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleAddToCalendar = () => {
    alert("AddToCalendar");
  };

  const handleEdit = () => {
    navigate("./edit");
  };

  const handlePublish = () => {
    alert("Publish");
  };

  const handlePrint = () => {
    navigate("./print");
  };

  return (
    <Style.PageContainer>
      <Style.ButtonGroup>
        <Button onClick={handleBack}>Back</Button>
        <Style.RightButtonGroup>
          <Button onClick={handleEdit}>Edit</Button>
          <Button onClick={handleAddToCalendar}>Add to calendar</Button>
          <Button onClick={handlePublish}>Publish</Button>
          <Button onClick={handlePrint}>Print</Button>
        </Style.RightButtonGroup>
      </Style.ButtonGroup>
      <h2>{mockData.title}</h2>
      <Style.Content>
        <Text>{mockData.overview}</Text>
        <Style.StyledImage src={mockData.image} alt={mockData.alt} />
      </Style.Content>
      <MealtimeMomentTip />
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
  `,
  ButtonGroup: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  RightButtonGroup: styled.div`
    display: flex;
    gap: 20px;
  `,
  Content: styled.div`
    display: flex;
    gap: 50px;
  `,
  StyledImage: styled.img``,
};
