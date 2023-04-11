import styled from 'styled-components';
import { AlignmentStyle } from '../../../components/Global/Container';
import { Text } from '../../../components/Global/Text';
import mockData from '../../../lib/mockData/mealtime-moments/mealtime-moment-print.json';

export const MealtimeMomentPrintPage = () => {
  return (
    <Style.PageContainer>
      <AlignmentStyle.CenterAlignedContainer>
        <h1>Mealtime moments</h1>
      </AlignmentStyle.CenterAlignedContainer>
      <AlignmentStyle.CenterAlignedContainer>
        <h2>{mockData.title}</h2>
      </AlignmentStyle.CenterAlignedContainer>
      <AlignmentStyle.CenterAlignedContainer>
        <Text>{mockData.brief}</Text>
      </AlignmentStyle.CenterAlignedContainer>
      <Style.Content>
        <Text>{mockData.overview}</Text>
        <Style.StyledImage src={mockData.image} alt={mockData.alt} />
      </Style.Content>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    padding: 0px 200px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  `,
  Content: styled.div`
    display: flex;
    gap: 50px;
  `,
  ButtonGroup: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  RightButtonGroup: styled.div`
    display: flex;
    gap: 20px;
  `,
  StyledImage: styled.img``,
};
