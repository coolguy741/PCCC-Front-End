import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../components/Global/Button";
import { Icon } from "../../../components/Global/Icon";
import { RecipeContent } from "../../../components/Recipes/RecipeContent";
import { RecipeTip } from "../../../components/Recipes/RecipeTip";

export const RecipePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleEdit = () => {
    navigate("./edit");
  };

  const handleAddToCalendar = () => {
    alert("Add to calendar");
  };

  const handlePrint = () => {
    navigate("./print");
  };

  return (
    <Style.PageContainer>
      <Style.ButtonGroup>
        <Button onClick={handleBack}>Back</Button>
        <Style.SubButtonGroup>
          <Style.IconContainer>
            <Icon name="heart" />
          </Style.IconContainer>
          <Button onClick={handleEdit}>Edit</Button>
          <Button onClick={handleAddToCalendar}>Add to calendar</Button>
          <Button onClick={handlePrint}>Print</Button>
        </Style.SubButtonGroup>
      </Style.ButtonGroup>
      <RecipeContent />
      <RecipeTip />
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  IconContainer: styled.div`
    width: 50px;
    height: 50px;
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
  CenterAlignedContainer: styled.div`
    display: flex;
    justify-content: center;
  `,
  TwoColumnContainer: styled.div`
    width: 100%;
    display: flex;
    gap: 20px;

    .first-child {
      width: 30%;
    }

    .second-child {
      width: 60%;
    }
  `,
  Text: styled.p`
    font-size: 1rem;
    margin: 0px;
  `,
};
