import styled from "styled-components";

type DefaultProps = {
  children: React.ReactNode;
  className?: string;
};

type ColProps = {
  xs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
} & DefaultProps;

export const GridContainer: React.FC<DefaultProps> = ({
  children,
  ...props
}) => {
  return <Style.Container {...props}>{children}</Style.Container>;
};

export const Row: React.FC<DefaultProps> = ({ children, ...props }) => {
  return <Style.Row {...props}>{children}</Style.Row>;
};

export const Col: React.FC<ColProps> = ({ children, ...props }) => {
  return <Style.Col {...props}>{children}</Style.Col>;
};

export const Style = {
  Container: styled.div`
    padding: 0 var(--gutter-grid);
  `,
  Row: styled.div`
    display: flex;
    margin: 0 calc(-0.5 * var(--gutter-grid));
    flex-wrap: wrap;
  `,
  Col: styled.div.attrs((props: ColProps) => ({
    xs: props.xs,
  }))`
    ${({ xs }) =>
      xs
        ? `flex-basis: ${8.33 * xs}%; -ms-flex-preferred-size: ${
            8.33 * xs
          }%; max-width: ${8.33 * xs}%;`
        : "flex-basis: 0; -ms-flex-preferred-size: 0; -ms-flex-positive: 1; flex-grow: 1; max-width: 100%; min-width: 8.33%;"}
    padding: 0 calc(0.5 * var(--gutter-grid));
  `,
};
