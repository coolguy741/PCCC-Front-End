import Lottie from "react-lottie";
import styled from "styled-components";
import animationData from "../../../assets/animations/loading.json";

export const Spinner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <Lottie options={defaultOptions} height={80} width={80} />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
