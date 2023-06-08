import styled from "styled-components";
import { Title } from "../../components/ContentCreation/Title";

export const TestContentPage = () => {
  return (
    <Style.PageContainer>
      <div className="cc-components"></div>
      <div className="cc-preview">
        {/* <ThemeComponent /> */}
        <Title />
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
