import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../components/Global/Button';
import foodways from '../../lib/mockData/foodways/foodways.json';

export const FoodwaysPage = () => {
  return (
    <Container>
      <h1>Foodways</h1>
      <div className="content">
        <div className="content__header">
          <div className="content__header__sort">
            Sort
            <select>
              <option>Date Added</option>
            </select>
          </div>
          <div className="content__header__buttons">
            <Button>Delete</Button>
            <Link to="create">
              <Button>Create Foodways</Button>
            </Link>
          </div>
        </div>
        <div className="content__body">
          {foodways.map((foodway) => (
            <Link to={`${foodway.id}`}>
              <div className="content__body__item">
                <div className="content__body__item__title">
                  <h3>{foodway.title}</h3>
                </div>
                <div className="content__body__item__date">
                  <p>{foodway.date}</p>
                </div>
                <div className="content__body__item__description">
                  <p>{foodway.intro}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .content {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &__header {
      display: flex;
      width: 100%;
      justify-content: space-between;

      &__sort {
        display: flex;
        flex-direction: column;
      }

      &__buttons {
        display: flex;
        gap: 1rem;
      }
    }

    &__body {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 0.5rem;

      &__item {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        background-color: #f5f5f5;
      }
    }
  }
`;
