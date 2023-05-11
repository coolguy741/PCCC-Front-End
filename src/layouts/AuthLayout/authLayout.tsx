import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { animatedbackgroundGradient } from "../../styles/helpers/animatedBackgroundGradient";
import { Header } from "../shared/Header/header";

interface Props {
  children: React.ReactNode;
}

export function AuthLayout({ children }: Props) {
  return (
    <Style.Container layout layoutRoot>
      <Header />
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </Style.Container>
  );
}

const Style = {
  Container: styled(motion.div)`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    position: relative;
    padding: 32px;
    padding-top: 108px;
    perspective: 1000px;
    z-index: 0;

    /* setting header to full width, no side menu for auth pages */
    header {
      width: 100%;
    }

    .auth-breadcrumb {
      position: absolute;
      left: 32px;
      top: 162px;
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
    }

    .auth-image {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 0;
      max-width: 30%;
      perspective: 500px;

      svg {
        width: 100%;
        position: absolute;
      }
    }

    .auth-image-right {
      left: unset;
      right: 0;
    }

    main,
    form {
      z-index: 1;
      perspective: 250px;
    }

    ${() => animatedbackgroundGradient("var(--blue-200)", "#fff9e0")}
  `,
};
