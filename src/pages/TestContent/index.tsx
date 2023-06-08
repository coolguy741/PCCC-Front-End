import styled from "styled-components";
import { ParagraphWithHeading } from "../../components/ContentCreation/ParagraphWithHeading";

export const TestContentPage = () => {
  return (
    <Style.PageContainer>
      <div className="cc-components"></div>
      <div className="cc-preview">
        {/* <ThemeComponent /> */}
        {/* <Title /> */}
        <ParagraphWithHeading />
      </div>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    height: 100%;
    width: 100%;
    display: flex;

    .cc-components {
      height: 100%;
      width: 10%;
      border: 1px solid red;
    }

    .cc-preview {
      height: 100%;
      width: 90%;
      border: 1px solid red;
      padding: 40px;
      display: grid;
      place-items: center;
    }
  `,
};
