import styled from "styled-components";
import { convertToRelativeUnit as conv } from "../../../styles/helpers/convertToRelativeUnits";
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
    display: flex;
    align-items: center;
    font-family: "Noir Std";
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    color: var(--neutral-700);
    margin: 1.2vh 0;
    cursor: pointer;
    width: ${conv(110, "vw")};
    padding: ${conv(10, "vh")} ${conv(10, "vw")};
    font-size: 1.5vh;
    justify-content: center;
    border-radius: 80px;
    transition: 0.2s all ease-in-out;

    svg {
      margin-right: 0.5vw;
      height: 1.5vh;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.65);
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      transition: 0.2s all ease-in-out;
    }
  `,
};
