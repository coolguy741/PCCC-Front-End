import styled from "styled-components";
import Spline from "@splinetool/react-spline";

export const LandingPage = () => {
  return (
    <Container>
      <div className="odd">
        Panel 1
        <Spline scene="https://prod.spline.design/75VaWhQ6daSyqN2c/scene.splinecode" />
      </div>
      <div>
        Panel 2
        <Spline scene="https://prod.spline.design/CDccCKiwER1WcG8q/scene.splinecode" />
      </div>
      <div className="odd">
        Panel 3
        <Spline scene="https://prod.spline.design/nvLk40a823tDdqwD/scene.splinecode" />
      </div>
      <div>
        Panel 4
        <Spline scene="https://prod.spline.design/CDccCKiwER1WcG8q/scene.splinecode" />
      </div>
      <div className="odd">
        Panel 5
        <Spline scene="https://prod.spline.design/nvLk40a823tDdqwD/scene.splinecode" />
      </div>
      <div>
        Panel 6
        <Spline scene="https://prod.spline.design/CDccCKiwER1WcG8q/scene.splinecode" />
      </div>
      <div className="odd">
        Panel 7
        <Spline scene="https://prod.spline.design/nvLk40a823tDdqwD/scene.splinecode" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  div {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;

    &.odd {
      background-color: #f0f0f0;
    }
  }
`;
