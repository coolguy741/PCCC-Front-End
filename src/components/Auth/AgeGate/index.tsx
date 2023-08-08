import { motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

import { PROVINCES } from "../../../pages/consts";
import { useSignUpStore } from "../../../stores/signUpStore";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Button from "../../Button";
import { DropdownSelect } from "../../Global/DropdownSelect";
import { Input } from "../../Global/Input";
import { ArrowRight } from "../../Icons";

type AgeGateForm = {
  year: string | number;
  province: string;
};

export const AgeGate = () => {
  const {
    setBirthYear,
    setProvince,
    birthYear,
    province,
    setCurrentStep,
    setOver18,
  } = useSignUpStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      year: birthYear ?? "",
      province: province ?? "",
    },
  });

  const submitHandler = ({ year, province }: AgeGateForm) => {
    const currentYear = new Date().getFullYear();

    if (currentYear - parseInt(year.toString()) >= 18) {
      setOver18(true);
      setCurrentStep(1);
    } else {
      setOver18(false);
      setCurrentStep(2);
    }

    setBirthYear(parseInt(year.toString()));
    setProvince(province);
  };

  return (
    <Style.Container animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>Welcome</h1>
      <p>We will need some basic information to setup your account</p>
      <form onSubmit={handleSubmit(submitHandler)}>
        <h2>Sign up</h2>
        <fieldset>
          <label>What year were you born in?</label>
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
          <label>What is your province?</label>
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
                  onChange={(selectedOption) => field.onChange(selectedOption)}
                  width="100%"
                  height="5vh"
                />
              )}
            />
          </div>
        </fieldset>
        <Button size="small" fullWidth type="submit" data-testid="next">
          Continue to the next step
          <ArrowRight width="15" />
        </Button>
      </form>
    </Style.Container>
  );
};

const Style = {
  Container: styled(motion.main)`
    display: flex;
    flex-direction: column;
    width: 35vw;
    ${glassBackground}

    h1 {
      color: var(--neutral-800);
      font-weight: 700;
      font-size: 4vh;
    }

    label {
      font-size: 2vh;
      color: var(--neutral-600);
      margin: 1vh 0;
    }

    input {
      margin: 2vh 0;
      margin-right: 1vw;
    }

    p {
      margin-top: 1vh;
      font-size: 1.8vh;
      line-height: 125%;
      color: var(--neutral-600);
    }

    form > fieldset {
      margin-bottom: 1.5vh;
      height: 10vh;
    }

    h2 {
      margin-top: 3vh;
      margin-bottom: 2vh;
      font-size: 2.666vh;
      color: var(--neutral-800);
    }

    form {
      padding: 0;
      flex-grow: 1;
      display: flex;
      margin-top: 1vh;
      flex-direction: column;
    }

    button {
      margin-top: 2.5vh;
      svg {
        margin-left: 0.5vw;
      }
    }

    .province-select-container {
      width: 100%;
      margin-top: 2vh;
    }
  `,
};
