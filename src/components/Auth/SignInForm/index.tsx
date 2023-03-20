import { Form } from "react-router-dom";
import styled from "styled-components";

export const SignInForm = () => {
  return (
    <Container>
      <input type="text" placeholder="Username" />
      <input type="text" placeholder="Password" />
      <button>Sign In</button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  input,
  button {
    box-sizing: border-box;
    padding: 10px;
    width: 300px;
    border-radius: 10px;
    border: 1px solid #888;
  }
`;
