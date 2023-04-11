import styled from 'styled-components';
import { MealtimeMomentsHeader } from '../../components/MealtimeMoment/MealtimeMomentsHeader';

interface MealtimeMomentsBuilderPageProps {
  children: JSX.Element;
}

export const MealtimeMomentsBuilderPage = ({
  children,
}: MealtimeMomentsBuilderPageProps) => {
  return (
    <Container>
      <MealtimeMomentsHeader />
      <div className="content">{children}</div>
    </Container>
  );
};

const Container = styled.div`
  .content {
    padding: 11px 0px;
  }
`;
