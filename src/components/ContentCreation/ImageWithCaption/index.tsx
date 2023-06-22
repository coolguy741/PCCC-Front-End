import styled from "styled-components";
import { Image } from "../Image/image";

export function ImageWithCaption() {
  return (
    <Style.Container>
      <div className="iwc-image">
        <Image img="" />
      </div>
      <p>Forging: to find food in nature.</p>
    </Style.Container>
  );
}

const Style = {
  Container: styled.figure`
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 16px;
    width: 100%;
    height: 100%;
    padding: 0.75vh 0.5vw;

    .iwc-image {
      height: 75%;
      width: 100%;
    }

    p {
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      margin-top: 0.5%;
      color: var(--neutral-600);
    }
  `,
};
