import { motion } from "framer-motion";
import styled from "styled-components";

const images = [
  "/images/plate-full-planner/scroll-menu/image-1.svg",
  "/images/plate-full-planner/scroll-menu/image-2.svg",
  "/images/plate-full-planner/scroll-menu/image-3.svg",
  "/images/plate-full-planner/scroll-menu/image-1.svg",
];

export const PlateFullPlannerScrollMenu = () => {
  return (
    <Style.Container style={{ overflow: "scroll" }}>
      {images.map((image, index) => {
        return (
          <Style.Item
            key={`image-${index}`}
            variants={{
              offscreen: {
                scale: 0.5,
                rotate: -2.01 * Math.pow(-1, index),
              },
              onscreen: {
                scale: 1.2,
                rotate: -2.01 * Math.pow(-1, index),
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                },
              },
            }}
            initial="offscreen"
            whileInView="onscreen"
            index={index}
            viewport={{ once: false, amount: 0.611 }}
          >
            <img src={image} alt="fruits" />
          </Style.Item>
        );
      })}
    </Style.Container>
  );
};

const Style = {
  Container: styled.section`
    display: block;
    height: 100%;
    position: relative;
    z-index: 10;
    display: flex;
    padding: 0 10% 0 20%;
    flex-direction: column;
    gap: 12%;
    overflow-y: auto;
  `,
  Item: styled(motion.div).attrs(({ index }: { index: number }) => ({
    index: index ?? 0,
  }))`
    border-radius: 4px;
    background: white;
    padding: 8px;
    img {
      width: 100%;
    }

    &:before {
      position: absolute;
      content: "";
      width: 17%;
      right: 50%;
      transform: rotate(${({ index }) => (index % 2 === 0 ? 11 : 7)}0deg)
        translate(-30%, -50%);
      height: 9%;
      opacity: 0.4;
      background: #ffba3a;
      z-index: 3;
    }
  `,
};
