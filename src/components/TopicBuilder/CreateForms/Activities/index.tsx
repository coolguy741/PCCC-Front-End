import styled from "styled-components";

import { LinkButton } from "../../../Global/Button/Link";
import { TopicFilter } from "../../Filter";

export const ActivitiesForm = () => {
  return (
    <div>
      <div>Select the activities you want to link to this topic</div>
      <TopicFilter showingActions={false} showingNameSearch={true} />
      <ActivitiesList>
        <div className="flex justify-between">
          <div>Activity A: Tools of the Trade </div>
          <LinkButton to="#">Remove</LinkButton>
        </div>
        <div className="flex justify-between">
          <div>Activity B: Tools of the Trade </div>
          <LinkButton to="#">Remove</LinkButton>
        </div>
        <div className="flex justify-between">
          <div>Activity c: Tools of the Trade </div>
          <LinkButton to="#">Remove</LinkButton>
        </div>
        <div className="flex justify-between">
          <div>Activity D: Tools of the Trade </div>
          <LinkButton to="#">Add</LinkButton>
        </div>
      </ActivitiesList>
    </div>
  );
};

const ActivitiesList = styled.div`
  margin-bottom: 20px;
  & > div {
    border-bottom: 1px solid var(--black);
    padding: 5px 0;
  }
`;
