import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAPI } from "../../../hooks/useAPI";
import { useSignUpStore } from "../../../stores/signUpStore";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Button from "../../Button";
import { Input } from "../../Global/Input";
import { Select } from "../../Global/Select";
import { Info } from "../../Icons";

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
    <Style.Container
      onSubmit={submitHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="sign-up-password">
        <h1>Sign Up</h1>
        <p>
          <Info />
          Please take note of your password and security answers
        </p>
        <article className="password">
          <h2>Password</h2>
          <fieldset>
            <label>Create Password</label>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              width="65%"
            />
          </fieldset>
          <fieldset>
            <label>Retype Password</label>
            <Input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              width="65%"
            />
          </fieldset>
        </article>
      </section>

      <section className="questions">
        <h2>Security Questions</h2>
        <fieldset>
          <label>Question 1:</label>
          <Select
            onChange={(e) => setFirstSecurityQuestionId(e.target.value)}
            value={firstSecurityQuestionId}
            width="75%"
          >
            <option></option>
            {firstSecurityQuestions &&
              firstSecurityQuestions.map((question) => (
                <option key={question.id} value={question.id}>
                  {question.question}
                </option>
              ))}
          </Select>
        </fieldset>
        <fieldset>
          <label>Answer</label>
          <Input
            type="text"
            onChange={(e) => setFirstSecurityAnswer(e.target.value)}
            value={firstSecurityAnswer}
            width="75%"
          />
        </fieldset>
        <fieldset>
          <label>Question 2:</label>
          <Select
            onChange={(e) => setSecondSecurityQuestionId(e.target.value)}
            value={secondSecurityQuestionId}
            width="75%"
          >
            <option></option>
            {secondSecurityQuestions &&
              secondSecurityQuestions.map((question) => (
                <option key={question.id} value={question.id}>
                  {question.question}
                </option>
              ))}
          </Select>
        </fieldset>
        <fieldset>
          <label>Answer</label>
          <Input
            type="text"
            onChange={(e) => setSecondSecurityAnswer(e.target.value)}
            value={secondSecurityAnswer}
            width="75%"
          />
        </fieldset>
        <fieldset>
          <label>Question 3:</label>
          <Select
            onChange={(e) => setThirdSecurityQuestionId(e.target.value)}
            value={thirdSecurityQuestionId}
            width="75%"
          >
            <option></option>
            {thirdSecurityQuestions &&
              thirdSecurityQuestions.map((question) => (
                <option key={question.id} value={question.id}>
                  {question.question}
                </option>
              ))}
          </Select>
        </fieldset>
        <fieldset>
          <label>Answer</label>
          <Input
            type="text"
            onChange={(e) => setThirdSecurityAnswer(e.target.value)}
            value={thirdSecurityAnswer}
            width="75%"
          />
        </fieldset>
        <Button type="submit" size="large">
          Submit
        </Button>
      </section>
    </Style.Container>
  );
};

const Style = {
  Container: styled(motion.form)`
    width: 80%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h1 {
      font-weight: 600;
      font-size: 36px;
      line-height: 44px;
      margin-bottom: 24px;
    }

    h2 {
      font-weight: 600;
      font-size: 25px;
      line-height: 30px;
      color: #2e2e2e;
      margin-bottom: 24px;
    }

    .sign-up-password {
      width: 45%;
      height: 100%;

      p {
        display: flex;
        font-size: 16px;
        line-height: 24px;
        color: #505050;

        svg {
          margin-right: 15px;
        }
      }

      .password {
        ${glassBackground};
        margin-top: 35px;
      }

      // TODO: Make unique component, avoid repetition.
      fieldset {
        width: 100%;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;

        label {
          color: #505050;
          font-weight: 400;
          font-size: 1rem;
          line-height: 25px;
        }
      }
    }

    .questions {
      width: 50%;
      align-self: flex-end;
      height: 95%;

      h2 {
        font-weight: 600;
        font-size: 33px;
        line-height: 40px;
      }

      & > fieldset {
        display: flex;
        height: 52px;
        margin-bottom: 24px;
        align-items: center;
        justify-content: space-between;
      }

      button {
        margin-left: auto;
        margin-top: 52px;
      }
    }
  `,
};
