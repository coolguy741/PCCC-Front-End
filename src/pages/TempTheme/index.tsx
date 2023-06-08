import styled from "styled-components";
import { ThemeHeader } from "../../components/Theme/Header";
import { animatedbackgroundGradient } from "../../styles/helpers/animatedBackgroundGradient";
import { convertToRelativeUnit } from "../../styles/helpers/convertToRelativeUnits";

export const ThemeDemoPage = () => {
  return (
    <Style.Container>
      <ThemeHeader />
    </Style.Container>
  );
};

const Style = {
  Container: styled.section`
    padding: ${convertToRelativeUnit(40, "vw")};
    ${() => animatedbackgroundGradient("#C4E8FF", "#FFF9E0")}
    min-height: 100vh;
  `,
};
