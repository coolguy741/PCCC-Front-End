import styled from "styled-components";
import Spline from "@splinetool/react-spline";
// @ts-ignore
import FPSStats from "react-fps-stats";

export const TestLandingPage = () => {
  return (
    <>
      <FPSStats />
      <Container>
        <div className="odd">
          <h1>Panel 1</h1>
          <Spline scene="https://prod.spline.design/75VaWhQ6daSyqN2c/scene.splinecode" />
        </div>
        <div>
          <h1>Panel 2</h1>
          <Spline scene="https://prod.spline.design/CDccCKiwER1WcG8q/scene.splinecode" />
        </div>
        <div className="odd">
          <h1>Panel 3</h1>
          <Spline scene="/globe.splinecode" />
        </div>
        <div>
          <h1>Panel 4</h1>
          <Spline scene="https://prod.spline.design/CDccCKiwER1WcG8q/scene.splinecode" />
        </div>
        <div className="odd">
          <h1>Panel 5</h1>
          <Spline scene="/globe.splinecode" />
        </div>
        <div>
          <h1>Panel 6</h1>
          <Spline scene="https://prod.spline.design/CDccCKiwER1WcG8q/scene.splinecode" />
        </div>
        <div className="odd">
          <h1>Panel 7</h1>
          <Spline scene="/globe.splinecode" />
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  div {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;

    h1 {
      position: absolute;
      z-index: 1;
      pointer-events: none;
    }

    canvas {
      position: absolute;
      top: 0;
      z-index: 0;
    }

    &.odd {
      background-color: #f0f0f0;
    }
  }
`;
