import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../Global/Button';
import { Input } from '../../Global/Input';

const MOCK_SECURITY_QUESTIONS = [
  {
    question: 'What is your favorite color?',
    answer: 'blue',
  },
  {
    question: 'What is your favorite food?',
    answer: 'pizza',
  },
  {
    question: 'What is your favorite animal?',
    answer: 'dog',
  },
];

export const ForgotPasswordForm = () => {
  function placeholderForSubmit() {
    return 'clicked';
  }
  return (
    <Container>
      <div>
        <h1>Security Questions</h1>
        {MOCK_SECURITY_QUESTIONS.map((question, index) => (
          <div>
            <label className="question">
              <span>Question #{index + 1}:</span>
              <span>{question.question}</span>
            </label>
            <label key={index}>
              <span>Answer:</span>
              <Input type="text" />
            </label>
          </div>
        ))}
        <div className="back-button">
          <Link to="/signin">
            <Button>Back</Button>
          </Link>
        </div>
        <Link to="../reset-password">
          <Button onClick={placeholderForSubmit}>Submit</Button>
        </Link>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    h1 {
      align-self: flex-start;
    }

    label {
      display: flex;
      align-items: center;
      gap: 2rem;

      span {
        width: 8rem;
        font-size: 1.2rem;
      }

      input,
      select {
        width: 18rem;
      }

      &.question {
        span:first-child {
          width: 8rem;
        }

        span:last-child {
          width: 18rem;
        }
      }
    }
    button {
      margin-top: 2rem;
    }
  }

  .back-button {
    position: absolute;
    top: 8rem;
    left: 2rem;
  }
`;
