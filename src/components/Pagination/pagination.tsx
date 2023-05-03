import styled from "styled-components";
import { DirectionLeft, DirectionRight } from "../Icons";

export function Pagination() {
  return (
    <Style.Container>
      <DirectionLeft />
      <p className="pagination-p pagination-active">1</p>
      <span>of</span>
      <p className="pagination-p">24</p>
      <DirectionRight />
    </Style.Container>
  );
}

const Style = {
  Container: styled.nav`
    width: 100%;
    height: auto;
    padding-top: 2vh;
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-weight: 400;
      font-size: 1.25vh;
      display: flex;
      align-items: center;
      text-align: center;
      color: var(--neutral-600);
      margin: 0 0.5vw;
    }

    p.pagination-p {
      width: 4vh;
      height: 4vh;
      border: 1px solid red;
      display: grid;
      place-items: center;
      border-radius: 50%;
      margin: 0 0.5vw;
      color: var(--blue-500);
      border: 1px solid var(--blue-500);
      font-size: 1.5vh;

      &.pagination-active {
        background: var(--blue-500);
        color: white;
        border: 1px solid var(--blue-500);
      }
    }

    svg {
      margin: 0;
      path {
        stroke: var(--blue-500);
      }
    }
  `,
};
