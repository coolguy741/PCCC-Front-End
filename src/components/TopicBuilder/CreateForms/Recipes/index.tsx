import styled from "styled-components";

import { LinkButton } from "../../../Global/Button/Link";
import { TopicFilter } from "../../Filter";

export const RecipesForm = () => {
  return (
    <div>
      <div>Select the recipes you want to link to this topic</div>
      <TopicFilter showingActions={false} showingNameSearch={true} />
      <RecipesList>
        <div className="flex justify-between">
          <div>Recipe A: Tools of the Trade </div>
          <LinkButton to="#">Remove</LinkButton>
        </div>
        <div className="flex justify-between">
          <div>Recipe B: Tools of the Trade </div>
          <LinkButton to="#">Remove</LinkButton>
        </div>
        <div className="flex justify-between">
          <div>Recipe c: Tools of the Trade </div>
          <LinkButton to="#">Remove</LinkButton>
        </div>
        <div className="flex justify-between">
          <div>Recipe D: Tools of the Trade </div>
          <LinkButton to="#">Add</LinkButton>
        </div>
      </RecipesList>
    </div>
  );
};

const RecipesList = styled.div`
  margin-bottom: 20px;
  & > div {
    border-bottom: 1px solid var(--black);
    padding: 5px 0;
  }
`;
