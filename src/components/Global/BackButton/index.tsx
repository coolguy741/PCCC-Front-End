import styled from "styled-components";
import { ArrowLeft } from "../../Icons";

interface BackButtonProps {
  onClick?: () => void;
}
export const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <Style.Container onClick={onClick}>
      <ArrowLeft />
      Back
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    align-items: center;
    font-family: "Noir Std";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: var(--neutral-500);
    cursor: pointer;

    svg {
      margin-right: 15px;
    }
  `,
};
