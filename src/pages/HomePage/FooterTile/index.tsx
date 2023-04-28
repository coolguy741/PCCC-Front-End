import styled from "styled-components";
import { Icon } from "../../../components/Global/Icon";
import { animatedbackgroundGradient } from "../../../styles/helpers/animatedBackgroundGradient";
export const FooterTile = () => {
  return (
    <style.PageContainer>
      <style.Background>
        <style.Lemon src="/images/icons/lemon.svg" alt="lemon" />
      </style.Background>
      <style.InfoContainer>
        <style.TitleContainer>
          <style.FirstLine>Kids who eat</style.FirstLine>
          <style.SecondLine>well, do well.</style.SecondLine>
        </style.TitleContainer>
        <style.Info>
          <style.Column>
            <div>About Us</div>
            <div>Terms & Conditions</div>
            <div>Accessibility</div>
          </style.Column>
          <style.Column>
            <div>Privacy Policy</div>
            <div>Contact Us</div>
          </style.Column>
          <style.Column>
            <div>Follow Us</div>
            <style.LinkGroup>
              <Icon name="facebook" width="32px" />
              <Icon name="instagram" width="32px" />
              <Icon name="twitter" width="32px" />
              <Icon name="youtube" width="32px" />
            </style.LinkGroup>
          </style.Column>
        </style.Info>
      </style.InfoContainer>
    </style.PageContainer>
  );
};

const style = {
  PageContainer: styled.div`
    min-height: calc(100vh);
    width: 100%;
    font-family: "Noir Std";
    font-style: normal;
  `,
  InfoContainer: styled.div`
    padding-left: 100px;
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    color: var(--neutral-900);
  `,
  TitleContainer: styled.div`
    font-weight: 700;
    font-size: 120px;
    line-height: 100%;
    color: var(--neutral-900);
    padding-top: 300px;
  `,
  FirstLine: styled.p``,
  SecondLine: styled.p``,
  Info: styled.div`
    margin-top: 100px;
    display: flex;
    gap: 138px;
  `,
  Column: styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
  `,
  LinkGroup: styled.div`
    display: flex;
    gap: 32px;
  `,
  Background: styled.div`
    position: absolute;
    top: 0;
    left: -32px;
    width: calc(100% + 32px);
    height: 100vh;
    z-index: -1;
    overflow: hidden;
    ${() => animatedbackgroundGradient("var(--blue-200)", "#fff9e0")}
  `,
  Lemon: styled.img`
    z-index: 10;
    position: absolute;
    bottom: -100px;
    right: -50px;
    max-with: 500px;
    width: 50%;
    transform: matrix(-1, 0, 0, 1, 50, 100) !important;
  `,
};
