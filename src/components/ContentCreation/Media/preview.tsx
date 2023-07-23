import styled from "styled-components";
import { Patterns } from "../../Patterns";

export function MediaPreview({ src, type }: any) {
  return (
    <Style.Container>
      {type === "audio" && <Patterns pattern={0} />}
    </Style.Container>
  );
}

const Style = {
  Container: styled.button`
    height: 100%;
    width: 100%;
    border: 1px solid red;
  `,
};
