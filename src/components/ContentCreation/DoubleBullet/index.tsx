import styled from "styled-components";

export function DoubleBullet() {
  return (
    <Style.Container>
      <figcaption>Directions</figcaption>
      <ol>
        <li>
          <span>1</span>
          Combine all the ingredients together in a large bowl, mix until well
          combined.
        </li>
        <li>
          <span>2</span>Refrigerate for about 30 minutes
        </li>
        <li>
          <span>3</span>
          Scoop out a tablespoon portion of mixture, roll each portion in the
          palm of your hands and place each ball into a resealable container for
          storage.
        </li>
        <li>
          <span>4</span>
          Combine all the ingredients together in a large bowl, mix until well
          combined.
        </li>
        <li>
          <span>5</span>Refrigerate for about 30 minutes
        </li>
        <li>
          <span>6</span>
          Scoop out a tablespoon portion of mixture, roll each portion in the
          palm of your hands and place each ball into a resealable container for
          storage.
        </li>
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
    width: 60%;
    height: 40%;
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
      width: 100%;
    }

    span {
      background: linear-gradient(180deg, #f87c56 0%, #f65321 91.9%);
      border-radius: 80.1418px;
      font-size: 2vh;
      height: 25px;
      width: 25px;
      display: grid;
      place-items: center;
      font-weight: 600;
      font-size: 14.4255px;
      line-height: 19px;
      text-align: center;
      color: #ffffff;
      min-width: 25px;
      margin-right: 10px;
    }

    ol {
      column-count: 2;
      column-gap: 2.5%;
    }
  `,
};
