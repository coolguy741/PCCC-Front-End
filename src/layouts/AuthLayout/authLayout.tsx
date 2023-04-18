import styled from "styled-components";
import { animatedbackgroundGradient } from "../../styles/helpers/animatedBackgroundGradient";

interface Props {
  children: React.ReactNode;
}

export function AuthLayout({ children }: Props) {
  return <Style.Container>{children}</Style.Container>;
}

const Style = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    position: relative;
    padding: 32px;
    padding-top: 108px;
    perspective: 1000px;

    .auth-breadcrumb {
      font-family: "Noir Std";
      position: absolute;
      left: 32px;
      top: 162px;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 20px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
    }

    .auth-image {
      position: absolute;
      bottom: -10px;
      left: 0;
      z-index: 0;
      max-width: 30%;
      perspective: 500px;

      svg {
        width: 100%;
      }
    }

    main,
    form {
      z-index: 1;
      perspective: 250px;
    }

    ${() => animatedbackgroundGradient("#c4e8ff", "#fff9e0")}
  `,
};
