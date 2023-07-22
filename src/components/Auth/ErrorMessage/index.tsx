import styled from "styled-components";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";

export const ErrorMessage = ({ error }: { error: string }) => {
  return (
    <Container>
      <img src="/images/error.svg" />
      {error}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #fef1f2;
  padding: 0.25rem 0.5rem;
  margin: 1rem 0;
  border-radius: 0.25rem;
  color: var(--neutral-800);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${convertToRelativeUnit(14, "vh")};
`;
