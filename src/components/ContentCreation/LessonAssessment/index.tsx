import styled from "styled-components";
import { convertToRelativeUnit as conv } from "../../../styles/helpers/convertToRelativeUnits";

export const LessonAssessment = () => {
  return <Style.Container></Style.Container>;
};

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    border-radius: ${conv(32, "vh")};
    overflow: hidden;
    filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.1));
    backdrop-filter: blur(59.2764px);
  `,
};
