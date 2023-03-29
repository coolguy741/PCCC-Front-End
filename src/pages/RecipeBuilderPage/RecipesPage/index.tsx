import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../components/Global/Button";
import { SelectBox } from "../../../components/Global/SelectBox";
import { SmallButton } from "../../../components/Global/SmallButton";
import { RecipeList } from "../../../components/Recipes/RecipeList";
import mockData from "../../../lib/mockData/Recipes/recipes.json";

const FilterOptions = ["Curriculum name1", "Curriculum name2", "Curriculum name3"];
const TopicOptions = ["name1", "name2", "name3"];
const SortOptions = ["Date", "A-Z", "Z-A"];

export const RecipesPage = () => {
  const navigate = useNavigate();

  const handleFilterChange = () => {
  }

  const handleTopicChange = () => {
  }

  const handleSortChange = () => {
  }

  const handleDeleteRecipe = () => {
    alert("Delete selected recipes");
  }

  const handleCreateRecipe = () => {
    navigate("./create");
  }

  const handleTableCheckboxChange = () => {
  };

  return (
    <PageContainer>
      <div className="input-group">
        <div className="selectboxes-container">
          <div>
            <p>Filter</p>
            <SelectBox options={FilterOptions} value={FilterOptions[0]} onChange={handleFilterChange} /> 
          </div>
          <div>
            <p>Topic</p>
            <SelectBox options={TopicOptions} value={TopicOptions[0]} onChange={handleTopicChange} /> 
          </div>
          <div>
            <p>Sort</p>
            <SelectBox options={SortOptions} value={SortOptions[0]} onChange={handleSortChange} /> 
          </div>
        </div>
        <div className="buttons-container">
          <SmallButton onClick={handleDeleteRecipe}>Delete Recipe</SmallButton>
          <SmallButton onClick={handleCreateRecipe}>Create Recipe</SmallButton>
        </div>
      </div>
      <div className="recipe-list-container">
        <RecipeList recipes={mockData}/>
      </div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  .input-group {
    display: flex;
    justify-content: space-between;

    .selectboxes-container{
      display: flex;

      div{
        padding-right: 20px;
      }
    }
    
    .buttons-container {
      display: flex;
      align-items: center;
      gap: 15px;
    }
  }
  
  .recipe-list-container {
    margin-top: 40px;
  }
`;
