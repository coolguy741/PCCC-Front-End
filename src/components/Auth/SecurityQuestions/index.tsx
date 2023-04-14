import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAPI } from "../../../hooks/useAPI";
import { useSignUpStore } from "../../../stores/signUpStore";
import Button from "../../Button";
import { Input } from "../../Global/Input";
import { Select } from "../../Global/Select";

interface SecurityQuestion {
  id?: string;
  question?: string | null;
}

export const SecurityQuestions = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstSecurityAnswer, setFirstSecurityAnswer] = useState("");
  const [secondSecurityAnswer, setSecondSecurityAnswer] = useState("");
  const [thirdSecurityAnswer, setThirdSecurityAnswer] = useState("");
  const [firstSecurityQuestionId, setFirstSecurityQuestionId] = useState("");
  const [secondSecurityQuestionId, setSecondSecurityQuestionId] = useState("");
  const [thirdSecurityQuestionId, setThirdSecurityQuestionId] = useState("");
  const [firstSecurityQuestions, setFirstSecurityQuestions] = useState<
    SecurityQuestion[] | null | undefined
  >([]);
  const [secondSecurityQuestions, setSecondSecurityQuestions] = useState<
    SecurityQuestion[] | null | undefined
  >([]);
  const [thirdSecurityQuestions, setThirdSecurityQuestions] = useState<
    SecurityQuestion[] | null | undefined
  >([]);
  const birthYear = useSignUpStore((state) => state.birthYear);
  const province = useSignUpStore((state) => state.province);
  const firstUserName = useSignUpStore((state) => state.firstUserName);
  const secondUserName = useSignUpStore((state) => state.secondUserName);
  const thirdUserName = useSignUpStore((state) => state.thirdUserName);

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

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    api.appUserCreate({
      birthYear: birthYear,
      province: province,
      username: `${firstUserName}${secondUserName}${thirdUserName}`,
      password: password,
      firstSecurityQuestionId: firstSecurityQuestionId,
      firstSecurityQuestionAnswer: firstSecurityAnswer,
      secondSecurityQuestionId: secondSecurityQuestionId,
      secondSecurityQuestionAnswer: secondSecurityAnswer,
      thirdSecurityQuestionId: thirdSecurityQuestionId,
      thirdSecurityQuestionAnswer: thirdSecurityAnswer,
    });
  };

  return (
    <Container onSubmit={submitHandler}>
      <div className="password">
        <label>
          <span>Create Password</span>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <label>
          <span>Retype Password</span>
          <Input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </label>
      </div>
      <div className="questions">
        <label>
          <span>Security Question #1</span>
          <Select
            onChange={(e) => setFirstSecurityQuestionId(e.target.value)}
            value={firstSecurityQuestionId}
          >
            <option></option>
            {firstSecurityQuestions &&
              firstSecurityQuestions.map((question) => (
                <option key={question.id} value={question.id}>
                  {question.question}
                </option>
              ))}
          </Select>
        </label>
        <label>
          <span>Answer</span>
          <Input
            type="text"
            onChange={(e) => setFirstSecurityAnswer(e.target.value)}
            value={firstSecurityAnswer}
          />
        </label>
        <label>
          <span>Security Question #2</span>
          <Select
            onChange={(e) => setSecondSecurityQuestionId(e.target.value)}
            value={secondSecurityQuestionId}
          >
            <option></option>
            {secondSecurityQuestions &&
              secondSecurityQuestions.map((question) => (
                <option key={question.id} value={question.id}>
                  {question.question}
                </option>
              ))}
          </Select>
        </label>
        <label>
          <span>Answer</span>
          <Input
            type="text"
            onChange={(e) => setSecondSecurityAnswer(e.target.value)}
            value={secondSecurityAnswer}
          />
        </label>
        <label>
          <span>Security Question #3</span>
          <Select
            onChange={(e) => setThirdSecurityQuestionId(e.target.value)}
            value={thirdSecurityQuestionId}
          >
            <option></option>
            {thirdSecurityQuestions &&
              thirdSecurityQuestions.map((question) => (
                <option key={question.id} value={question.id}>
                  {question.question}
                </option>
              ))}
          </Select>
        </label>
        <label>
          <span>Answer</span>
          <Input
            type="text"
            onChange={(e) => setThirdSecurityAnswer(e.target.value)}
            value={thirdSecurityAnswer}
          />
        </label>
      </div>
      <div className="next-button">
        <Button type="submit">Submit</Button>
      </div>
    </Container>
  );
};

const Container = styled.form`
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
