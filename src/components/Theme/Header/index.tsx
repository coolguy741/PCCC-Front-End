import styled from "styled-components";
import { animatedbackgroundGradient } from "../../../styles/helpers/animatedBackgroundGradient";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { Typography } from "../../Typography";
import CCLogo from "./icons/CCLogo";

export function ThemeHeader() {
  return (
    <Style.Container>
      <CCLogo />
      <Typography size="3.5vh" weight={700} color="white">
        Power Full Kids
        <span className="small-font">TM</span>
      </Typography>
    </Style.Container>
  );
}

const Style = {
  Container: styled.header`
    height: ${convertToRelativeUnit(100, "vh")};
    width: 100%;
    ${() => animatedbackgroundGradient("#4CDE96", "#4CDE96")}
    border-radius: 14px;
    padding: 0 ${convertToRelativeUnit(100, "vw")};
    display: flex;
    align-items: center;
    justify-content: space-between;

    .small-font {
      font-size: 1.25vh;
      vertical-align: super;
    }
  `,
};
