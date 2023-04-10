import styled from "styled-components";
import { List, itemType } from "../List";

interface TogetherPageTemplateProps {
    title: string,
    relatedTo: string,
    listData : itemType[]
}

export const TogetherPageTemplate = ({title, relatedTo, listData} : TogetherPageTemplateProps) => {
  return (
    <PageContainer>
      <Title>{title}</Title>
      <RelatedToText>{"Related To '" + relatedTo + "'"}</RelatedToText>
      <List data = {listData}/>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title =styled.p`
  font-family: 'Noir Std';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 103.68%;
  letter-spacing: 0.02em;
  color: #C4C4C4;
  margin-bottom: 120px;
`

const RelatedToText = styled.p`
  font-family: 'Noir Std';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 107.68%;
  letter-spacing: 0.02em;
  color: #797979;
`