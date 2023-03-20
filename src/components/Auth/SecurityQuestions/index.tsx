import styled from "styled-components";
import { Button } from "../../Global/Button";
import { Input } from "../../Global/Input";

interface SecurityQuestionsProps {
  setNav: (nav: number) => void;
}

export const SecurityQuestions = ({ setNav }: SecurityQuestionsProps) => {
  return (
    <Container>
      <h1>Security Questions</h1>
      <div>
        <h3>What is your favourite colour?</h3>
        <Input type="text" />
      </div>
      <div>
        <h3>What is your favourite vegetable?</h3>
        <Input type="text" />
      </div>
      <div>
        <h3>What is your favourite colour?</h3>
        <Input type="text" />
      </div>
      <div className="back-button">
        <Button onClick={() => setNav(2)}>Back</Button>
      </div>
      <div className="next-button">
        <Button onClick={() => {}}>Submit</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  h1 {
    position: absolute;
    top: 7rem;
    left: 15rem;
  }

  .back-button {
    position: absolute;
    top: 10rem;
    left: 2rem;
  }

  .next-button {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
  }
`;
