import styled from "styled-components";
import { SignInForm } from "../../components/Auth/SignInForm";

export const SignInPage = () => {
  return (
    <SignInPageContainer>
      <SignInForm />
    </SignInPageContainer>
  );
};

const SignInPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-position: center center;
  background-repeat: no-repeat;
  background-image: url("/images/background.svg");
  color: #3d3d3d;
  background-size: cover;
  box-sizing: border-box;

  & * {
    box-sizing: border-box;
  }
`;
