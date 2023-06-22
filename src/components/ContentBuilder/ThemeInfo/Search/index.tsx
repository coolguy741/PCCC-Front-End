import styled from "styled-components";

import { Input } from "../../../Global/Input";

export const Search = () => {
  return (
    <StyledSearch>
      <label>Search</label>
      <Input placeholder="Activity name" className="bg-opacity" />
    </StyledSearch>
  );
};

const StyledSearch = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;

  .bg-opacity {
    background: #ffffff50;
  }
`;
