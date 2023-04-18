import { Link } from "react-router-dom";
import styled from "styled-components";

export const MealtimeMomentTip = () => {
  return (
    <Style.Container>
      <Style.TipText>
        <Style.Text>
          <Style.Bold>
            It seems like you like this content. Would you like to learn more
            about{" "}
            <Style.Underlined>
              <Link to="./">Mealtime Moments</Link>
            </Style.Underlined>
            ?
          </Style.Bold>
        </Style.Text>
        <br />
        <Style.Text>
          <Style.Bold>OR </Style.Bold>Check out this fun{" "}
          <Style.Underlined>
            &rsquo;<Link to="./">Vegetable Spring Rolls</Link>&rsquo;
          </Style.Underlined>{" "}
          recipe that’s full of healthy ingredients
        </Style.Text>
      </Style.TipText>
      <img src="/images/bee.png" alt="bee" placeholder="bee" />
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
  `,
  TipText: styled.span`
    background-color: #d9d9d9;
    text-align: start;
    border-radius: 6px;
    padding: 20px;
    position: relative;

    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 40px;
      right: -38px;
      margin-left: -5px;
      border-width: 20px;
      border-style: solid;
      border-color: #d9d9d9 transparent transparent transparent;
      transform: rotate(270deg);
    }
  `,
  Bold: styled.span`
    font-weight: 700;
  `,
  Text: styled.span`
    font-size: 1rem;
    text-align: start;
  `,
  Underlined: styled.span`
    text-decoration: underline;
  `,
};
