import styled from "styled-components";
import { convertToRelativeUnit as conv } from "../../../styles/helpers/convertToRelativeUnits";
import { Globe } from "../../Foodways/Globe";

export function FoodwayStop({ stop }: any) {
  console.log(stop);
  return (
    <Style.Container>
      <div className="fw-content">
        <Style.Image img="/public/content-creation/img-pattern.png">
          <figure>
            <img alt="" />
            <figcaption></figcaption>
          </figure>
        </Style.Image>
        <h2>{stop.location}</h2>
        <p>{stop.description}</p>
      </div>
      <div className="fw-globe">
        <Globe />
      </div>
    </Style.Container>
  );
}

const Style = {
  Container: styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    .fw-content {
      width: 33%;
      height: 100%;
      z-index: 2;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 4.97076px 19.883px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(73.6622px);
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      border-radius: 16px;
      flex-grow: 1;

      span.tc-overview {
        font-weight: 600;
        font-size: ${conv(14, "vw")};
        text-transform: uppercase;
        color: var(--orange-600);
        border: 2px solid var(--orange-600);
        padding: ${conv(0, "vh")} ${conv(20, "vw")};
        border-radius: 24px;
        position: absolute;
        top: 2vh;
      }

      h1 {
        width: 120%;
        padding: 10px 1.5vw;
        font-weight: 600;
        font-size: 3.5vh;
        line-height: 125%;
        color: #3d3d3d;
        background: linear-gradient(
          182.85deg,
          rgba(255, 215, 96, 0.8) 2.47%,
          rgba(255, 191, 0, 0.8) 97.72%
        );
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(59.2764px);
        border-radius: 12px;
        z-index: 2;
        padding-top: 4vh;
        height: max-content;
      }
    }

    h2 {
      font-weight: 600;
      font-size: 2.2vh;
      padding: 0 20px;
      line-height: 32px;
      color: #3d3d3d;
      height: max-content;
    }

    p {
      margin: 1vh 0;
      padding: 0 20px;
      font-size: 1.5vh;
      color: #646464;
      height: max-content;
    }

    .fw-globe {
      width: 67%;
      height: 100%;
      filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.1));
      border-radius: 16px;
      z-index: 0;
      position: relative;
      display: grid;
      place-items: center;
      overflow: hidden;
      flex-grow: 2;

      canvas {
        width: 50%;
      }
    }
  `,

  Image: styled.article<{ img: string }>`
    background: ${({ img }) => `url(${img})`};
    background-position: center;
    background-size: cover;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 16px;
    width: 100%;
    height: 50%;
    padding: 2.5vh 2vw;
  `,
};
