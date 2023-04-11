import styled from 'styled-components';

import { Grocery } from '../../../pages/types';

interface Props {
  grocery?: Grocery;
}

export const GroceryItem: React.FC<Props> = ({ grocery }) => {
  return (
    <Container>
      <div>{grocery?.name}</div>
      <div className="material-list">
        {grocery?.materials.map((material) => (
          <div key={material.name} className="material">
            <input type="checkbox" />
            <span>{material.amount}</span>
            <div className="material-spec">
              <span className="unit">{material.unit}</span>
              <span>{material.name}</span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  border: 2px solid #d9d9d9;
  grid-template-rows: 1fr;
  align-items: end;
  gap: 10px;

  & > div {
    padding: 10px;
  }

  .material-list {
    border-top: 2px solid #d9d9d9;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .material {
      display: grid;
      grid-template-columns: 1fr 1fr 5fr;
      text-align: center;

      .material-spec {
        text-align: left;

        .unit {
          background: #d9d9d9;
          padding: 5px;
          font-size: 0.75rem;
          margin-right: 5px;
        }
      }
    }
  }
`;
