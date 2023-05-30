import styled from "styled-components";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { MultipleSelection } from "./MultipleSelection";
import { TrueFalseQuestion } from "./TrueFalse";

// type QuestionType = "text" | "multiple-selection" | "true-false";
interface QuestionProps {
  pattern: string;
  content: {
    question: string;
    type: string;
    list?: string[];
  };
  count: number;
  order: number;
}

export const Question = ({ pattern, content, order, count }: QuestionProps) => {
  return (
    <Style.Container>
      <Style.ImageContainer>
        <img
          src={"/images/testQuestionPatterns/" + pattern + ".svg"}
          alt={pattern + "-pattern"}
        />
      </Style.ImageContainer>
      <Style.ContentContainer>
        <Style.Content>
          <Style.Order>{"Question " + order + " of " + count}</Style.Order>
          <Style.Question>{content.question}</Style.Question>
          <div>
            {content.type === "text" && <Style.Textarea />}
            {content.type === "true-false" && <TrueFalseQuestion />}
            {content.type === "multiple-selection" && content.list && (
              <MultipleSelection optionlist={content.list} />
            )}
          </div>
        </Style.Content>
      </Style.ContentContainer>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    border-radius: ${convertToRelativeUnit(32, "vh")};
    overflow: hidden;
    filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.1));
    backdrop-filter: blur(59.2764px);
  `,
  ImageContainer: styled.div`
    height: 100%;
    width: 35%;
    overflow: hidden;
    img {
      min-width: 100%;
      min-height: 100%;
    }
  `,
  ContentContainer: styled.div`
    width: 65%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    border-box: content-box;
  `,
  Content: styled.div`
    width: 65%;
  `,
  Order: styled.p`
    font-weight: 500;
    font-size: ${convertToRelativeUnit(19, "vh")};
    line-height: ${convertToRelativeUnit(24, "vh")};
    color: var(--blue-500);
    margin-bottom: ${convertToRelativeUnit(18, "vh")}; ;
  `,
  Question: styled.p`
    font-weight: 500;
    font-size: ${convertToRelativeUnit(23, "vh")};
    line-height: ${convertToRelativeUnit(28, "vh")};
    color: var(--neutral-600);
    margin-bottom: ${convertToRelativeUnit(24, "vh")};
  `,
  Textarea: styled.textarea`
    width: 100%;
    height: ${convertToRelativeUnit(199, "vh")};
    overflow: hidden;
    resize: none;
    padding: ${convertToRelativeUnit(13, "vh")}
      ${convertToRelativeUnit(15, "vh")};
    font-family: "Noir Std";
    font-style: normal;
    font-weight: 400;
    font-size: ${convertToRelativeUnit(16, "vh")};
    line-height: ${convertToRelativeUnit(20, "vh")};
    color: var(--neutral-600);
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  `,
};
