import { motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

import { useSignInStore } from "../../../stores/signInStore";
import { useUserStore } from "../../../stores/userStore";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Button from "../../Button";
import { Input } from "../../Global/Input";
import { Info } from "../../Icons";

export const SignInSecurity = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstQuestionAnswer: "",
      secondQuestionAnswer: "",
      thirdQuestionAnswer: "",
    },
  });
  const {
    securityQuestions,
    firstQuestionId,
    secondQuestionId,
    thirdQuestionId,
    setFirstQuestionAnswer,
    setSecondQuestionAnswer,
    setThirdQuestionAnswer,
  } = useUserStore();
  const { changeStep } = useSignInStore();

  const submitHandler = ({
    firstQuestionAnswer,
    secondQuestionAnswer,
    thirdQuestionAnswer,
  }: {
    firstQuestionAnswer: string;
    secondQuestionAnswer: string;
    thirdQuestionAnswer: string;
  }) => {
    setFirstQuestionAnswer(firstQuestionAnswer);
    setSecondQuestionAnswer(secondQuestionAnswer);
    setThirdQuestionAnswer(thirdQuestionAnswer);

    changeStep(2);
  };

  return (
    <Style.Container
      onSubmit={handleSubmit(submitHandler)}
      layout
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
          <span>
            {
              securityQuestions?.firstSecurityQuestions?.find(
                (question) => question.id === firstQuestionId,
              )?.question
            }
          </span>
        </label>
        <div>
          <p>Answer</p>
          <Controller
            name="firstQuestionAnswer"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <Input
                width="70%"
                data-testid="answer-1"
                className={errors.firstQuestionAnswer ? "has-error" : ""}
                type="text"
                {...field}
              />
            )}
          />
        </div>
      </fieldset>
      <fieldset>
        <label>
          <span>Question 2:</span>
          <span>
            {
              securityQuestions?.secondSecurityQuestions?.find(
                (question) => question.id === secondQuestionId,
              )?.question
            }
          </span>
        </label>
        <div>
          <p>Answer</p>
          <Controller
            name="secondQuestionAnswer"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <Input
                width="70%"
                data-testid="answer-2"
                className={errors.secondQuestionAnswer ? "has-error" : ""}
                type="text"
                {...field}
              />
            )}
          />
        </div>
      </fieldset>
      <fieldset>
        <label>
          <span>Question 3:</span>
          <span>
            {
              securityQuestions?.thirdSecurityQuestions?.find(
                (question) => question.id === thirdQuestionId,
              )?.question
            }
          </span>
        </label>
        <div>
          <p>Answer</p>
          <Controller
            name="thirdQuestionAnswer"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <Input
                width="70%"
                data-testid="answer-3"
                className={errors.thirdQuestionAnswer ? "has-error" : ""}
                type="text"
                {...field}
              />
            )}
          />
        </div>
      </fieldset>
      <Button type="submit" fullWidth data-testid="submit">
        Submit
      </Button>
    </Style.Container>
  );
};

const Style = {
  Container: styled(motion.form)`
    ${glassBackground};
    width: ${convertToRelativeUnit(650, "vw")};

    h1 {
      font-weight: 600;
      font-size: ${convertToRelativeUnit(32, "vh")};
      line-height: 125%;
      color: var(--neutral-900);
      margin-bottom: ${convertToRelativeUnit(12, "vh")};
    }

    p.security-info {
      display: flex;
      align-items: center;
      font-size: ${convertToRelativeUnit(16, "vh")};
      line-height: 125%;
      color: var(--neutral-700);
      margin-bottom: ${convertToRelativeUnit(32, "vh")};

      svg {
        margin-right: ${convertToRelativeUnit(12, "vh")};
      }
    }

    fieldset {
      margin-bottom: ${convertToRelativeUnit(20, "vh")};

      label {
        display: flex;
        align-items: center;
        justify-content: space-between;

        span:first-of-type {
          font-weight: 500;
          font-size: ${convertToRelativeUnit(20, "vh")};
          line-height: 125%;
          color: var(--neutral-700);
        }

        span:last-of-type {
          font-weight: 500;
          font-size: ${convertToRelativeUnit(19, "vh")};
          line-height: 125%;
          color: var(--neutral-700);
          width: 70%;
        }
      }

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: ${convertToRelativeUnit(12, "vh")};
        height: ${convertToRelativeUnit(52, "vh")};

        p {
          font-size: ${convertToRelativeUnit(20, "vh")};
          line-height: 125%;
          color: var(--neutral-700);
          font-weight: 500;
        }
      }
    }

    button {
      margin-top: ${convertToRelativeUnit(30, "vh")};
    }
  `,
};
