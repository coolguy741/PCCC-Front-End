import styled from 'styled-components';
import { Question } from '../../../../components/Accounts/Question';
import mockData from '../../../../lib/mockData/accounts/profileLessonAccessment.json';

export const AccountsUserLessonAssessmentPrintPage = () => {
  return (
    <PageContainer>
      <p className="topic-text">Topic : {mockData.topic}</p>
      <h2 className="title-text">{mockData.lesson}</h2>
      {mockData.questions.map((question, index) => (
        <Question content={question} key={index} />
      ))}
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding: 40px 200px;

  .topic-text {
    text-align: center;
  }

  h2 {
    text-align: center;
  }
`;
