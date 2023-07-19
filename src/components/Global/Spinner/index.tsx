import { motion } from "framer-motion";
import Lottie from "react-lottie";
import styled from "styled-components";
import animationData from "../../../assets/animations/loading.json";

export const Spinner = ({ className }: { className?: string }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Lottie options={defaultOptions} height={80} width={80} />
    </Container>
  );
};

const Container = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
