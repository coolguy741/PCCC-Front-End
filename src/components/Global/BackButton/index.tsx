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
  Container: styled.button`
    margin: 1.2vh 0;
    background: rgba(255, 255, 255, 0.65);
    width: 110px;
    padding: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 80px;
    font-size: 1.5vh;
    color: var(--neutral-700);

    svg {
      margin-right: 0.5vw;
      height: 1.5vh;
    }
  `,
};
