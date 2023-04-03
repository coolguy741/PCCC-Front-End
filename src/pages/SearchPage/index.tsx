import styled from "styled-components";
import { List, itemType } from "../../components/Home/List";
import mockData from "../../lib/mockData/search.json";

export const SearchPage = () => {
  return (
    <PageContainer>
      <Title>{"Search Results for " + mockData.searchWords}</Title>
      <ResultesText>{mockData.results}</ResultesText>
      <List data = {mockData.listData}/>
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
  margin-bottom: 0px;
`

const ResultesText = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 143.18%;
  letter-spacing: 0.02em;
  color: #797979;
  margin: 0px;
`
