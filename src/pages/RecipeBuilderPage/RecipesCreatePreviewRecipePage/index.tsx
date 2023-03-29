import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../components/Global/Button";
import { SmallButton } from "../../../components/Global/SmallButton";
import mockData from "../../../lib/mockData/recipes/recipePreview.json";


export const RecipesCreatePreviewRecipePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  const toggleLanguage = () => {
      
  }

  return (
    <PageContainer>
      <LeftAlignedContainer>
        <Button onClick={handleBack}>Back</Button>
      </LeftAlignedContainer>
      <LanguageButtonGroup>
        <SmallButton onClick={toggleLanguage}>English</SmallButton>
        <SmallButton onClick={toggleLanguage}>French</SmallButton>
      </LanguageButtonGroup>
      <h2>{mockData.name}</h2>
      <h3>{"Servering Size : " + mockData.serveringSize}</h3>
      <CenterAlignedContainer>
        <img src={mockData.image} placeholder="recipe"/>
      </CenterAlignedContainer>
      <TwoColumnContainer>
        <div className="first-child">
          <h3>Ingredients</h3>
          <ul>
            {mockData.ingredients.map((ingredient, index) => (
              <li key={index}>
                <Text>{ingredient}</Text>
              </li>
            ))}
          </ul>
        </div>
        <div className="second-child">
          <h3>Directions</h3>
          <Text>{mockData.directions}</Text>
        </div>
      </TwoColumnContainer>
      <h3>What is it good for?</h3>
      <Text>{mockData.advantage}</Text>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LanguageButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`

const LeftAlignedContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`

const CenterAlignedContainer = styled.div`
  display: flex;
  justify-content:center;
`

const TwoColumnContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  .first-child{
    width: 30%;
  }

  .second-child{
    width: 60%;
  }
`
const Text = styled.p`
  font-size: 1rem;
`