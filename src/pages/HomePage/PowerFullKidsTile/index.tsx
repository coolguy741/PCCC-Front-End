import { motion } from "framer-motion";
import styled from "styled-components";
import { animatedbackgroundGradient } from "../../../styles/helpers/animatedBackgroundGradient";

export const PowerFullKidsTile = () => {
  return (
    <style.PageContainer>
      <style.Content>
        <motion.img
          key="modal"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          src="/images/powerfullkids.svg"
          alt="powerfullkids"
        />
      </style.Content>
      <style.Background />
    </style.PageContainer>
  );
};

const style = {
  PageContainer: styled.div`
    min-height: calc(100vh);
    display: flex;
    align-items: center;
    padding-left: 136px;
    margin-left: -136px;
  `,
  Content: styled.div`
    width: 100%;
    margin: 0px;
    padding-left: 16.66%;

    img {
      width: 68.8%;
    }
  `,
  Background: styled.div`
    position: absolute;
    top: 0;
    left: -32px;
    width: calc(100% + 32px);
    height: 100vh;
    z-index: -1;
    overflow: hidden;
    ${() => animatedbackgroundGradient("var(--blue-200)", "#fff9e0")}
  `,
  EllipseGroup: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
  `,
  Ellipse1: styled.div`
    position: absolute;
    width: 1257.76px;
    height: 1208.35px;
    left: -324.21px;
    top: -261.28px;
    background: var(--green-200);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    border-radius: 100%;
    transparent: 1%;
  `,
  Ellipse2: styled.div`
    position: absolute;
    width: 1437.31px;
    height: 1049.09px;
    left: -355.65px;
    top: 505.1px;
    background: var(--green-300);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    border-radius: 100%;
  `,
  Ellipse3: styled.div`
    position: absolute;
    width: 1089.27px;
    height: 962.16px;
    left: -544.64px;
    top: -301.06px;
    background: var(--blue-300);
    opacity: 0.68;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    border-radius: 100%;
  `,
  Ellipse4: styled.div`
    position: absolute;
    width: 1389.03px;
    height: 1115.82px;
    left: 709.14px;
    top: 251.17px;
    background: var(--yellow-100);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    border-radius: 100%;
  `,
  Rectangle1: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    backdrop-filter: blur(1000px);
    background: rgba(255, 205, 0, 0.01);
    transform: matrix(-1, 0, 0, 1, 0, 0);
  `,
  Rectangle2: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background: var(--green-100);
    transform: matrix(-1, 0, 0, 1, 0, 0);
  `,
  Rectangle3: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background: var(--yellow-500);
    transform: matrix(-1, 0, 0, 1, 0, 0);
  `,
};
