import styled from "styled-components";

const ingredients = [
  {
    amt: "2 cups",
    ingdt: "Quick oats",
  },
  {
    amt: "11/3 cup",
    ingdt: "Coconut flakes",
  },
  {
    amt: "1 cup",
    ingdt: "Creamy nut butter of your choice",
  },
  {
    amt: "1 cup",
    ingdt: "Ground flaxseed",
  },
  {
    amt: "1 cup",
    ingdt: "Chocolate chips",
  },
  {
    amt: "1 cup",
    ingdt: "Honey",
  },
  {
    amt: "1 tsp",
    ingdt: "Pure vanilla extract",
  },
];

export function IngredientCard() {
  return (
    <Style.Container>
      <figcaption>Ingredients</figcaption>
      <ol>
        {ingredients.map(({ amt, ingdt }) => (
          <li>
            <span>{amt}</span>
            {ingdt}
          </li>
        ))}
      </ol>
    </Style.Container>
  );
}

const Style = {
  Container: styled.figure`
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 16px;
    width: 30%;
    min-height: 40%;
    padding: 2.5vh 2vw;

    figcaption {
      font-weight: 600;
      font-size: 23px;
      line-height: 28px;
      color: #3d3d3d;
      margin-bottom: 1.5vh;
    }

    li {
      display: flex;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #646464;
      margin-bottom: 1.25vh;
    }

    span {
      width: 27.5%;
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      color: #646464;
    }

    ol {
      list-style-type: none;
    }
  `,
};
