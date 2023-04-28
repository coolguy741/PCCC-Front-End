import styled from "styled-components";
import mockData from "../../../../lib/mockData/accounts/profileLessonAccessment.json";

export const AccountsUserLessonAssessmentPrintPage = () => {
  return (
    <Style.PageContainer>
      <p>Topic : {mockData.topic}</p>
      <h2 className="title-text">{mockData.lesson}</h2>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    padding: 40px 200px;

    .topic-text {
      text-align: center;
    }

    h2 {
      text-align: center;
    }
  `,
};
