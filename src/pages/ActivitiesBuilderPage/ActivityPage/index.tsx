import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ActivityContent } from "../../../components/Activities/ActivityContent";
import { ActivityTip } from "../../../components/Activities/ActivityTip";
import { Button } from "../../../components/Global/Button";

export const ActivityPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleEdit = () => {
    navigate("./edit");
  };

  const handlePrint = () => {
    navigate("./print");
  };

  return (
    <Style.PageContainer>
      <Style.ButtonGroup>
        <Button onClick={handleBack}>Back</Button>
        <Style.SubButtonGroup>
          <Button onClick={handleEdit}>Edit</Button>
          <Button onClick={handlePrint}>Print</Button>
        </Style.SubButtonGroup>
      </Style.ButtonGroup>
      <ActivityContent />
      <ActivityTip activityLink1="#" activityLink2="#" />
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  ButtonGroup: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  SubButtonGroup: styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
  `,
};
