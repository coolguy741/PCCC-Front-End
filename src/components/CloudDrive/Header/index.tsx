import _ from "lodash";
import styled from "styled-components";

export function CDHeader() {
  return (
    <Style.Container>
      {_.times(5, () => (
        <button></button>
      ))}
    </Style.Container>
  );
}

const Style = {
  Container: styled.article`
    width: 100%;
    height: 7.5vh;
    display: flex;
    justify-content: space-between;

    button {
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
      height: 100%;
      width: 18.5%;
    }
  `,
};
