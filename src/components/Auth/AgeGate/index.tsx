import { motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

import { useSignUpStore } from "../../../stores/signUpStore";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Button from "../../Button";
import { Input } from "../../Global/Input";
import { ArrowRight } from "../../Icons";

type AgeGateForm = {
  year: string | number;
  month: string | number;
  date: string | number;
  province: string;
};

export const AgeGate = () => {
  const {
    setBirthYear,
    setBirthMonth,
    setBirthDate,
    setProvince,
    birthYear,
    birthDate,
    birthMonth,
    province,
    over18,
    changeStep,
    setOver18,
  } = useSignUpStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      year: birthYear ?? "",
      month: birthMonth ?? "",
      date: birthDate ?? "",
      province: province ?? "",
    },
  });

  const submitHandler = ({ year, month, date, province }: AgeGateForm) => {
    const currentYear = new Date().getFullYear();

    if (currentYear - parseInt(year.toString()) >= 18) {
      setOver18(true);
      changeStep(1);
    } else {
      setOver18(false);
      changeStep(2);
    }

    setBirthYear(parseInt(year.toString()));
    setBirthMonth(parseInt(month.toString()));
    setBirthDate(parseInt(date.toString()));
    setProvince(province);
  };

  return (
    <Style.Container animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>Welcome</h1>
      <p>We will need some basic information to setup your account</p>
      <form onSubmit={handleSubmit(submitHandler)}>
        <h2>Sign up</h2>
        <fieldset>
          <label>What year were you born?</label>
          <div className="birth-split">
            <Controller
              name="month"
              control={control}
              rules={{
                required: true,
                min: "1",
                max: "12",
              }}
              render={({ field }) => (
                <Input
                  width="15%"
                  placeholder="MM"
                  data-testid="month"
                  type="number"
                  className={errors.month ? "has-error" : ""}
                  {...field}
                />
              )}
            />
            <Controller
              name="date"
              rules={{
                required: true,
                min: "1",
                max: "31",
                validate: (value, { year, month, date }) =>
                  parseInt(value.toString()) ===
                  new Date(`${year}-${month}-${date} 00:00:00.000`).getDate(),
              }}
              control={control}
              render={({ field }) => (
                <Input
                  width="15%"
                  placeholder="DD"
                  className={errors.date ? "has-error" : ""}
                  data-testid="date"
                  type="number"
                  {...field}
                />
              )}
            />
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
                  width="18%"
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
          <Controller
            name="province"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <Input
                type="text"
                className={errors.province ? "has-error" : ""}
                width="100%"
                placeholder="Ontario"
                data-testid="province"
                height="40px"
                {...field}
                min="1900"
                max="2023"
              />
            )}
          />
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
    width: 500px;
    height: 560px;
    ${glassBackground}

    h1 {
      color: #3d3d3d;
      font-weight: 700;
    }

    label {
      font-size: 16px;
      color: var(--neutral-700);
      margin: 15px 0;
    }

    input {
      margin: 15px 0;
      margin-right: 15px;
    }

    p {
      margin-top: 12px;
      font-size: 18px;
      line-height: 24px;
      color: var(--neutral-700);
    }

    fieldset {
      margin-bottom: 15px;
    }

    h2 {
      margin-top: 24px;
      margin-bottom: 12px;
    }

    form {
      padding: 0;
      height: 400px;
      display: flex;
      margin-top: 15px;
      flex-direction: column;
    }

    button {
      margin-top: auto;
      svg {
        margin-left: 10px;
      }
    }
  `,
};
