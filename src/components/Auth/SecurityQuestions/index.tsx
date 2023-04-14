import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAPI } from "../../../hooks/useAPI";
import { Button } from "../../Global/Button";
import { Input } from "../../Global/Input";
import { Select } from "../../Global/Select";

interface SecurityQuestion {
  id?: string;
  question?: string | null;
}

export const SecurityQuestions = () => {
  const [firstSecurityQuestions, setFirstSecurityQuestions] = useState<
    SecurityQuestion[] | null | undefined
  >([]);
  const [secondSecurityQuestions, setSecondSecurityQuestions] = useState<
    SecurityQuestion[] | null | undefined
  >([]);
  const [thirdSecurityQuestions, setThirdSecurityQuestions] = useState<
    SecurityQuestion[] | null | undefined
  >([]);
  const { api } = useAPI();

  const getSecurityQuestions = async () => {
    const { data } =
      await api.appCustomSecurityQuestionChoicesSecurityQuestionsList();

    setFirstSecurityQuestions(data.firstSecurityQuestions);
    setSecondSecurityQuestions(data.secondSecurityQuestions);
    setThirdSecurityQuestions(data.thirdSecurityQuestions);

    return data;
  };

  useEffect(() => {
    getSecurityQuestions();
  }, []);

  function placeholderForSubmit() {
    return "clicked";
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
          <Select
            onChange={() => console.log("change")}
            value=""
            placeholder=""
          >
            {firstSecurityQuestions &&
              firstSecurityQuestions.map((question) => (
                <option key={question.id}>{question.question}</option>
              ))}
          </Select>
        </label>
        <label>
          <span>Answer</span>
          <Input type="text" />
        </label>
        <label>
          <span>Security Question #2</span>
          <Select
            onChange={() => console.log("change")}
            value=""
            placeholder=""
          >
            {secondSecurityQuestions &&
              secondSecurityQuestions.map((question) => (
                <option key={question.id}>{question.question}</option>
              ))}
          </Select>
        </label>
        <label>
          <span>Answer</span>
          <Input type="text" />
        </label>
        <label>
          <span>Security Question #3</span>
          <Select
            onChange={() => console.log("change")}
            value=""
            placeholder=""
          >
            {thirdSecurityQuestions &&
              thirdSecurityQuestions.map((question) => (
                <option key={question.id}>{question.question}</option>
              ))}
          </Select>
        </label>
        <label>
          <span>Answer</span>
          <Input type="text" />
        </label>
      </div>
      <div className="back-button">
        <Button>Back</Button>
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
