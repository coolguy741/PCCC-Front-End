import styled from "styled-components";
import { Icon } from "../../../components/Global/Icon";
export const FooterTile = () => {
  return (
    <style.PageContainer>
      <style.Background>
        <style.Lemon src="/images/lemon.png" alt="lemon" />
        <style.Rectangle3 />
        <style.Rectangle2 />
        <style.EllipseGroup>
          <style.Ellipse4 />
          <style.Ellipse3 />
          <style.Ellipse2 />
          <style.Ellipse1 />
        </style.EllipseGroup>
        <style.Rectangle1 />
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
    font-weight: 900;
    font-size: 120px;
    line-height: 90%;
    leading-trim: both;
    text-edge: cap;
    letter-spacing: 0.03em;
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
    z-index: -2;
    overflow: hidden;
  `,
  EllipseGroup: styled.div`
    position: absolute;
    width: max(100vw, 1920px);
    height: max(100vh, 1200px);
  `,
  Ellipse1: styled.div`
    position: absolute;
    width: 1257.76px;
    height: 1208.35px;
    left: -324.21px;
    top: -261.28px;
    background: #a6efcb;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    border-radius: 100%;
    transparent: 1%;
  `,
  Ellipse2: styled.div`
    position: absolute;
    width: 1437.31px;
    height: 1049.09px;
    left: -355.65px;
    top: 505.1px;
    background: #79e7b0;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    border-radius: 100%;
  `,
  Ellipse3: styled.div`
    position: absolute;
    width: 1089.27px;
    height: 962.16px;
    left: -544.64px;
    top: -301.06px;
    background: #88d2ff;
    opacity: 0.68;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    border-radius: 100%;
  `,
  Ellipse4: styled.div`
    position: absolute;
    width: 1389.03px;
    height: 1115.82px;
    left: 709.14px;
    top: 251.17px;
    background: #fff5cc;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    border-radius: 100%;
  `,
  Rectangle1: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background: rgba(255, 205, 0, 0.01);
    backdrop-filter: blur(1000px);
    transform: matrix(-1, 0, 0, 1, 0, 0);
  `,
  Rectangle2: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background: #d2f7e5;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  `,
  Rectangle3: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background: #f3d03e;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  `,
  Lemon: styled.img`
    z-index: 10;
    position: absolute;
    bottom: 0px;
    right: 0px;
    transform: matrix(1, 0, 0, 1, 0, 0)!important;
  }
  `,
};
