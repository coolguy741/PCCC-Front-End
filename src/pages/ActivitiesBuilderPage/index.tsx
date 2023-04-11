import styled from 'styled-components';
import { ActivitiesHeader } from '../../components/Activities/ActivitiesHeader';

interface ActivitiesBuilderPageProps {
  children: JSX.Element;
}

export const ActivitiesBuilderPage = ({
  children,
}: ActivitiesBuilderPageProps) => {
  return (
    <Container>
      <ActivitiesHeader />
      <div className="content">{children}</div>
    </Container>
  );
};

const Container = styled.div`
  .content {
    padding: 11px 0px;
  }
`;
