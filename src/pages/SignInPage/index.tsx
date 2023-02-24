import styled from "styled-components";
import { SignInForm } from "../../components/SignInForm";

export const SignInPage = () => {
  return (
    <SignInPageContainer>
      <SignInForm />
    </SignInPageContainer>
  );
};

const SignInPageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
