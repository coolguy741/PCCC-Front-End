import { motion } from "framer-motion";
import Lottie from "react-lottie";
import styled from "styled-components";
import animationData from "../../../assets/animations/loading.json";
import { Typography } from "../Typography";

const loadingContainer = {
  width: "2rem",
  display: "flex",
  justifyContent: "space-around",
};

const loadingCircle = {
  display: "block",
  backgroundColor: "var(--yellow-600)",
  height: "0.25rem",
  width: "0.25rem",
  borderRadius: "0.25rem",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1,
      staggerDirection: -1,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "50%",
  },
  end: {
    y: "150%",
  },
};

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
      <div className="loading">
        <Typography as="div" variant="h6" weight="semi-bold" color="yellow-600">
          Loading
        </Typography>
        <motion.div
          style={loadingContainer}
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          {[...Array(3)].map((_, index) => (
            <motion.span
              style={loadingCircle}
              variants={loadingCircleVariants}
              key={`span-${index}`}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>
    </Container>
  );
};

const Container = styled(motion.div)`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #00000050;
  z-index: 1000000;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .loading {
    display: flex;
    align-items: baseline;
  }
`;
