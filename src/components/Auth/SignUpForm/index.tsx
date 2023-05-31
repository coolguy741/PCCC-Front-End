import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

import { useAPI } from "../../../hooks/useAPI";
import { avatars_data } from "../../../lib/avatars/data";
import { PROVINCES } from "../../../pages/consts";
import { useSignUpStore } from "../../../stores/signUpStore";
import {
  convertToRelativeUnit as conv,
  convertToRelativeUnit,
} from "../../../styles/helpers/convertToRelativeUnits";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Button from "../../Button";
import { DropdownSelect } from "../../Global/DropdownSelect";
import { Input } from "../../Global/Input";
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

  const getUsernames = useCallback(async () => {
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
  }, [api, firstUsername, secondUsername, setValue]);

  useEffect(() => {
    getUsernames();
  }, [getUsernames]);

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
          <fieldset>
            <label>Province</label>
            <div className="province-select-container">
              <Controller
                name="province"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <DropdownSelect
                    data-testid="province"
                    options={PROVINCES}
                    placeholder="Select Province"
                    className={errors.province ? "has-error" : ""}
                    onChange={(selectedOption) =>
                      field.onChange(selectedOption)
                    }
                    width="100%"
                    height={convertToRelativeUnit(48, "vh")}
                    selectedValue={province}
                  />
                )}
              />
            </div>
          </fieldset>
          {isCoordinator && (
            <>
              <fieldset>
                <label>PCCC School ID</label>
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
                <label>School name</label>
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
              <fieldset>
                <label htmlFor="title">Code</label>
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
              <DropdownSelect
                data-testid="first-username"
                options={firstNames ? firstNames : [""]}
                placeholder="Awesome"
                className={errors.firstUsername ? "has-error" : ""}
                onChange={(selectedOption) => field.onChange(selectedOption)}
                height={convertToRelativeUnit(48, "vh")}
                width="25%"
              />
            )}
          />

          <Controller
            name="secondUsername"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <DropdownSelect
                data-testid="second-username"
                options={secondNames ? secondNames : [""]}
                placeholder="Apple"
                className={errors.secondUsername ? "has-error" : ""}
                onChange={(selectedOption) => field.onChange(selectedOption)}
                height={convertToRelativeUnit(48, "vh")}
                width="30%"
              />
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
          <label>Choose Profile Picture</label>
          <div className="avatars">
            {/* TODO: Improve avatar animations */}
            {avatars_data.map((avatar, index) => (
              <Style.Button className="avatar" key={`avatar-${index}`}>
                {avatar.icon({})}
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
    padding-top: calc(- (${conv(108, "vh")} / 2));

    h1 {
      font-weight: 600;
      font-size: ${conv(30, "vh")};
      margin-bottom: ${conv(20, "vh")};
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
      padding-top: ${conv(100, "vh")};

      h2 {
        font-weight: 600;
        font-size: ${conv(20, "vh")};
        color: var(--neutral-900);
      }

      label {
        font-weight: 400;
        font-size: ${conv(16, "vh")};
        color: var(--neutral-700);
      }
    }

    .form {
      ${glassBackground};
      padding: ${conv(40, "vh")} ${conv(20, "vw")};
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 2.66vh;

      legend {
        font-weight: 600;
        font-size: ${conv(20, "vh")};
        margin-bottom: ${conv(25, "vh")};
      }

      fieldset {
        width: 100%;
        height: ${conv(45, "vh")};
        display: flex;
        align-items: center;
        justify-content: space-between;

        .birth-split {
          width: 60%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        }

        label {
          width: 35%;
          color: var(--neutral-700);
          font-weight: 400;
          font-size: ${conv(16, "vh")};
        }
      }
    }

    .avatars {
      margin-top: ${conv(20, "vh")};
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .username-selection {
      display: flex;
      margin: ${conv(15, "vh")} 0;
      align-items: center;
      justify-content: space-between;
      height: ${conv(52, "vh")};

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
      margin-top: ${conv(52, "vh")};
      margin-left: auto;
      width: ${conv(237, "vw")};

      svg {
        margin-left: ${conv(10, "vh")};
      }
    }

    .province-select-container {
      width: 60%;
    }
  `,
  Button: styled.button`
    width: 12.75%;
    aspect-ratio: 1 / 1;
    display: grid;
    place-items: center;
    background: none;
    border-radius: 50%;
    margin-bottom: ${conv(20, "vh")};
    transition: border 0.25s ease-in;
    border: ${conv(4, "vh")} solid white;
    position: relative;

    svg {
      position: absolute;
      width: calc(100% + ${conv(2, "vw")});
      aspect-ratio: 1 / 1;
      transition: width 0.25s linear, height 0.25s linear,
        transform 0.3s ease-out;
    }

    &:hover {
      border: ${conv(4, "vh")} solid rgba(0, 0, 0, 0.75);

      svg {
        width: calc(100% + ${conv(4, "vw")});
        transform: translate(${conv(1, "vh")}, ${conv(-1, "vw")});
      }
    }
  `,
};
