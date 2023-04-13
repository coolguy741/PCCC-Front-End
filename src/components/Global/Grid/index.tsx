import styled from "styled-components";

type ColProps = {
  xs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
};

export const GridContainer = styled.div`
  padding: 0 calc(0.5 * var(--gutter-grid));
`;

export const Row = styled.div`
  display: flex;
  margin: 0 -calc(0.5 * var(--gutter-grid));
  flex-wrap: wrap;
`;

export const Col = styled.div.attrs((props: ColProps) => ({
  xs: props.xs,
}))`
  ${({ xs }) =>
    xs
      ? `flex-basis: ${8.33 * xs}%; max-width: ${8.33 * xs}%;`
      : "flex-basis: 0; -ms-flex-preferred-size: 0; -ms-flex-positive: 1; flex-grow: 1; max-width: 100%; min-width: 8.33%;"}
  padding-right: calc(0.5 * var(--gutter-grid));
`;
