import styled from 'styled-components';
import { CenterAlignedContainer } from '../../../components/Global/Container';
import { Text } from '../../../components/Global/Text';
import mockData from '../../../lib/mockData/mealtime-moments/mealtime-moment-print.json';

export const MealtimeMomentPrintPage = () => {
  return (
    <PageContainer>
      <CenterAlignedContainer>
        <h1>Mealtime moments</h1>
      </CenterAlignedContainer>
      <CenterAlignedContainer>
        <h2>{mockData.title}</h2>
      </CenterAlignedContainer>
      <CenterAlignedContainer>
        <Text>{mockData.brief}</Text>
      </CenterAlignedContainer>
      <Content>
        <Text>{mockData.overview}</Text>
        <StyledImage src={mockData.image} alt={mockData.alt} />
      </Content>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding: 0px 200px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RightButtonGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const Content = styled.div`
  display: flex;
  gap: 50px;
`;

const StyledImage = styled.img``;
