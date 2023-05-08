import styled from "styled-components";

export interface BookFilterProps {
  label: string;
  filters: Filter[];
}

export const BookFilter = () => {
  return <Style.Container>book filter</Style.Container>;
};

const Style = {
  Container: styled.fieldset`
    padding: 10px;
    background: #00000030;
  `,
};
