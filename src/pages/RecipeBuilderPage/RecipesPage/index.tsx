import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { SelectBox } from '../../../components/Global/SelectBox';
import { SmallButton } from '../../../components/Global/SmallButton';
import { RecipeList } from '../../../components/Recipes/RecipeList';
import mockData from '../../../lib/mockData/Recipes/recipes.json';

const FilterOptions = [
  {
    value: 'Curriculum name1',
    label: 'Curriculum name1',
  },
  {
    value: 'Curriculum name2',
    label: 'Curriculum name2',
  },
  {
    value: 'Curriculum name3',
    label: 'Curriculum name3',
  },
];

const TopicOptions = [
  {
    value: 'name1',
    label: 'name1',
  },
  {
    value: 'name2',
    label: 'name2',
  },
  {
    value: 'name3',
    label: 'name3',
  },
];

const SortOptions = [
  {
    value: 'Date',
    label: 'Date',
  },
  {
    value: 'A-Z',
    label: 'A-Z',
  },
  {
    value: 'Z-A',
    label: 'Z-A',
  },
];

export const RecipesPage = () => {
  const navigate = useNavigate();

  const handleFilterChange = () => {};

  const handleTopicChange = () => {};

  const handleSortChange = () => {};

  const handleDeleteRecipe = () => {
    alert('Delete selected recipes');
  };

  const handleCreateRecipe = () => {
    navigate('./create');
  };

  const handleTableCheckboxChange = () => {};

  return (
    <PageContainer>
      <div className="input-group">
        <div className="selectboxes-container">
          <div>
            <p>Filter</p>
            <SelectBox
              options={FilterOptions}
              value={FilterOptions[0].value}
              onChange={handleFilterChange}
            />
          </div>
          <div>
            <p>Topic</p>
            <SelectBox
              options={TopicOptions}
              value={TopicOptions[0].value}
              onChange={handleTopicChange}
            />
          </div>
          <div>
            <p>Sort</p>
            <SelectBox
              options={SortOptions}
              value={SortOptions[0].value}
              onChange={handleSortChange}
            />
          </div>
        </div>
        <div className="buttons-container">
          <SmallButton onClick={handleDeleteRecipe}>Delete Recipe</SmallButton>
          <SmallButton onClick={handleCreateRecipe}>Create Recipe</SmallButton>
        </div>
      </div>
      <div className="recipe-list-container">
        <RecipeList recipes={mockData} />
      </div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  .input-group {
    display: flex;
    justify-content: space-between;

    .selectboxes-container {
      display: flex;

      div {
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
