import styled from "styled-components";

export function DoubleImage() {
  return (
    <Style.Container img="/public/content-creation/img-pattern.png">
      <figure>
        <img alt="" />
        <figcaption></figcaption>
      </figure>
    </Style.Container>
  );
}

const Style = {
  Container: styled.article<{ img: string }>`
    background: ${({ img }) => `url(${img})`};
    background-position: center;
    background-size: cover;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 16px;
    width: 60%;
    height: 40%;
    padding: 2.5vh 2vw;
  `,
};
