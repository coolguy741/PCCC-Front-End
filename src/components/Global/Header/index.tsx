import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../Button";
import { PFKLogo } from "../../Icons";
import { LanguageToggle } from "../LanguageToggle";
import { Logo } from "../Logo";

export const Header = () => {
  return (
    <Style.Header>
      <Logo />
      <nav className="header-options">
        <LanguageToggle />
        <Link to="/signin">
          <Button size="small" variant="ghost">
            Log In
          </Button>
        </Link>
        <Link to="/signup" onClick={() => console.log("clicked!")}>
          <Button size="small">Sign Up</Button>
        </Link>
        <PFKLogo />
      </nav>
    </Style.Header>
  );
};

const Style = {
  Header: styled.header`
    position: absolute;
    width: 100%;
    height: 108px;
    padding: 0 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    z-index: 15;
    pointer-events: none;
    box-sizing: border-box;

    a,
    button {
      z-index: 10;
      pointer-events: auto;
    }

    .header-options {
      display: flex;
      align-items: center;
      width: 50%;
      max-width: 625px;
      justify-content: space-between;

      svg {
        margin-left: 25px;
      }
    }
  `,
};
