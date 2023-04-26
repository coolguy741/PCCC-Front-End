import styled from "styled-components";
import { DirectionLeft, DirectionRight } from "../Icons";

export function Pagination() {
  return (
    <Style.Container>
      <DirectionLeft />
      <p className="pagination-active">1</p>
      <span>of</span>
      <p>24</p>
      <DirectionRight />
    </Style.Container>
  );
}

const Style = {
  Container: styled.nav`
    width: 100%;
    height: 72px;
    padding-top: 30px;
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      display: flex;
      align-items: center;
      text-align: center;
      color: var(--neutral-600);
      margin: 0px 5px;
    }

    p {
      width: 30px;
      height: 30px;
      border: 1px solid red;
      display: grid;
      place-items: center;
      border-radius: 50%;
      margin: 0 10px;
      color: var(--blue-500);
      border: 1px solid var(--blue-500);
      font-size: 12px;
      line-height: 14px;

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
