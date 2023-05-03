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
  PageContainer: styled.section`
    padding: 40px 200px;

    p.topic-text {
      border: 2px solid #f65321;
      border-radius: 50px;
      width: max-content;
      padding: 10px 15px;
      font-weight: 600;
      font-size: 8px;
      line-height: 16px;
      text-transform: uppercase;
      color: var(--orange-600);
      margin-bottom: 12px;
    }

    h2 {
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      color: var(--neutral-800);
      margin-bottom: 16px;
    }

    h3 {
      font-weight: 500;
      font-size: 7.5678px;
      line-height: 10px;
      color: var(--blue-500);
      border-bottom: 10px;
    }

    .print-graphic {
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 12px;
      height: 50vh;
      overflow: hidden;
      display: flex;

      figure {
        width: 35%;
        border: 1px solid red;
        height: 100%;
      }

      .print-questions {
        padding: 40px 50px;
      }

      p.print-question {
        font-weight: 500;
        font-size: 9.16102px;
        line-height: 11px;
        color: var(--neutral-600);
      }

      fieldset {
        height: 100px;
        margin: 20px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  `,
};
