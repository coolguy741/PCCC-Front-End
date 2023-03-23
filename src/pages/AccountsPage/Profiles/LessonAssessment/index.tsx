import styled from "styled-components";
import { Button } from "../../../../components/Global/Button";
import mockData from '../../../../lib/mockData/accounts/profileLessonAccessment.json';
import { useNavigate } from 'react-router-dom';
import { Question } from "../../../../components/Accounts/Question";

export const AccountsUserLessonAssessmentPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  const handlePrint = () => {
  }

  return (
    <PageContainer>
      <div className="button-container">
        <Button onClick={handleBack}>&#60; Back</Button>
        <Button onClick={handlePrint}>Print</Button>
      </div>
      <p className="topic-text">Topic : {mockData.topic}</p>
      <h2 className="title-text">{mockData.lesson}</h2>
      {
        mockData.questions.map((question ,index) => (
          <Question content={question} key={index}/>
        ))
      }
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;

  .button-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .topic-text {
    margin-top: 20px;
    margin-bottom: 0px;
    padding: 0px;
  }
  
  .title-text {
    padding: 0px;
    margin: 0px;
  }


`