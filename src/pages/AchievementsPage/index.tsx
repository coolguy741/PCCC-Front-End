import styled from "styled-components";
import { animatedbackgroundGradient } from "../../styles/helpers/animatedBackgroundGradient";

export const AchievementsPage = () => {
  return <Style.PageContainer />;
};

const Style = {
  PageContainer: styled.div`
    padding: 7vh 32px 2.5vh 64px;
    display: flex;
    height: 100vh;
    flex-direction: column;
    position: relative;
    max-height: 100vh;
    font-family: "Noir Std";
    font-style: normal;
    ${() => animatedbackgroundGradient("var(--blue-200)", "#fff9e0")};

    hgroup {
      display: flex;
      align-items: center;
      gap: 0.5vw;
      margin-bottom: 0.5vh;
    }

    h1 {
      color: var(--orange-500);

      img {
        height: 3.5vh;
      }
    }
  `,
};
