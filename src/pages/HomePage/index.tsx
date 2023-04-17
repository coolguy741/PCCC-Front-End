import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../components/Global/Button";
import { AlignmentStyle } from "../../components/Global/Container";
import { Icon } from "../../components/Global/Icon";
import { Logo } from "../../components/Global/Logo";
import { HomeTip } from "../../components/Home/HomeTip";

export const HomePage = () => {
  return (
    <Style.PageContainer>
      <Style.MainContent>
        <Style.MainSection>
          <Style.BigText>Power Full Kids</Style.BigText>
          <Style.SmallText>TM</Style.SmallText>
        </Style.MainSection>
        <AlignmentStyle.CenterAlignedContainer>
          <Icon name="scroll" width="28px" />
        </AlignmentStyle.CenterAlignedContainer>
        <Link to="./discover-together">
          <Style.TogetherSection>
            <div className="text-container">
              <p className="text">Power Full Kids</p>
              <p className="big-text">Discover Together</p>
            </div>
            <div className="image-container">
              <img
                src="/images/homepage/discover-together.jpg"
                alt="discover"
              />
              <HomeTip text="Discover more" top="-20px" left="100px" />
            </div>
          </Style.TogetherSection>
        </Link>
        <Link to="./grow-together">
          <Style.TogetherSection>
            <div className="text-container">
              <p className="big-text">Grow Together</p>
            </div>
            <div className="image-container">
              <img src="/images/homepage/grow-together.jpg" alt="discover" />
              <HomeTip
                text="Learn more about gardening"
                top="-20px"
                left="100px"
              />
            </div>
          </Style.TogetherSection>
        </Link>
        <Link to="./cook-together">
          <Style.TogetherSection>
            <div className="text-container">
              <p className="big-text">Cook Together</p>
            </div>
            <div className="image-container">
              <img src="/images/homepage/cook-together.jpg" alt="discover" />
              <HomeTip
                text="Learn more about cooking"
                top="-20px"
                left="100px"
              />
            </div>
          </Style.TogetherSection>
        </Link>
        <Style.Hr />
        <Link to="./games">
          <Style.ContentSection>
            <div className="text-container">
              <p className="big-text">Games</p>
              <p className="large-text">Mad Kitchen</p>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud
              </p>
              <Button onClick={() => alert("It's coming soon")}>Play</Button>
            </div>
            <div className="image-container">
              <img src="/images/homepage/games.jpg" alt="games" />
              <HomeTip text="Learn more about Games" top="-20px" left="100px" />
            </div>
          </Style.ContentSection>
        </Link>
        <Link to="./foodways/123">
          <Style.ContentSection>
            <div className="text-container">
              <p className="big-text">Foodways</p>
              <p className="large-text">Lorem impsum</p>
              <p className="text">
                z Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud orem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim
              </p>
            </div>
            <div className="image-container">
              <img src="/images/homepage/games.jpg" alt="games" />
              <HomeTip text="Learn more about Games" top="-20px" left="100px" />
            </div>
          </Style.ContentSection>
        </Link>
        <Link to="./mealTime-moments/123">
          <Style.ContentSection>
            <div className="text-container">
              <p className="big-text">Mealtime Moments</p>
              <p className="large-text">Lorem impsum</p>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud orem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit
              </p>
            </div>
            <div className="image-container">
              <img src="/images/homepage/games.jpg" alt="games" />
              <HomeTip text="Learn more about Games" top="-20px" left="100px" />
            </div>
          </Style.ContentSection>
        </Link>
        <Link to="./meal-planner">
          <Style.ContentSection>
            <div className="text-container">
              <p className="big-text">Meal Planner</p>
              <p className="large-text">Lorem impsum</p>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              </p>
            </div>
            <div className="image-container">
              <img src="/images/homepage/games.jpg" alt="games" />
              <HomeTip text="Learn more about Games" top="-20px" left="100px" />
            </div>
          </Style.ContentSection>
        </Link>
      </Style.MainContent>
      <Style.InfoContainer>
        <Link to="/">
          <Logo />
        </Link>
        <div className="column">
          <Link to="">
            <p>About Us</p>
          </Link>
          <Link to="">
            <p>Terms and conditions</p>
          </Link>
          <Link to="">
            <p>Accessibility</p>
          </Link>
        </div>
        <div className="column">
          <Link to="">
            <p>Privacy Policy</p>
          </Link>
          <Link to="">
            <p>Contact us</p>
          </Link>
        </div>
        <div className="row">
          <a href="/">
            <Icon name="facebook" />
          </a>
          <a href="/">
            <Icon name="instagram" />
          </a>
          <a href="/">
            <Icon name="twitter" />
          </a>
          <a href="/">
            <Icon name="youtube" />
          </a>
        </div>
      </Style.InfoContainer>
      <Style.Footer>
        ©2022 President’s Choice Children's Charity. All Rights Reserved.
      </Style.Footer>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    margin: 0;
  `,
  MainContent: styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
  `,
  BigText: styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 800;
    font-size: 76.993px;
    line-height: 76.993px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #c4c4c4;
    margin: 0px;
  `,
  SmallText: styled.span`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0.02em;
    color: #c4c4c4;

    margin: 0;
  `,
  MainSection: styled.div`
    display: flex;
    align-items: flex-start;
    margin: 250px;
  `,
  TogetherSection: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px;

    .text-container {
      width: 600px;

      .text {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 800;
        font-size: 28.7848px;
        line-height: 39px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #c4c4c4;
      }

      .big-text {
        font-family: "Noir Std";
        font-style: normal;
        font-weight: 900;
        font-size: 107.971px;
        line-height: 85%;
        text-transform: uppercase;
        color: #d9d9d9;
        margin: 0px;
      }
    }

    .image-container {
      position: relative;
    }
  `,
  ContentSection: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
    border-bottom: 2px solid black;
    margin: 0px;

    .text-container {
      width: 600px;

      .big-text {
        font-family: "Noir Std";
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 103.68%;
        letter-spacing: 0.02em;
        color: #797979;
      }

      .large-text {
        font-family: "Noir Std";
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 103.68%;
        letter-spacing: 0.02em;
        color: #797979;
      }

      .text {
        font-family: "Noir Std";
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
  `,
  Hr: styled.div`
    padding: 0px;
    height: 0px;
    border-top: 2px solid black;
  `,
  InfoContainer: styled.div`
    padding: 40px;
    background-color: #d9d9d9;
    margin: 0px;
    display: flex;
    justify-content: space-between;

    .row {
      display: flex;
      gap: 10px;
    }
  `,
  Footer: styled.div`
    padding: 23px;
    background-color: #797979;
    padding-left: 63px;
  `,
};
