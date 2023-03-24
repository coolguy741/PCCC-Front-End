import styled from "styled-components";
import { RadioGropQuestion } from "./RadioGroup";
import { TrueFalseQuestion } from "./TrueFalse";

interface QuestionProps {
  content: {
    question: string;
    inputType: string;
    content?: string [];
    numberOfLines?: number;
  };
}

export const Question = ({ content }: QuestionProps) => {
  return (
    <Container>
      <p className="question">Q: {content.question}</p>
      {content.inputType === "textarea" && <textarea className="textarea" rows={content.numberOfLines ? content.numberOfLines : 1} />}
      {content.inputType === "radioBox" && <RadioGropQuestion optionContent={content.content ? content.content  : [""]} />}
      {content.inputType === "trueFalse" && <TrueFalseQuestion/>}
    </Container>
  );
};

const Container = styled.div`
  padding: 10px 0px;

  .question {
    padding-top: 10px;
  }

  .true-false-radio-container {
    display: flex;

    div{
      padding-right: 30px;
    }
  }
  textarea {
    width: 100%;
  }
`;
