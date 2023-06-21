import styled from "styled-components";

export function ImageWithCaption() {
  return (
    <Style.Container img="/public/content-creation/img-pattern.png">
      <img alt="" />
      <figcaption>Forging: to find food in nature.</figcaption>
    </Style.Container>
  );
}

const Style = {
  Container: styled.figure<{ img: string }>`
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 16px;
    width: 100%;
    height: 100%;
    padding: 2.5vh 2vw;

    img {
      background: ${({ img }) => `url(${img})`};
      background-position: center;
      background-size: cover;
      border-radius: 12px 12px 0px 0px;
      height: 75%;
      width: 100%;
    }

    figcaption {
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      margin-top: 2.5%;
      color: var(--neutral-600);
    }
  `,
};
