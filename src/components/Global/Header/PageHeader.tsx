import styled from 'styled-components';

interface PageHeaderProps {
  title: string;
  description?: string;
}

export const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <Style.Container>
      <h1>{title}</h1>
      {!!description && <p>{description}</p>}
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    padding-top: 0.75rem;
    h1 {
      font-weight: 700;
      font-size: 3rem;
      font-family: 'Noir Std';
      line-height: 3.125rem;
      margin: 0.25rem 0;
    }
    p {
      margin: 0;
      font-weight: 700;
      font-family: 'Noir Std';
    }
  `,
};
