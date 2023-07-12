import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useAPI } from "../../../hooks/useAPI";
import { useSignUpStore } from "../../../stores/signUpStore";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Button from "../../Button";
import { DropdownSelect, SelectOption } from "../../Global/DropdownSelect";
import { Input } from "../../Global/Input";
import { Info } from "../../Icons";
import { ErrorMessage } from "../ErrorMessage";

interface SecurityQuestion {
  id?: string;
  question?: string | null;
}

export const SecurityQuestions = () => {
  const { api } = useAPI();
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const [isPassword6Chars, setIsPassword6Chars] = useState<boolean>(false);
  const [isPasswordLowercase, setIsPasswordLowercase] =
    useState<boolean>(false);
  const [isPasswordUppercase, setIsPasswordUppercase] =
    useState<boolean>(false);
  const [isPasswordNumber, setIsPasswordNumber] = useState<boolean>(false);
  const [isPasswordSpecialChar, setIsPasswordSpecialChar] =
    useState<boolean>(false);
  const [firstSecurityQuestions, setFirstSecurityQuestions] = useState<
    SecurityQuestion[] | null | undefined
  >([]);
  const [secondSecurityQuestions, setSecondSecurityQuestions] = useState<
    SecurityQuestion[] | null | undefined
  >([]);
  const [thirdSecurityQuestions, setThirdSecurityQuestions] = useState<
    SecurityQuestion[] | null | undefined
  >([]);
  const {
    birthYear,
    email,
    province,
    firstUsername,
    secondUsername,
    thirdUsername,
    name,
    title,
    schoolIdCode,
    schoolName,
    isCoordinator,
    init,
  } = useSignUpStore();

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
      firstSecurityAnswer: "",
      secondSecurityAnswer: "",
      thirdSecurityAnswer: "",
      firstSecurityQuestionId: "",
      secondSecurityQuestionId: "",
      thirdSecurityQuestionId: "",
    },
  });

  const getSecurityQuestions = useCallback(async () => {
    const { data } =
      await api.appSecurityQuestionChoicesSecurityQuestionsList();

    setFirstSecurityQuestions(data.firstSecurityQuestions);
    setSecondSecurityQuestions(data.secondSecurityQuestions);
    setThirdSecurityQuestions(data.thirdSecurityQuestions);

    return data;
  }, [api]);

  useEffect(() => {
    getSecurityQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitHandler = async ({
    password,
    firstSecurityQuestionId,
    firstSecurityAnswer,
    secondSecurityQuestionId,
    secondSecurityAnswer,
    thirdSecurityQuestionId,
    thirdSecurityAnswer,
  }: {
    password: string;
    firstSecurityQuestionId: string;
    firstSecurityAnswer: string;
    secondSecurityQuestionId: string;
    secondSecurityAnswer: string;
    thirdSecurityQuestionId: string;
    thirdSecurityAnswer: string;
  }) => {
    setError("");

    try {
      if (isCoordinator) {
        const response = await api.appUserProfessionalCreate({
          birthYear,
          province,
          username: `${firstUsername}${secondUsername}${thirdUsername}`,
          password,
          email,
          name,
          title,
          schoolIdCode,
          school: schoolName,
          firstSecurityQuestionId,
          firstSecurityQuestionAnswer: firstSecurityAnswer,
          secondSecurityQuestionId,
          secondSecurityQuestionAnswer: secondSecurityAnswer,
          thirdSecurityQuestionId,
          thirdSecurityQuestionAnswer: thirdSecurityAnswer,
        });

        if (response.status === 204) {
          init();
          navigate("/signin");
        } else {
          console.log(response);
        }
      } else {
        const response = await api.appUserCreate({
          birthYear,
          province,
          username: `${firstUsername}${secondUsername}${thirdUsername}`,
          password,
          firstSecurityQuestionId,
          firstSecurityQuestionAnswer: firstSecurityAnswer,
          secondSecurityQuestionId,
          secondSecurityQuestionAnswer: secondSecurityAnswer,
          thirdSecurityQuestionId,
          thirdSecurityQuestionAnswer: thirdSecurityAnswer,
        });

        if (response.status === 204) {
          init();
          navigate("/signin");
        }
      }
    } catch (error) {
      // @ts-ignore
      setError(error.response.data.error.details);
    }
  };

  useEffect(() => {
    if (watch("password").length >= 6) {
      setIsPassword6Chars(true);
    } else {
      setIsPassword6Chars(false);
    }

    if (/[A-Z]/.test(watch("password"))) {
      setIsPasswordUppercase(true);
    } else {
      setIsPasswordUppercase(false);
    }

    if (/[a-z]/.test(watch("password"))) {
      setIsPasswordLowercase(true);
    } else {
      setIsPasswordLowercase(false);
    }

    if (/[0-9]/.test(watch("password"))) {
      setIsPasswordNumber(true);
    } else {
      setIsPasswordNumber(false);
    }

    //eslint-disable-next-line
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(watch("password"))) {
      setIsPasswordSpecialChar(true);
    } else {
      setIsPasswordSpecialChar(false);
    }
  }, [watch("password")]);

  return (
    <Style.Container
      onSubmit={handleSubmit(submitHandler)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      isPasswordLowercase={isPasswordLowercase}
      isPassword6Chars={isPassword6Chars}
      isPasswordNumber={isPasswordNumber}
      isPasswordSpecialChar={isPasswordSpecialChar}
      isPasswordUppercase={isPasswordUppercase}
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
            <Controller
              name="password"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <Input
                  width="65%"
                  type="password"
                  data-testid="password"
                  id="password"
                  className={errors.password ? "has-error" : ""}
                  {...field}
                />
              )}
            />
          </fieldset>
          <fieldset>
            <label>Retype Password</label>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: true,
                validate: (value: string) => watch("password") === value,
              }}
              render={({ field }) => (
                <Input
                  width="65%"
                  type="password"
                  data-testid="confirm-password"
                  className={errors.confirmPassword ? "has-error" : ""}
                  {...field}
                />
              )}
            />
          </fieldset>
          {error && <ErrorMessage error={error} />}
          <div className="requirements">
            <div className="six-chars">
              <span />
              At least 6 characters
            </div>
            <div className="lowercase">
              <span />
              One lowercase character
            </div>
            <div className="uppercase">
              <span />
              One uppercase character
            </div>
            <div className="number-special">
              <span />
              One number and special character
            </div>
          </div>
        </article>
      </section>

      <section className="questions">
        <h2>Security Questions</h2>
        <fieldset>
          <label>Question 1:</label>
          <Controller
            name="firstSecurityQuestionId"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => {
              const options: SelectOption[] = firstSecurityQuestions
                ? firstSecurityQuestions.map((question) => ({
                    label: question.question || "",
                    value: question.id || "",
                  }))
                : [{ label: "", value: "" }];

              return (
                <DropdownSelect
                  data-testid="first-security-question"
                  options={options}
                  className={errors.firstSecurityQuestionId ? "has-error" : ""}
                  onChange={(selectedOption) => field.onChange(selectedOption)}
                  width="75%"
                  height={convertToRelativeUnit(48, "vh")}
                />
              );
            }}
          />
        </fieldset>
        <fieldset>
          <label>Answer</label>
          <Controller
            name="firstSecurityAnswer"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <Input
                width="75%"
                className={errors.firstSecurityAnswer ? "has-error" : ""}
                type="text"
                data-testid="first-security-answer"
                {...field}
              />
            )}
          />
        </fieldset>
        <fieldset>
          <label>Question 2:</label>
          <Controller
            name="secondSecurityQuestionId"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => {
              const options: SelectOption[] = secondSecurityQuestions
                ? secondSecurityQuestions.map((question) => ({
                    label: question.question || "",
                    value: question.id || "",
                  }))
                : [{ label: "", value: "" }];

              return (
                <DropdownSelect
                  data-testid="second-security-question"
                  options={options}
                  className={errors.secondSecurityQuestionId ? "has-error" : ""}
                  onChange={(selectedOption) => field.onChange(selectedOption)}
                  width="75%"
                  height={convertToRelativeUnit(48, "vh")}
                />
              );
            }}
          />
        </fieldset>
        <fieldset>
          <label>Answer</label>
          <Controller
            name="secondSecurityAnswer"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <Input
                width="75%"
                className={errors.secondSecurityAnswer ? "has-error" : ""}
                type="text"
                data-testid="second-security-answer"
                {...field}
              />
            )}
          />
        </fieldset>
        <fieldset>
          <label>Question 3:</label>
          <Controller
            name="thirdSecurityQuestionId"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => {
              const options: SelectOption[] = thirdSecurityQuestions
                ? thirdSecurityQuestions.map((question) => ({
                    label: question.question || "",
                    value: question.id || "",
                  }))
                : [{ label: "", value: "" }];

              return (
                <DropdownSelect
                  data-testid="third-security-question"
                  options={options}
                  className={errors.thirdSecurityQuestionId ? "has-error" : ""}
                  onChange={(selectedOption) => field.onChange(selectedOption)}
                  width="75%"
                  height={convertToRelativeUnit(48, "vh")}
                />
              );
            }}
          />
        </fieldset>
        <fieldset>
          <label>Answer</label>
          <Controller
            name="thirdSecurityAnswer"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <Input
                width="75%"
                className={errors.thirdSecurityAnswer ? "has-error" : ""}
                type="text"
                data-testid="third-security-answer"
                {...field}
              />
            )}
          />
        </fieldset>
        <Button type="submit" size="large" data-testid="submit">
          Submit
        </Button>
      </section>
    </Style.Container>
  );
};

const Style = {
  Container: styled(motion.form)<{
    isPassword6Chars: boolean;
    isPasswordLowercase: boolean;
    isPasswordUppercase: boolean;
    isPasswordNumber: boolean;
    isPasswordSpecialChar: boolean;
  }>`
    width: 80%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h1 {
      font-weight: 600;
      font-size: ${convertToRelativeUnit(36, "vh")};
      margin-bottom: ${convertToRelativeUnit(24, "vh")};
    }

    h2 {
      font-weight: 600;
      font-size: ${convertToRelativeUnit(25, "vh")};
      color: var(--neutral-900);
      margin-bottom: ${convertToRelativeUnit(24, "vh")};
    }

    label {
      color: var(--neutral-700);
      font-weight: 400;
      font-size: ${convertToRelativeUnit(16, "vh")};
    }

    .sign-up-password {
      width: 45%;
      height: 100%;

      p {
        display: flex;
        font-size: ${convertToRelativeUnit(16, "vh")};
        color: var(--neutral-700);
        position: relative;
        align-items: center;

        svg {
          margin-right: ${convertToRelativeUnit(15, "vw")};
          width: ${convertToRelativeUnit(24, "vh")};
          aspect-ratio: 1 / 1;
        }
      }

      .password {
        ${glassBackground};
        margin-top: ${convertToRelativeUnit(35, "vh")};

        .requirements {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;

          div {
            color: var(--neutral-600);
            display: flex;
            align-items: center;
            gap: 1rem;
            font-size: ${convertToRelativeUnit(16, "vh")};

            span {
              display: block;
              box-shadow: 0 0 0 1px var(--neutral-500);
              width: 17px;
              height: 17px;
              border-radius: 50%;
            }
          }

          .six-chars {
            span {
              background-color: ${(props) =>
                props.isPassword6Chars ? "var(--green-500)" : ""};
            }
          }

          .lowercase {
            span {
              background-color: ${(props) =>
                props.isPasswordLowercase ? "var(--green-500)" : ""};
            }
          }

          .uppercase {
            span {
              background-color: ${(props) =>
                props.isPasswordUppercase ? "var(--green-500)" : ""};
            }
          }

          .number-special {
            span {
              background-color: ${(props) =>
                props.isPasswordNumber && props.isPasswordSpecialChar
                  ? "var(--green-500)"
                  : ""};
            }
          }
        }
      }

      // TODO: Make unique component, avoid repetition.
      fieldset {
        width: 100%;
        height: ${convertToRelativeUnit(52, "vh")};
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: ${convertToRelativeUnit(15, "vh")};
      }
    }

    .questions {
      width: 50%;
      align-self: flex-end;
      height: 95%;

      h2 {
        font-weight: 600;
        font-size: ${convertToRelativeUnit(33, "vh")};
      }

      & > fieldset {
        display: flex;
        height: ${convertToRelativeUnit(52, "vh")};
        margin-bottom: ${convertToRelativeUnit(24, "vh")};
        align-items: center;
        justify-content: space-between;
      }

      button {
        margin-left: auto;
        height: ${convertToRelativeUnit(52, "vh")};
      }
    }
  `,
};
