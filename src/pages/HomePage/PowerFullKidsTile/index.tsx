import Lottie from "react-lottie";
import styled from "styled-components";
import animationData from "../../../assets/animations/landing.json";
import { animatedbackgroundGradient } from "../../../styles/helpers/animatedBackgroundGradient";

export const PowerFullKidsTile = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Style.Container>
      <Lottie options={defaultOptions} isClickToPauseDisabled />
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
    padding: 0 5vw;
    padding-left: 7.5vw;

    img {
      max-width: 75vw;
    }
    ${() => animatedbackgroundGradient("var(--blue-200)", "#fff9e0")};
  `,
};
