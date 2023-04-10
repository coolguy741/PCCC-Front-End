import styled from "styled-components";
import mockData from "../../lib/mockData/games.json";
import { Text } from "../../components/Global/Text";
import { Button } from "../../components/Global/Button";

export const GamesPage = () => {
  return (
    <PageContainer>
      <h1>Games</h1>
      <Title>{mockData.title}</Title>
      <ImageButtonContainer>
        <img src={mockData.image} alt={mockData.alt}/>
        <Button onClick={() => alert("It's coming soon")}>Play</Button>
      </ImageButtonContainer>
      <div>
        <h3>Overview</h3>
        <Text>{mockData.overview}</Text>
      </div>
      <div>
        <h3>Introductions</h3>
        <Text>{mockData.instructions}</Text>
      </div>  
    </PageContainer>
  );
};

const PageContainer = styled.div`

`

const Title = styled.p`
  font-family: 'Noir Std';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 103.68%;
  letter-spacing: 0.02em;
  color: #797979;
`

const ImageButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  img{
    margin: auto;
  }

  button{
    margin: auto;
  }
`
