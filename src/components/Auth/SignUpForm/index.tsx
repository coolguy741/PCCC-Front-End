import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

import { useAPI } from "../../../hooks/useAPI";
import { avatars_data } from "../../../lib/avatars/data";
import { useSignUpStore } from "../../../stores/signUpStore";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Button from "../../Button";
import { Input } from "../../Global/Input";
import { Select } from "../../Global/Select";
import { ArrowRight } from "../../Icons";

type TSignUpForm = {
  name: string;
  title: string;
  year: string;
  province: string;
  schoolIdCode: string;
  schoolName: string;
  email: string;
  firstUsername: string;
  secondUsername: string;
  thirdUsername: string;
};

export const SignUpForm = () => {
  const [firstNames, setFirstNames] = useState<string[] | null | undefined>([]);
  const [secondNames, setSecondNames] = useState<string[] | null | undefined>(
    [],
  );
  const {
    setName,
    setTitle,
    changeStep,
    isCoordinator,
    birthYear,
    province,
    schoolIdCode,
    schoolName,
    firstUsername,
    secondUsername,
    thirdUsername,
    email,
    setBirthYear,
    setProvince,
    setFirstUsername,
    setSecondUsername,
    setThirdUsername,
    setSchoolIdCode,
    setSchoolName,
    setEmail,
  } = useSignUpStore();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      title: "",
      year: birthYear?.toString() ?? "",
      province: province ?? "",
      schoolIdCode,
      schoolName,
      email,
      firstUsername,
      secondUsername,
      thirdUsername,
    },
  });

  const { api } = useAPI();

  const getUsernames = async () => {
    const { data } = await api.appUsernameChoicesUsernameChoicesList();

    setFirstNames(data.firstNames);
    setSecondNames(data.secondNames);
    setValue(
      "firstUsername",
      firstUsername !== "" ? firstUsername : data.secondNames?.[0] ?? "",
      {
        shouldValidate: true,
        shouldDirty: true,
      },
    );
    setValue(
      "secondUsername",
      secondUsername !== "" ? secondUsername : data.secondNames?.[0] ?? "",
      {
        shouldValidate: true,
        shouldDirty: true,
      },
    );

    return data;
  };

  useEffect(() => {
    getUsernames();
  }, []);

  const submitHandler = ({
    name,
    title,
    schoolIdCode,
    schoolName,
    email,
    province,
    year,
    firstUsername,
    secondUsername,
    thirdUsername,
  }: TSignUpForm) => {
    if (isCoordinator) {
      setName(name);
      setTitle(title);
      setSchoolIdCode(schoolIdCode);
      setSchoolName(schoolName);
      setEmail(email);
    }

    setProvince(province);
    setBirthYear(parseInt(year));
    setFirstUsername(firstUsername);
    setSecondUsername(secondUsername);
    setThirdUsername(thirdUsername);
    changeStep(3);
  };

  return (
    <Style.Container
      onSubmit={handleSubmit(submitHandler)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      data-testid="signup-form"
    >
      <section className="sign-up">
        <h1>Sign Up</h1>
        <section className="form">
          <legend>Account Info</legend>
          {isCoordinator && (
            <>
              <fieldset>
                <label htmlFor="name">Name</label>
                <Controller
                  name="name"
                  control={control}
                  rules={{
                    required: isCoordinator,
                  }}
                  render={({ field }) => (
                    <Input
                      width="60%"
                      placeholder="John"
                      type="text"
                      id="name"
                      className={errors.name ? "has-error" : ""}
                      {...field}
                    />
                  )}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="title">Title</label>
                <Controller
                  name="title"
                  control={control}
                  rules={{
                    required: isCoordinator,
                  }}
                  render={({ field }) => (
                    <Input
                      width="60%"
                      placeholder="Student"
                      type="text"
                      id="title"
                      className={errors.title ? "has-error" : ""}
                      {...field}
                    />
                  )}
                />
              </fieldset>
            </>
          )}
          <fieldset>
            <label>Year of birth</label>
            <div className="birth-split">
              <Controller
                name="year"
                control={control}
                rules={{
                  required: true,
                  min: "1900",
                  max: "2023",
                }}
                render={({ field }) => (
                  <Input
                    width="100%"
                    placeholder="YYYY"
                    type="number"
                    data-testid="year"
                    className={errors.year ? "has-error" : ""}
                    {...field}
                  />
                )}
              />
            </div>
          </fieldset>
          {isCoordinator && (
            <>
              <fieldset>
                <label>School ID Code</label>
                <Controller
                  name="schoolIdCode"
                  control={control}
                  rules={{
                    required: isCoordinator,
                  }}
                  render={({ field }) => (
                    <Input
                      width="60%"
                      placeholder="1234567890"
                      type="text"
                      data-testid="school-code"
                      className={errors.schoolIdCode ? "has-error" : ""}
                      {...field}
                    />
                  )}
                />
              </fieldset>
              <fieldset>
                <label>School</label>
                <Controller
                  name="schoolName"
                  control={control}
                  rules={{
                    required: isCoordinator,
                  }}
                  render={({ field }) => (
                    <Input
                      width="60%"
                      placeholder="George Collage"
                      type="text"
                      data-testid="school-name"
                      className={errors.schoolName ? "has-error" : ""}
                      {...field}
                    />
                  )}
                />
              </fieldset>
            </>
          )}
          <fieldset>
            <label>Province</label>
            <Controller
              name="province"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <Input
                  width="60%"
                  placeholder="Ontario"
                  type="text"
                  data-testid="province"
                  className={errors.province ? "has-error" : ""}
                  {...field}
                />
              )}
            />
          </fieldset>
          {isCoordinator && (
            <fieldset>
              <label htmlFor="email">Email Address</label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: isCoordinator,
                }}
                render={({ field }) => (
                  <Input
                    width="60%"
                    placeholder="Johndoe@gmail.com"
                    type="email"
                    id="email"
                    className={errors.email ? "has-error" : ""}
                    {...field}
                  />
                )}
              />
            </fieldset>
          )}
        </section>
      </section>
      <section className="avatar-selection">
        <h2>Avatar Selection</h2>
        <article className="username-selection">
          <label>Username</label>
          <Controller
            name="firstUsername"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <Select
                data-testid="first-username"
                className={`${
                  errors.firstUsername ? "has-error" : ""
                } username-select`}
                {...field}
              >
                {firstNames &&
                  firstNames.map((name, index) => (
                    <option key={`firstName-${index}`} value={name}>
                      {name}
                    </option>
                  ))}
              </Select>
            )}
          />

          <Controller
            name="secondUsername"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <Select
                data-testid="second-username"
                className={`${
                  errors.secondUsername ? "has-error" : ""
                } username-select`}
                {...field}
              >
                {secondNames &&
                  secondNames.map((name, index) => (
                    <option key={`secondName-${index}`} value={name}>
                      {name}
                    </option>
                  ))}
              </Select>
            )}
          />
          <Controller
            name="thirdUsername"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="12345"
                type="text"
                data-testid="third-username"
                {...field}
              />
            )}
          />
        </article>
        <article className="choose-avatar">
          <label>Choose Avatar</label>
          <div className="avatars">
            {/* TODO: Improve avatar animations */}
            {avatars_data.map((avatar, index) => (
              <Style.Button className="avatar" key={`avatar-${index}`}>
                {avatar.icon()}
              </Style.Button>
            ))}
          </div>
        </article>
        <Button
          className="next"
          size="small"
          type="submit"
          data-testid="submit"
        >
          Next
          <ArrowRight />
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
    padding-top: calc(- (108px / 2));

    h1 {
      font-weight: 600;
      font-size: 30px;
      line-height: 35px;
      margin-bottom: 20px;
    }

    .sign-up {
      width: 45%;
      height: 100%;
    }

    .avatar-selection {
      width: 50%;
      height: auto;
      align-self: flex-end;
      display: flex;
      flex-direction: column;
      padding-top: 100px;

      h2 {
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
      }
    }

    .form {
      ${glassBackground};
      padding: 40px 20px;
      height: auto;

      legend {
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        margin-bottom: 25px;
      }

      fieldset {
        width: 100%;
        height: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;

        .birth-split {
          width: 60%;
          display: flex;
          justify-content: space-between;
          height: 100%;
        }

        label {
          width: 35%;
          color: var(--neutral-700);
          font-weight: 400;
          font-size: 1rem;
          line-height: 25px;
        }
      }
    }

    .avatars {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
    }

    .username-selection {
      display: flex;
      margin: 15px 0;
      align-items: center;
      justify-content: space-between;
      height: 52px;

      label {
        width: 20%;
      }

      fieldset {
        width: 25%;
      }

      input {
        width: 20%;
      }
    }

    button.next {
      margin-top: 20px;
      margin-left: auto;
      width: 237px;

      svg {
        margin-left: 10px;
      }
    }
  `,
  Button: styled.button`
    width: 75px;
    height: 75px;
    display: grid;
    place-items: center;
    background: none;
    border: 4px solid white;
    border-radius: 50%;
    margin-bottom: 20px;
    transition: border 0.25s ease-in;

    svg {
      position: absolute;
      width: 69px;
      height: 69px;
      transition: width 0.25s linear, height 0.25s linear,
        transform 0.3s ease-out;
    }

    &:hover {
      border: 4px solid rgba(0, 0, 0, 0.75);
      svg {
        width: 75px;
        height: 75px;
        transform: translate(2px, -2px);
      }
    }
  `,
};
