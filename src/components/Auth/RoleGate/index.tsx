import styled from "styled-components";
import { Button } from "../../Global/Button";

interface RoleGateProps {
  setNav: (nav: number) => void;
}

export const RoleGate = ({ setNav }: RoleGateProps) => {
  return (
    <Container>
      <h3>
        Are you a teacher or food coordinator who is part of a school currently
        running a power full kids program?
      </h3>
      <div className="radio-buttons">
        <label>
          <input type="radio" />
          Yes
        </label>
        <label>
          <input type="radio" />
          No
        </label>
      </div>
      <div className="back-button">
        <Button onClick={() => setNav(0)}>Back</Button>
      </div>
      <div className="next-button">
        <Button onClick={() => setNav(2)}>Next</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  h3 {
    max-width: 50rem;
  }
  .radio-buttons {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
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
