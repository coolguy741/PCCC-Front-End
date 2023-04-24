import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAPI } from "../../../hooks/useAPI";
import { useSignInStore } from "../../../stores/signInStore";
import { useUserStore } from "../../../stores/userStore";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Button from "../../Button";
import { Input } from "../../Global/Input";
import { Info } from "../../Icons";

export const SignInSecurity = () => {
  const [_firstQuestionAnswer, _setFirstQuestionAnswer] = useState("");
  const [_secondQuestionAnswer, _setSecondQuestionAnswer] = useState("");
  const [_thirdQuestionAnswer, _setThirdQuestionAnswer] = useState("");
  const [firstSecurityQuestion, setFirstSecuirtyQuestion] = useState<any>();
  const [secondSecurityQuestion, setSecondSecuirtyQuestion] = useState<any>();
  const [thirdSecurityQuestion, setThirdSecuirtyQuestion] = useState<any>();
  const { securityQuestions, usernameForSecurityQuestions } = useUserStore();
  const changeStep = useSignInStore((state) => state.changeStep);
  const setFirstQuestionAnswer = useUserStore(
    (state) => state.setFirstQuestionAnswer,
  );
  const setSecondQuestionAnswer = useUserStore(
    (state) => state.setSecondQuestionAnswer,
  );
  const setThirdQuestionAnswer = useUserStore(
    (state) => state.setThirdQuestionAnswer,
  );

  const { api } = useAPI();

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

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFirstQuestionAnswer(_firstQuestionAnswer);
    setSecondQuestionAnswer(_secondQuestionAnswer);
    setThirdQuestionAnswer(_thirdQuestionAnswer);

    changeStep(2);
  };

  return (
    <Style.Container
      onSubmit={submitHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Security questions</h1>
      <p className="security-info">
        <Info /> To verify it’s you, answer your security questions correctly
      </p>
      <fieldset>
        <label>
          <span>Question 1:</span>
          <span>{firstSecurityQuestion}</span>
        </label>
        <div>
          <p>Answer</p>
          <Input
            width="70%"
            onChange={(e) => _setFirstQuestionAnswer(e.target.value)}
            value={_firstQuestionAnswer}
            required
          />
        </div>
      </fieldset>
      <fieldset>
        <label>
          <span>Question 1:</span>
          <span>{secondSecurityQuestion}</span>
        </label>
        <div>
          <p>Answer</p>
          <Input
            width="70%"
            onChange={(e) => _setSecondQuestionAnswer(e.target.value)}
            value={_secondQuestionAnswer}
            required
          />
        </div>
      </fieldset>
      <fieldset>
        <label>
          <span>Question 1:</span>
          <span>{thirdSecurityQuestion}</span>
        </label>
        <div>
          <p>Answer</p>
          <Input
            width="70%"
            onChange={(e) => _setThirdQuestionAnswer(e.target.value)}
            value={_thirdQuestionAnswer}
            required
          />
        </div>
      </fieldset>
      <Button type="submit" fullWidth>
        Submit
      </Button>
    </Style.Container>
  );
};

const Style = {
  Container: styled(motion.form)`
    ${glassBackground};
    width: 650px;

    h1 {
      font-weight: 600;
      font-size: 33px;
      line-height: 40px;
      color: var(--neutral-900);
      margin-bottom: 12px;
    }

    p.security-info {
      display: flex;
      align-items: center;
      font-size: 16px;
      line-height: 20px;
      color: var(--neutral-700);
      margin-bottom: 32px;

      svg {
        margin-right: 12px;
      }
    }

    fieldset {
      margin-bottom: 20px;

      label {
        display: flex;
        align-items: center;
        justify-content: space-between;

        span:first-of-type {
          font-weight: 500;
          font-size: 20px;
          line-height: 25px;
          color: var(--neutral-700);
        }

        span:last-of-type {
          font-weight: 500;
          font-size: 19px;
          line-height: 24px;
          color: var(--neutral-700);
          width: 70%;
        }
      }

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 12px;
        height: 52px;

        p {
          font-size: 20px;
          line-height: 25px;
          color: var(--neutral-700);
          font-weight: 500;
        }
      }
    }

    button {
      margin-top: 30px;
    }
  `,
};
