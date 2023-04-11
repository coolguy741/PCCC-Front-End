import styled from 'styled-components';

export const TopicRecipes = () => {
  return (
    <Style.Container>
      <div>
        <h4>Chocolate Granola Bites</h4>
        <div className="image"></div>
        <div className="flex">
          <div>
            <h4>Ingredients</h4>
            <p>
              Garden Guardian safety tips and guidance can be found in all Power
              Full Kids lessons. Watch for the Garden Guardian section and stay
              safe when you grow.
            </p>
          </div>
          <div>
            <h4>Directions</h4>
            <p>
              Garden Guardian safety tips and guidance can be found in all Power
              Full Kids lessons. Watch for the Garden Guardian section and stay
              safe when you grow.
            </p>
          </div>
        </div>
        <div>
          <h4>What is good for?</h4>
          <p>
            Garden Guardian safety tips and guidance can be found in all Power
            Full Kids lessons. Watch for the Garden Guardian section and stay
            safe when you grow.
          </p>
        </div>
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    gap: 10px;

    & .image {
      width: 300px;
      height: 150px;
      background: var(--black);
    }
  `,
};
