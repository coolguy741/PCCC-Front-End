import styled from "styled-components";
import { Button } from "../../Global/Button";
import { Input } from "../../Global/Input";

interface AgeGateProps {
  setNav: (nav: number) => void;
}

export const AgeGate = ({ setNav }: AgeGateProps) => {
  return (
    <Container>
      <h1>Sign Up</h1>
      <h3>What year were you born?</h3>
      <div>
        <Input type="text" />
        <div className="back-button">
          <Button onClick={() => setNav(0)}>Back</Button>
        </div>
        <div className="next-button">
          <Button onClick={() => setNav(1)}>Continue</Button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  div {
    display: flex;
    flex-direction: column;
  }

  h1 {
    position: absolute;
    top: 7rem;
    left: 15rem;
  }

  .back-button {
    position: absolute;
    top: 10rem;
    left: 2rem;
  }

  .next-button {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
  }
`;
