import styled from "styled-components";
import mockData from "../../../lib/mockData/recipes/recipePreview.json";

export const RecipeContent = () => {
  return (
    <Style.PageContainer>
      <h2>{mockData.name}</h2>
      <h3>{"Servering Size : " + mockData.serveringSize}</h3>
      <Style.CenterAlignedContainer>
        <img src={mockData.image} alt="recipe" placeholder="recipe" />
      </Style.CenterAlignedContainer>
      <Style.TwoColumnContainer>
        <div className="first-child">
          <h3>Ingredients</h3>
          <ul>
            {mockData.ingredients.map((ingredient, index) => (
              <li key={index}>
                <Style.Text>{ingredient}</Style.Text>
              </li>
            ))}
          </ul>
        </div>
        <div className="second-child">
          <h3>Directions</h3>
          <Style.Text>{mockData.directions}</Style.Text>
        </div>
      </Style.TwoColumnContainer>
      <h3>What is it good for?</h3>
      <Style.Text>{mockData.advantage}</Style.Text>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  CenterAlignedContainer: styled.div`
    display: flex;
    justify-content: center;
  `,
  TwoColumnContainer: styled.div`
    width: 100%;
    display: flex;
    gap: 20px;

    .first-child {
      width: 30%;
    }

    .second-child {
      width: 60%;
    }
  `,
  Text: styled.p`
    font-size: 1rem;
    margin: 0px;
  `,
};
