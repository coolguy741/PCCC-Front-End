import styled from "styled-components";
interface Props {
  name: string;
}
export const BasicComponent: React.FC<Props> = () => {
  return <Style.Container>edit content here</Style.Container>;
};

const Style = {
  Container: styled.div`
    display: flex;
    gap: 20px;
  `,
};
