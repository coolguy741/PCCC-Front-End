import styled from "styled-components";
import { Image } from "../Image/image";

export function DoubleImage() {
  return (
    <Style.Container>
      <Image img="" />
    </Style.Container>
  );
}

const Style = {
  Container: styled.article`
    background-position: center;
    background-size: cover;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 16px;
    width: 100%;
    height: 100%;
    overflow: hidden;
  `,
};
