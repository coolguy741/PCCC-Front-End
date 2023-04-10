import styled from "styled-components";
import { SignInForm } from "../../../components/Auth/SignInForm";

export const SignInPage = () => {
  return (
    <Container>
      <SignInForm />
    </Container>
  );
};

const Container = styled.div`
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
`;