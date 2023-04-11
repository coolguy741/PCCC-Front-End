import styled from 'styled-components';

export const MealType = () => {
  return (
    <Style.Container>
      <p>Filters</p>
      <div>
        <select placeholder="Search">
          <option value="group1">Foot Group1</option>
        </select>
        <input type="text" placeholder="Search" />
      </div>
      <Style.Meals>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </Style.Meals>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    max-height: calc(100vh - 180px);
    input {
      width: 100%;
      border: none;
      padding: 10px 20px;
      border-radius: 8px;
      margin-bottom: 30px;
    }
    select {
      width: 100%;
      border: none;
      padding: 10px 20px;
      margin-bottom: 20px;
      border-radius: 8px;
    }
  `,
  Meals: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > div {
      background: #2f2f2f;
      width: 100%;
      height: 200px;
    }
  `,
};
