import styled from "styled-components";
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
          <Style.Answer>
            {content.type === "text" && <Style.Textarea />}
            {content.type === "true-false" && <TrueFalseQuestion />}
            {content.type === "multiple-selection" && content.list && (
              <MultipleSelection optionlist={content.list} />
            )}
          </Style.Answer>
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
    border-radius: 32px;
    overflow: hidden;
    font-family: "Noir Std";
    font-style: normal;
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
    background: rgba(255, 255, 255, 0.5);
    border-radius: 0px 32px 32px 0px;
    height: 100%;
    width: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    border-box: content-box;
  `,
  Content: styled.div`
    width: 70%;
  `,
  Order: styled.p`
    font-weight: 500;
    font-size: 19px;
    line-height: 24px;
    color: var(--blue-500);
    margin-bottom: 20px;
  `,
  Question: styled.p`
    font-weight: 500;
    font-size: 23px;
    line-height: 28px;
    color: var(--neutral-600);
    margin-bottom: 24px;
  `,
  Answer: styled.div``,
  Textarea: styled.textarea`
    width: 100%;
    min-height: 100px;
    max-height: 200px;
    overflow: hidden;
    resize: none;
    padding: 13px 15px;
    font-family: "Noir Std";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: var(--neutral-600);
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  `,
};
