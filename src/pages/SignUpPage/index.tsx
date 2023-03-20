import { useState } from "react";
import styled from "styled-components";
import { AgeGate } from "../../components/Auth/AgeGate";
import { RoleGate } from "../../components/Auth/RoleGate";
import { SecurityQuestions } from "../../components/Auth/SecurityQuestions";
import { SignUpForm } from "../../components/Auth/SignUpForm";

export const SignUpPage = () => {
  const [nav, setNav] = useState(0);
  const [eng, useEng] = useState(true);
  const [over18, setOver18] = useState(false);

  return (
    <Container>
      {nav === 0 && <AgeGate setNav={setNav} />}
      {nav === 1 && <RoleGate setNav={setNav} />}
      {nav === 2 && <SignUpForm setNav={setNav} />}
      {nav === 3 && <SecurityQuestions setNav={setNav} />}
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-size: cover;
  background-image: url("/images/background.svg");
  background-position: center center;
  background-repeat: no-repeat;
  color: #3d3d3d;
`;
