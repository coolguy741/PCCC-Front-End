import { useState } from "react";
import styled from "styled-components";
import { AgeGate } from "../../../components/Auth/AgeGate";
import { DirectionLeft } from "../../../components/Icons";
import { animatedbackgroundGradient } from "../../../styles/helpers/animatedBackgroundGradient";
import { StepsForSignUp, useSignUpStore } from "./store";

function switchSignUpView(step: StepsForSignUp, setNav: any, setOver18: any) {
  switch (step) {
    case "age":
    default:
      return <AgeGate setNav={setNav} setOver18={setOver18} />;
  }
}

export const SignUpPage = () => {
  const [nav, setNav] = useState(0);
  const [eng, useEng] = useState(true);
  const [over18, setOver18] = useState(false);
  const [isCoordinator, setIsCoordinator] = useState<boolean | null>(null);
  const currentStep = useSignUpStore((state) => state.currentStep);

  return (
    <Style.Container>
      <span className="sign-up-breadcrump">
        <DirectionLeft />
        Back
      </span>
      {switchSignUpView(currentStep, setNav, setOver18)}
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    position: relative;
    padding: 32px;
    padding-top: 108px;

    .sign-up-breadcrump {
      font-family: "NoirStd-Regular";
      position: absolute;
      left: 32px;
      top: 162px;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 20px;
      display: flex;
      align-items: center;
    }

    ${() => animatedbackgroundGradient("#c4e8ff", "#fff9e0")}
  `,
};
