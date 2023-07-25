import { Link } from "react-router-dom";
import styled from "styled-components";
import { Typography } from "../../components/Typography";
import { convertToRelativeUnit } from "../../styles/helpers/convertToRelativeUnits";

export function FLFooter() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log("firing");
  }
  return (
    <Style.Container>
      <nav>
        <Link onClick={scrollToTop} to="/terms&conditions">
          Terms & Conditions
        </Link>
        <Link onClick={scrollToTop} to="/accessibility">
          Accessibility
        </Link>
        <Link onClick={scrollToTop} to="/privacy-policy">
          Privacy Policy
        </Link>
        <Link onClick={scrollToTop} to="/contact-us">
          Contact Us
        </Link>
      </nav>
      <Typography size="1.5vh" color="neutral-900">
        © 2022 President’s Choice Children's Charity. All Rights Reserved.
      </Typography>
    </Style.Container>
  );
}

const Style = {
  Container: styled.footer`
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${convertToRelativeUnit(32, "vw")} 0
      ${convertToRelativeUnit(64, "vw")} 0;
    margin-top: 3vh;

    a {
      font-size: 1.75vh;
      margin-right: 25px;
      transition: color 0.25s linear;
      color: var(--neutral-600);
      font-weight: 500;

      &:hover {
        color: var(--blue-500);
      }
    }
  `,
};
