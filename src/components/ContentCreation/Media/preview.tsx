import styled from "styled-components";
import { Patterns } from "../../Patterns";

export function MediaPreview({ src, type }: any) {
  console.log(src, type);
  return (
    <Style.Container>
      {type === "audio" && (
        <Patterns
          className="mp-audio-container"
          pattern={Math.floor(Math.random() * 5)}
        >
          <p>Play</p>
        </Patterns>
      )}
    </Style.Container>
  );
}

const Style = {
  Container: styled.button`
    height: 100%;
    width: 100%;

    .mp-audio-container {
      display: grid;
      place-items: center;

      p {
        aspect-ratio: 1 / 1;
        display: grid;
        place-items: center;
        border-radius: 50%;
        border: 2px solid rgba(0, 0, 0, 0.2);
        background-color: rgba(0, 0, 0, 0.2);
        color: white;
        font-weight: 600;
        padding: 35px;
        font-size: 2vh;
        transition: border 0.25s linear, background 0.25s ease-in;

        &:hover {
          border: 2px solid white;
          background-color: rgba(0, 0, 0, 0.4);
        }
      }
    }
  `,
};
