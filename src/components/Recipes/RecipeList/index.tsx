import { Link } from "react-router-dom";
import styled from "styled-components";

interface RecipeListProps {
  recipes:
    {
      image: string,
      topic: string, 
      name: string,
      content: string, 
      creator: string,
      lastModified: string
    }[]
}

export const RecipeList = ({recipes} : RecipeListProps) => {
  return (
    <Container>
      {
        recipes.map((recipe, index) => (
          <div className="recipe-item" key={index}>
            <Link to="./recipe1">
              <img src={recipe.image} placeholder="recipe"/>
              <p className="topic-text">{recipe.topic} </p>
              <p className="name-text">{recipe.name} </p>
              <p className="content-text">{recipe.content} </p>
            </Link>
          </div>
        ))
      }
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  .recipe-item {
    width: 190px;

    img {
      width: 190px;
    }

    .topic-text {
      text-transform: uppercase;
      font-size: 0.8rem;
    }

    .name-text {
      font-size: 1.2rem;
      font-weight: 700;
    }

    .content-text {
      font-size: 1rem;
    }
  }
`;
