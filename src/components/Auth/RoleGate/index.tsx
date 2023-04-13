import styled from "styled-components";
import { StepsForSignUp } from "../../../stores/signUpStore";
import { glassBackground } from "../../../styles/helpers/glassBackground";

interface RoleGateProps {
  isCoordinator: boolean | null;
  setIsCoordinator: (isCoordinator: boolean) => void;
  changeCurrentStep: (step: StepsForSignUp) => void;
}

export const RoleGate = ({
  isCoordinator,
  setIsCoordinator,
  changeCurrentStep,
}: RoleGateProps) => {
  return (
    <Style.Container>
      <h1>Sign Up</h1>
      <p>
        Are you a teacher or food coordinator who is part of of a school
        currently running a power full kids program
      </p>
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
    </Style.Container>
  );
};

const Style = {
  Container: styled.main`
    ${glassBackground}
    padding: 40px;
    width: 550px;
    height: 356px;

    h1 {
      font-weight: 600;
      font-size: 40px;
      line-height: 52px;
    }

    .radio-buttons {
      display: flex;
      flex-direction: column;
      height: 70px;
      margin: 30px 0;
      justify-content: space-between;
    }
  `,
};
