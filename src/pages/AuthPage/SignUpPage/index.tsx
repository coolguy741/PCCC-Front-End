import { useState } from "react";
import styled from "styled-components";
import { AgeGate } from "../../../components/Auth/AgeGate";
import { RoleGate } from "../../../components/Auth/RoleGate";
import { SecurityQuestions } from "../../../components/Auth/SecurityQuestions";
import { SignUpForm } from "../../../components/Auth/SignUpForm";

export const SignUpPage = () => {
  const [nav, setNav] = useState(0);
  const [eng, useEng] = useState(true);
  const [over18, setOver18] = useState(false);
  const [isCoordinator, setIsCoordinator] = useState<boolean | null>(null);

  return (
    <Style.Container>
      <h1>Sign up</h1>
      {nav === 0 && <AgeGate setNav={setNav} setOver18={setOver18} />}
      {nav === 1 && (
        <RoleGate
          setNav={setNav}
          isCoordinator={isCoordinator}
          setIsCoordinator={setIsCoordinator}
        />
      )}
      {nav === 2 && <SignUpForm setNav={setNav} over18={over18} />}
      {nav === 3 && <SecurityQuestions setNav={setNav} />}
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 15rem;
    padding-top: 5rem;

    background-size: cover;
    background-image: url("/images/background.svg");
    background-position: center center;
    background-repeat: no-repeat;
    color: #3d3d3d;
  `,
};
