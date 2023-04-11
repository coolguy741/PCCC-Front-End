import styled from 'styled-components';
import { itemType, List } from '../List';

interface TogetherPageTemplateProps {
  title: string;
  relatedTo: string;
  listData: itemType[];
}

export const TogetherPageTemplate = ({
  title,
  relatedTo,
  listData,
}: TogetherPageTemplateProps) => {
  return (
    <Style.PageContainer>
      <Style.Title>{title}</Style.Title>
      <Style.RelatedToText>
        {"Related To '" + relatedTo + "'"}
      </Style.RelatedToText>
      <List data={listData} />
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  Title: styled.p`
    font-family: 'Noir Std';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 103.68%;
    letter-spacing: 0.02em;
    color: #c4c4c4;
    margin-bottom: 120px;
  `,
  RelatedToText: styled.p`
    font-family: 'Noir Std';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 107.68%;
    letter-spacing: 0.02em;
    color: #797979;
  `,
};
