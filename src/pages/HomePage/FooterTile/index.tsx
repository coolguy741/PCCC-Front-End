import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "../../../components/Global/Icon";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";

export const FooterTile = () => {
  return (
    <Style.Container>
      <img src="/images/icons/lemon.svg" alt="lemon" className="footer-image" />
      <h2>
        Kids who eat
        <br />
        well, do well.
      </h2>
      <nav>
        <div>
          <Link to="about-us">About Us</Link>
          <Link to="t&&c">Terms & Conditions</Link>
          <Link to="accessibility">Accessibility</Link>
        </div>
        <div>
          <Link to="about-us">Privacy Policy</Link>
          <Link to="t&&c">Contact Us</Link>
        </div>
        <div>
          <p>Follow Us</p>
          <article>
            <Icon name="facebook" />
            <Icon name="instagram" />
            <Icon name="twitter" />
            <Icon name="youtube" />
          </article>
        </div>
      </nav>
      <p className="footer-copyright">
        ©2022 President’s Choice Children's Charity. All Rights Reserved.
      </p>
    </Style.Container>
  );
};

const Style = {
  Container: styled.footer`
    height: 100vh;
    width: 100%;
    font-family: "Noir Std";
    font-style: normal;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 5vw;
    padding-left: 7.5vw;
    position: relative;

    h2 {
      color: var(--neutral-900);
      line-height: 110%;
      font-weight: 700;
      font-size: 10vh;
    }

    p.footer-copyright {
      position: absolute;
      font-size: 1.75vh;
      bottom: 5vh;
      right: 3vw;
    }

    .footer-image {
      transform: matrix(-1, 0, 0, 1, 50, 100);
      z-index: 0;
      position: absolute;
      bottom: ${convertToRelativeUnit(-100, "vh")};
      right: ${convertToRelativeUnit(-50, "vw")};
      width: 50%;
    }

    nav {
      width: 60%;
      margin-top: 7.5vh;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      z-index: 10;

      & > div {
        width: 30%;

        article {
          width: 100%;
          display: flex;
          justify-content: space-between;

          img {
            width: ${convertToRelativeUnit(32, "vw")};
          }
        }
      }

      a,
      p {
        color: var(--neutral-800);
        font-size: 2.5vh;
        font-weight: 500;
        display: block;
        margin-bottom: 3vh;
      }
    }
  `,
};
