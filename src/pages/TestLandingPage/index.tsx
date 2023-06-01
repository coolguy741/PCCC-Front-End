import { Canvas } from "@react-three/fiber";
import Spline from "@splinetool/react-spline";
import styled from "styled-components";
// @ts-ignore
import FPSStats from "react-fps-stats";
import { useMousePosition } from "../../hooks/useMousePosition";
import { Bee } from "./Bee";

export const TestLandingPage = () => {
  const pos = useMousePosition();

  return (
    <>
      <FPSStats />
      <Style.Container>
        <div className="r3f-canvas">
          <Canvas>
            <Bee pos={pos} />
            <ambientLight />
          </Canvas>
        </div>
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
      </Style.Container>
    </>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    .r3f-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9999;
      pointer-events: none;

      div,
      div div,
      canvas {
        pointer-events: none !important;
      }
    }

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
  `,
};
