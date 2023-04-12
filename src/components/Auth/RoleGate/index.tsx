import styled from "styled-components";
import { Button } from "../../Global/Button";
import { Input } from "../../Global/Input";

interface RoleGateProps {
  setNav: (nav: number) => void;
  isCoordinator: boolean | null;
  setIsCoordinator: (isCoordinator: boolean) => void;
}

export const RoleGate = ({
  setNav,
  isCoordinator,
  setIsCoordinator,
}: RoleGateProps) => {
  return (
    <Container>
      <h3>
        Are you a teacher or food coordinator who is part of a school currently
        running a power full kids program?
      </h3>
      <div className="radio-buttons">
        <label>
          <input
            type="radio"
            checked={isCoordinator === true}
            onChange={() => setIsCoordinator(true)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            checked={isCoordinator === false}
            onChange={() => setIsCoordinator(false)}
          />
          No
        </label>
      </div>
      {isCoordinator && (
        <div className="educator-code">
          <span>Please enter your Educator Code</span>
          <Input type="text" />
          <a href="#">Forgot your educator code?</a>
        </div>
      )}
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

  .educator-code {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 1rem;

    span {
      font-size: 1.2rem;
    }
  }

  .radio-buttons {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
  }

  .back-button {
    position: absolute;
    top: 8rem;
    left: 2rem;
  }

  .next-button {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
  }
`;
