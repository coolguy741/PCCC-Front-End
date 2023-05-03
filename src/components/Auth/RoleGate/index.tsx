import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

import { useSignUpStore } from "../../../stores/signUpStore";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Button from "../../Button";
import { Input } from "../../Global/Input";
import { ArrowRight } from "../../Icons";

export const RoleGate = () => {
  const {
    setIsCoordinator,
    changeStep,
    setSchoolIdCode,
    isCoordinator,
    schoolIdCode,
    schoolName,
    setSchoolName,
  } = useSignUpStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      schoolIdCode,
      schoolName,
      role: isCoordinator,
    },
  });

  const [height, setHeight] = useState("368px");

  const submitHandler = ({
    schoolIdCode,
    schoolName,
  }: {
    schoolIdCode: string;
    schoolName: string;
  }) => {
    schoolIdCode && setSchoolIdCode(schoolIdCode);
    schoolName && setSchoolName(schoolName);
    changeStep(2);
  };

  function changeCoordinator(coor: boolean) {
    if (coor) {
      setIsCoordinator(true);
      setHeight("540px");
    } else {
      setIsCoordinator(false);
      setHeight("410px");
    }
  }

  useEffect(() => {
    if (isCoordinator === true) {
      setHeight("540px");
    } else if (isCoordinator === false) {
      setHeight("410px");
    }
  }, [isCoordinator]);

  return (
    <Style.Container
      height={height}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Sign Up</h1>
      <p className="sign-up-p">
        Are you a teacher or food coordinator who is part of of a school
        currently running a power full kids program
      </p>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="radio-buttons">
          <fieldset>
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <Input
                  type="radio"
                  id="yes"
                  {...field}
                  checked={!!isCoordinator}
                  onChange={() => changeCoordinator(true)}
                  value="yes"
                />
              )}
            />
            <label htmlFor="yes">Yes</label>
          </fieldset>

          <fieldset>
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <Input
                  type="radio"
                  id="no"
                  {...field}
                  checked={isCoordinator !== null && !isCoordinator}
                  onChange={() => changeCoordinator(false)}
                  value="no"
                />
              )}
            />
            <label htmlFor="no">No</label>
          </fieldset>
        </div>
        {isCoordinator && (
          <section className="role-coordinator">
            <p className="school-id">Please enter your School ID Code</p>

            <div className="rc-split">
              <Controller
                name="schoolIdCode"
                control={control}
                rules={{
                  required: !!isCoordinator,
                }}
                render={({ field }) => (
                  <Input
                    placeholder="1234"
                    data-testid="school-id"
                    type="text"
                    className={errors.schoolIdCode ? "has-error" : ""}
                    {...field}
                  />
                )}
              />
              <Controller
                name="schoolName"
                control={control}
                rules={{
                  required: !!isCoordinator,
                }}
                render={({ field }) => (
                  <Input
                    placeholder="School Name Here"
                    data-testid="school-name"
                    type="text"
                    className={errors.schoolName ? "has-error" : ""}
                    {...field}
                  />
                )}
              />
            </div>
            <p className="forgot-code" onClick={() => changeStep(4)}>
              Forgot Educator Code?
            </p>
          </section>
        )}
        {typeof isCoordinator === "boolean" && (
          <Button
            size="small"
            fullWidth
            type="submit"
            data-testid="submit"
            className="btn-submit"
          >
            Continue to the next step
            <ArrowRight width="15" />
          </Button>
        )}
      </form>
    </Style.Container>
  );
};

const Style = {
  Container: styled(motion.main)<{ height: string }>`
    ${glassBackground}
    padding: 40px;
    width: 500px;
    height: ${({ height }) => height};
    transition: height 0.2s linear;
    position: relative;

    h1 {
      font-weight: 600;
      font-size: 30px;
    }

    p {
      font-size: 20px;
      line-height: 24px;
      color: var(--neutral-700);
      margin-top: 12px;
    }

    .radio-buttons {
      display: flex;
      flex-direction: column;
      height: 70px;
      margin: 30px 0;
      justify-content: space-between;

      fieldset {
        display: flex;
        align-items: center;

        label {
          margin-left: 10px;
          font-size: 18px;
          line-height: 24px;
          color: var(--neutral-900);
        }
      }
    }

    .school-id {
      margin-bottom: 12px;
    }

    form {
      p {
        color: var(--neutral-700);
      }

      p:nth-of-type(2) {
        text-align: right;
      }

      button {
        margin-top: 50px;
        svg {
          margin-left: 10px;
        }
      }
    }

    .rc-split {
      display: flex;
      align-items: center;
      justify-content: space-between;

      input:first-of-type {
        width: 35%;
      }

      input:nth-of-type(2) {
        width: 60%;
      }
    }

    p.forgot-code {
      font-size: 15px;
    }
  `,
};
