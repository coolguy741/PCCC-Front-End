import { motion } from "framer-motion";
import styled from "styled-components";
import { animatedbackgroundGradient } from "../../styles/helpers/animatedBackgroundGradient";
import { convertToRelativeUnit as conv } from "../../styles/helpers/convertToRelativeUnits";
import { Header } from "../shared/Header/header";
import { FLHeader } from "./header";

interface Props {
  children: React.ReactNode;
}

export function FooterLinksLayout({ children }: Props) {
  return (
    <Style.Container layout layoutRoot>
      <Header />
      <FLHeader />
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

    ${() => animatedbackgroundGradient("var(--blue-200)", "#fff9e0")}
  `,
};
