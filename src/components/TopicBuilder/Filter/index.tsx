import { ChangeEvent, useState } from "react";
import styled from "styled-components";

import { LinkButton } from "../../Global/Button/Link";

export const TopicFilter = () => {
  return (
    <Container>
      <div className="flex space-x-6">
        <div>
          <label>Filters</label>
          <select>
            <option value="name">Topic name</option>
          </select>
        </div>
        <div>
          <label>Sort</label>
          <select>
            <option value="sort">Date</option>
          </select>
        </div>
      </div>
      <div className="flex space-x-6">
        <LinkButton to="#">Delete Topic</LinkButton>
        <LinkButton to="#">Create Topic</LinkButton>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding-top: 0.75rem;
  margin-bottom: 2rem;

  & {
    h1 {
      font-weight: 700;
      font-size: 3rem;
      font-family: "Noir Std";
      line-height: 3.125rem;
      margin: 0.25rem 0;
    }

    p {
      margin: 0;
      font-weight: 700;
      font-family: "Noir Std";
    }

    select {
      width: 100%;
      border: none;
      padding: 10px 20px;
      border-radius: 8px;
    }

    input {
      width: 100%;
      border: none;
      padding: 10px 20px;
      border-radius: 8px;
    }

    label {
      margin-bottom: 0.5rem;
      display: inline-block;
    }
  }
`;
