import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import styled from "styled-components";
import { useSignUpStore } from "../../../stores/signUpStore";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Button from "../../Button";
import { Input } from "../../Global/Input";
import { ArrowRight } from "../../Icons";

export const AgeGate = () => {
  const [_birthYear, _setBirthYear] = useState("");
  const [_province, _setProvince] = useState("");
  const setBirthYear = useSignUpStore((state) => state.setBirthYear);
  const setProvince = useSignUpStore((state) => state.setProvince);
  const over18 = useSignUpStore((state) => state.over18);
  const setOver18 = useSignUpStore((state) => state.setOver18);
  const changeStep = useSignUpStore((state) => state.changeStep);

  const submitHandler = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();

    const currentYear = new Date().getFullYear();

    if (_birthYear !== null && _province !== null) {
      if (currentYear - parseInt(_birthYear) >= 18) {
        setOver18(true);
        changeStep(1);
        console.log("OVER 18", currentYear - parseInt(_birthYear));
      } else {
        setOver18(false);
        changeStep(2);
        console.log("UNDER 18", currentYear - parseInt(_birthYear));
      }

      setBirthYear(parseInt(_birthYear));
      setProvince(_province);
    }
  };

  return (
    <Style.Container animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>Welcome</h1>
      <p>We will need some basic information to setup your account</p>
      <form onSubmit={submitHandler}>
        <h2>Sign up</h2>
        <fieldset>
          <label>What year were you born?</label>
          <div className="birth-split">
            <Input
              width="15%"
              placeholder="MM"
              required
              type="number"
              min="1"
              max="12"
            />
            <Input
              width="15%"
              placeholder="DD"
              required
              type="number"
              min="1"
              max="31"
            />
            <Input
              width="18%"
              placeholder="YYYY"
              type="number"
              min="1900"
              max="2023"
              onChange={(e) => _setBirthYear(e.target.value)}
              value={_birthYear}
              required
            />
          </div>
        </fieldset>
        <fieldset>
          <label>What is your province?</label>
          <Input
            type="text"
            onChange={(e) => _setProvince(e.target.value)}
            value={_province}
            width="67.5%"
            placeholder="Ontario"
            required
          />
        </fieldset>
        <Button size="small" fullWidth type="submit">
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
    height: 60vh;
    width: 500px;
    height: 600px;
    ${glassBackground}

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
