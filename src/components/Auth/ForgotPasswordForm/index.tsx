import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAPI } from "../../../hooks/useAPI";
import { useUserStore } from "../../../stores/userStore";
import { Button } from "../../Global/Button";
import { Input } from "../../Global/Input";

export const ForgotPasswordForm = () => {
  const [firstSecurityQuestion, setFirstSecuirtyQuestion] = useState<any>();
  const [secondSecurityQuestion, setSecondSecuirtyQuestion] = useState<any>();
  const [thirdSecurityQuestion, setThirdSecuirtyQuestion] = useState<any>();
  const { api } = useAPI();
  const { securityQuestions, usernameForSecurityQuestions } = useUserStore();

  function placeholderForSubmit() {
    return "clicked";
  }

  const getUserSecurityQuestions = async () => {
    const { data } = await api.appUserQuestionIdsList({
      Username: usernameForSecurityQuestions,
    });

    if (securityQuestions) {
      if (securityQuestions.firstSecurityQuestions) {
        const question = securityQuestions.firstSecurityQuestions.find(
          (question) => question.id === data.firstQuestionId,
        );
        if (question) setFirstSecuirtyQuestion(question.question);
      }

      if (securityQuestions.secondSecurityQuestions) {
        const question = securityQuestions.secondSecurityQuestions.find(
          (question) => question.id === data.secondQuestionId,
        );
        if (question) setSecondSecuirtyQuestion(question.question);
      }

      if (securityQuestions.thirdSecurityQuestions) {
        const question = securityQuestions.thirdSecurityQuestions.find(
          (question) => question.id === data.thirdQuestionId,
        );
        if (question) setThirdSecuirtyQuestion(question.question);
      }
    }

    return data;
  };

  useEffect(() => {
    getUserSecurityQuestions();
  }, []);

  return (
    <Container>
      <div>
        <h1>Security Questions</h1>
        <div>
          <label className="question">
            <span>Question #1:</span>
            <span>{firstSecurityQuestion}</span>
          </label>
          <label>
            <span>Answer:</span>
            <Input type="text" />
          </label>
        </div>
        <div>
          <label className="question">
            <span>Question #2:</span>
            <span>{secondSecurityQuestion}</span>
          </label>
          <label>
            <span>Answer:</span>
            <Input type="text" />
          </label>
        </div>
        <div>
          <label className="question">
            <span>Question #3:</span>
            <span>{thirdSecurityQuestion}</span>
          </label>
          <label>
            <span>Answer:</span>
            <Input type="text" />
          </label>
        </div>
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

const Container = styled(motion.main)`
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
