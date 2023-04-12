import styled from "styled-components";

export const BasicComponent = () => {
  return <Style.Container>edit content here</Style.Container>;
};

const Style = {
  Container: styled.div`
    display: flex;
    gap: 20px;
  `,
};
