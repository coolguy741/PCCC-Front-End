import styled from "styled-components";
import { CenterAlignedContainer } from "../../components/Global/Container";
import { Icon } from "../../components/Global/Icon";
import { HomeTip } from "../../components/Home/HomeTip";
import { SmallButton } from "../../components/Global/SmallButton";
import { Logo } from "../../components/Global/Logo";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <PageContainer>
      <MainContent>
        <MainSection>
          <BigText>Power Full Kids</BigText><SmallText>TM</SmallText>
        </MainSection>
        <CenterAlignedContainer>
          <Icon name="scroll" width="28px"/>
        </CenterAlignedContainer>
        <Link to="./discover-together">
          <TogetherSection>
              <div className="text-container">
                <p className="text">Power Full Kids</p>
                <p className="big-text">Discover Together</p>
              </div>
              <div className="image-container">
                <img src="/images/homepage/discover-together.jpg"/>
                <HomeTip text="Discover more" top="-20px" left="100px"/>
              </div>
          </TogetherSection>
        </Link>
        <Link to="./grow-together">
          <TogetherSection>
            <div className="text-container">
              <p className="big-text">Grow Together</p>
            </div>
            <div className="image-container">
              <img src="/images/homepage/grow-together.jpg"/>
              <HomeTip text="Learn more about gardening" top="-20px" left="100px"/>
            </div>
          </TogetherSection>
        </Link>
        <Link to="./cook-together">
          <TogetherSection>
            <div className="text-container">
              <p className="big-text">Cook Together</p>
            </div>
            <div className="image-container">
              <img src="/images/homepage/cook-together.jpg"/>
              <HomeTip text="Learn more about cooking" top="-20px" left="100px"/>
            </div>
          </TogetherSection>
        </Link>
        <Hr/>
        <Link to="./games">
          <ContentSection>
            <div className="text-container">
              <p className="big-text">Games</p>
              <p className="large-text">Mad Kitchen</p>
              <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
              <SmallButton>Play</SmallButton>
            </div>
            <div className="image-container">
              <img src="/images/homepage/games.jpg"/>
              <HomeTip text="Learn more about Games" top="-20px" left="100px"/>
            </div>
          </ContentSection>
        </Link>
        <Link to="./foodways/123">
          <ContentSection>
            <div className="text-container">
              <p className="big-text">Foodways</p>
              <p className="large-text">Lorem impsum</p>
              <p className="text">z Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
            </div>
            <div className="image-container">
              <img src="/images/homepage/games.jpg"/>
              <HomeTip text="Learn more about Games" top="-20px" left="100px"/>
            </div>
          </ContentSection>
        </Link>
        <Link to="./mealTime-moments/123">
          <ContentSection>
            <div className="text-container">
              <p className="big-text">Mealtime Moments</p>
              <p className="large-text">Lorem impsum</p>
              <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
            </div>
            <div className="image-container">
              <img src="/images/homepage/games.jpg"/>
              <HomeTip text="Learn more about Games" top="-20px" left="100px"/>
            </div>
          </ContentSection>
        </Link>
        <Link to="./meal-planner">
          <ContentSection>
            <div className="text-container">
              <p className="big-text">Meal Planner</p>
              <p className="large-text">Lorem impsum</p>
              <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
            </div>
            <div className="image-container">
              <img src="/images/homepage/games.jpg"/>
              <HomeTip text="Learn more about Games" top="-20px" left="100px"/>
            </div>
          </ContentSection>
        </Link>
      </MainContent>
      <InfoContainer>
        <Logo/>
        <div className="column">
          <p>About Us</p>
          <p>Terms and conditions</p>
          <p>Accessibility</p>
        </div>
        <div className="column">
          <p>Privacy Policy</p>
          <p>Contact us</p>
        </div>
        <div className="row">
          <Icon name="facebook"/>
          <Icon name="instagram"/>
          <Icon name="twitter"/>
          <Icon name="youtube"/>
        </div>
      </InfoContainer>
      <Footer>
        ©2022 President’s Choice Children's Charity. All Rights Reserved.
      </Footer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  margin: 0px -30px;
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const BigText = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 76.993px;
  line-height: 76.993px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #C4C4C4;
  margin: 0px;

`

const SmallText = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #C4C4C4;
  
  margin: 0;
`

const MainSection = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 250px;
`

const TogetherSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px;

  .text-container {
     width:  600px;

     .text {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 800;
      font-size: 28.7848px;
      line-height: 39px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #C4C4C4;
     }

     .big-text {
      font-family: 'Noir Std';
      font-style: normal;
      font-weight: 900;
      font-size: 107.971px;
      line-height: 85%;
      text-transform: uppercase;     
      color: #D9D9D9;
      margin: 0px;
     }
  }

  .image-container {
    position: relative;
   }
`

const ContentSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  border-bottom: 2px solid black;
  margin: 0px;

  .text-container {
     width:  600px;

     .big-text {
      font-family: 'Noir Std';
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 103.68%;
      letter-spacing: 0.02em;
      color: #797979;
     }

     .large-text {
      font-family: 'Noir Std';
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 103.68%;
      letter-spacing: 0.02em;
      color: #797979;
     }

     .text {
      font-family: 'Noir Std';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.02em;
      color: #797979;
     }
  }

  .image-container {
    position: relative;
   }
`

const Hr = styled.div`
  padding: 0px;
  height: 0px;
  border-top: 2px solid black;
`

const InfoContainer = styled.div`
  padding:40px;
  background-color: #D9D9D9;
  margin: 0px;
  display: flex;
  justify-content: space-between;

  .row {
    display: flex;
    gap: 10px;
  }

`

const Footer = styled.div`
  padding: 23px;
  background-color: #797979;
  padding-left: 63px;
`