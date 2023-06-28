import styled from "styled-components";

export function Progress({ variant }: { variant: "thin" | "thick" }) {
  return (
    <Style.Container value={80} max={100} variant={variant}></Style.Container>
  );
}

const Style = {
  Container: styled.progress<{ variant: "thin" | "thick" }>`
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.27639389038086px);
    width: 100%;
    height: ${({ variant }) => (variant === "thick" ? "2.5vh" : "0.25vh")};
    overflow: hidden;

    &[value] {
      /* Reset the default appearance */
      -webkit-appearance: none;
      appearance: none;

      &::-webkit-progress-bar {
        background: rgba(255, 255, 255, 0.5);
      }

      &::-webkit-progress-value {
        background: var(
          --gradient-green,
          linear-gradient(180deg, #4cde96 0%, #20ad67 100%)
        );
      }
    }
  `,
};
