import { Link } from "react-router-dom";
import styled from "styled-components";
import { Question } from "../../../../components/Accounts/Question";
import { Logo } from "../../../../components/Global/Logo";
import mockData from '../../../../lib/mockData/accounts/profileLessonAccessment.json';

export const AccountsUserLessonAssessmentPrintPage = () => {
  return (
    <PageContainer>
      <div className="header">
        <Link to="/">
          <Logo width={120} />
        </Link>
        <p>power full kids</p>
      </div>
      <div className="content-container">
        <p className="topic-text">Topic : {mockData.topic}</p>
        <h2 className="title-text">{mockData.lesson}</h2>
        {
          mockData.questions.map((question ,index) => (
            <Question content={question} key={index}/>
          ))
        }
      </div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  .header{
    background-color: #D9D9D9;
    display: flex;
    padding: 10px;
    justify-content:space-between;
  }

  .content-container{
    padding: 40px 200px;

    .topic-text {
      text-align: center;
    }

    h2 {
      text-align: center;
    }
  }
`