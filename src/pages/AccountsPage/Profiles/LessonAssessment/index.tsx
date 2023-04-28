import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../../components/Button";
import { BackButton } from "../../../../components/Global/BackButton";
import mockData from "../../../../lib/mockData/accounts/profileLessonAccessment.json";

export const AccountsUserLessonAssessmentPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handlePrint = () => {
    navigate("/dashboard/accounts/profiles/:user/:lessonAssessment/print");
  };

  return (
    <Style.PageContainer>
      <Style.ButtonContainer>
        <BackButton onClick={handleBack} />
        <Button onClick={handlePrint} size="large">
          Print
        </Button>
      </Style.ButtonContainer>
      <Style.Topic>{"Topic : " + mockData.topic}</Style.Topic>
      <Style.Lesson>{mockData.lesson}</Style.Lesson>
      <Style.Questions></Style.Questions>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-family: "Noir Std";
    font-style: normal;
  `,
  ButtonContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Topic: styled.p`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;
    gap: 10px;
    border: 2px solid var(--orange-600);
    border-radius: 50px;
    color: var(--orange-600);
    text-transform: uppercase;
    margin-top: 40px;
    margin-left: 8%;
  `,
  Lesson: styled.h2`
    margin-top: 18px;
    margin-left: 8%;
    font-weight: 600;
    font-size: 33px;
    line-height: 40px;
    color: var(--neutral-800);
  `,
  Questions: styled.div``,
};
