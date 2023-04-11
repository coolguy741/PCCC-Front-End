import styled from 'styled-components';

import { LinkButton } from '../../Global/Button/Link';

interface Props {
  showingNameSearch?: boolean;
  showingActions?: boolean;
}

export const TopicFilter: React.FC<Props> = ({
  showingNameSearch = false,
  showingActions = true,
}) => {
  return (
    <Style.Container>
      <div className="flex space-x-6">
        <div>
          <label>Filters</label>
          <select>
            <option value="name">Topic name</option>
          </select>
        </div>
        {showingNameSearch && (
          <div>
            <div>
              <label>Search</label>
            </div>
            <input />
          </div>
        )}
        <div>
          <label>Sort</label>
          <select>
            <option value="sort">Date</option>
          </select>
        </div>
      </div>
      {showingActions && (
        <div className="flex space-x-6">
          <LinkButton to="#">Delete Topic</LinkButton>
          <LinkButton to="create/topic">Create Topic</LinkButton>
        </div>
      )}
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
    padding-top: 0.75rem;
    margin-bottom: 2rem;

    & {
      h1 {
        font-weight: 700;
        font-size: 3rem;
        font-family: 'Noir Std';
        line-height: 3.125rem;
        margin: 0.25rem 0;
      }

      p {
        margin: 0;
        font-weight: 700;
        font-family: 'Noir Std';
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
  `,
};
