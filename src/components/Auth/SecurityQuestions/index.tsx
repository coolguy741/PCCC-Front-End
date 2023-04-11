import styled from 'styled-components';
import { Button } from '../../Global/Button';
import { Input } from '../../Global/Input';
import { Select } from '../../Global/Select';

interface SecurityQuestionsProps {
  setNav: (nav: number) => void;
}

export const SecurityQuestions = ({ setNav }: SecurityQuestionsProps) => {
  function placeholderForSubmit() {
    return 'clicked';
  }
  return (
    <Container>
      <div className="password">
        <label>
          <span>Create Password</span>
          <Input type="password" />
        </label>
        <label>
          <span>Retype Password</span>
          <Input type="password" />
        </label>
      </div>
      <div className="questions">
        <label>
          <span>Security Question #1</span>
          <Select />
        </label>
        <label>
          <span>Answer</span>
          <Input type="text" />
        </label>
        <label>
          <span>Security Question #2</span>
          <Select />
        </label>
        <label>
          <span>Answer</span>
          <Input type="text" />
        </label>
        <label>
          <span>Security Question #3</span>
          <Select />
        </label>
        <label>
          <span>Answer</span>
          <Input type="text" />
        </label>
      </div>
      <div className="back-button">
        <Button onClick={() => setNav(2)}>Back</Button>
      </div>
      <div className="next-button">
        <Button onClick={placeholderForSubmit}>Submit</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  font-size: 1.2rem;

  label {
    display: flex;
    align-items: center;

    span {
      width: 15rem;
    }

    input,
    select {
      width: 20rem;
    }
  }

  .password,
  .questions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 5rem;
  }

  .back-button {
    position: absolute;
    top: 8rem;
    left: 2rem;
  }

  .next-button {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
  }
`;
