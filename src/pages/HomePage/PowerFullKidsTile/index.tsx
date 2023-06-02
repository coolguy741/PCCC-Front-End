import { motion } from "framer-motion";
import styled from "styled-components";
import { animatedbackgroundGradient } from "../../../styles/helpers/animatedBackgroundGradient";

export const PowerFullKidsTile = () => {
  return (
    <Style.Container>
      <motion.img
        key="modal"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        src="/images/powerfullkids.svg"
        alt="powerfull kids"
      />
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
