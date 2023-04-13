import { FormEvent, useState } from "react";
import styled from "styled-components";
import { useSignUpStore } from "../../../stores/signUpStore";
import Button from "../../Button";
import { Input } from "../../Global/Input";
import { ArrowRight } from "../../Icons";

export const AgeGate = () => {
  const [_birthYear, _setBirthYear] = useState("");
  const [_province, _setProvince] = useState("");
  const setBirthYear = useSignUpStore((state) => state.setBirthYear);
  const setProvince = useSignUpStore((state) => state.setProvince);
  const setOver18 = useSignUpStore((state) => state.setOver18);
  const changeStep = useSignUpStore((state) => state.changeStep);

  const submitHandler = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();

    const currentYear = new Date().getFullYear();

    if (_birthYear !== null && _province !== null) {
      if (currentYear - parseInt(_birthYear) >= 18) {
        setOver18(true);
        changeStep("role");
      } else {
        setOver18(false);
        changeStep("input-information");
      }

      setBirthYear(parseInt(_birthYear));
      setProvince(_province);
    }
  };

  return (
    <Style.Container>
      <h1>Welcome</h1>
      <p>We will need some basic information to setup your account</p>
      <form onSubmit={submitHandler}>
        <h2>Sign up</h2>
        <fieldset>
          <label>What year were you born?</label>
          <Input
            type="text"
            onChange={(e) => _setBirthYear(e.target.value)}
            value={_birthYear}
          />
        </fieldset>
        <fieldset>
          <label>What is your province?</label>
          <Input
            type="text"
            onChange={(e) => _setProvince(e.target.value)}
            value={_province}
          />
        </fieldset>
        <Button size="small" fullWidth onClick={(e) => submitHandler(e)}>
          Continue to the next step
          <ArrowRight width="15" />
        </Button>
      </form>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 7.78814px 19.4703px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    padding: 45px 40px;
    border-radius: 24px;
    height: 60vh;
    width: 440px;
    height: 540px;

    h1,
    h2 {
      margin: 0;
      padding: 0;
    }

    h1 {
      font-weight: 600;
      font-size: 40px;
      line-height: 52px;
    }

    label {
      font-family: "Noir Std";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 32px;
    }

    fieldset {
      margin: 0;
      padding: 0;
      border: none;
      margin-bottom: 15px;
    }

    form {
      padding: 0;
      height: 350px;
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
