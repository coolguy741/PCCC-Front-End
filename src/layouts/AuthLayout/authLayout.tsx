import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { animatedbackgroundGradient } from "../../styles/helpers/animatedBackgroundGradient";
import { convertToRelativeUnit as conv } from "../../styles/helpers/convertToRelativeUnits";
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
    padding: ${conv(32, "vh")} ${conv(32, "vw")};
    padding-top: ${conv(108, "vh")};
    perspective: 1000px;
    z-index: 0;

    /* setting header to full width, no side menu for auth pages */
    header {
      width: 100%;
    }

    .auth-breadcrumb {
      position: absolute;
      left: ${conv(32, "vw")};
      top: ${conv(162, "vh")};
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: ${conv(20, "vh")};
    }

    .auth-image,
    .auth-image-right {
      position: absolute;
      z-index: 0;
      height: 50%;
      max-width: 30%;
      perspective: 500px;
      bottom: 0;
    }

    .auth-image {
      left: 0;
    }

    .auth-image-right {
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
