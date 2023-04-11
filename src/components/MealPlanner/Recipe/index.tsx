import styled from 'styled-components';

interface Props {
  isPrint?: boolean;
}

export const Recipe: React.FC<Props> = ({ isPrint }) => {
  return (
    <Container>
      <h3>Chocolate Granola Bites</h3>
      {!isPrint && <div className="recipe-image" />}
      <div className="articles">
        <div>
          <h4>Ingredients</h4>
          <ul>
            <li>2 cups quick oats</li>
            <li>1 1/3 cups coconut flakes</li>
          </ul>
        </div>
        <div>
          <h4>Directions</h4>
          <div>
            Combine all the ingredients together in a large bowl mix until well
            combined.
          </div>
        </div>
        {isPrint && <div className="recipe-image" />}
        <div>
          <h4>What's it good for?</h4>
          <div>
            Fiber keeps your digestive system clean and tidy by helping you
            poop! It keeps the good bacteria in your tummy happy and sweeps up
            after big meals
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  & * {
    box-sizing: border-box;
  }
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 10px;

  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
  }

  .recipe-image {
    background: var(--black);
    width: 200px;
    margin: auto;
    height: 200px;
  }

  .articles {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;

    h4 {
      font-size: 1.25rem;
      font-weight: 700;
      margin: 0;
    }
    &>div: last-child {
      grid-column: span 2;
    }
  }
`;
