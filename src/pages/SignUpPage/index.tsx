import styled from "styled-components";
import { SignUpForm } from "../../components/SignUpForm";

export const SignUpPage = () => {
  return (
    <SignUpPageContainer>
      <SignUpForm />
    </SignUpPageContainer>
  );
};

const SignUpPageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
