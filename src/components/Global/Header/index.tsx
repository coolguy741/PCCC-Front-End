import styled from "styled-components";
import { PFKLogo } from "../../Icons";
import { LanguageToggle } from "../LanguageToggle";
import { Logo } from "../Logo";

export const Header = () => {
  return (
    <Style.Header>
      <Logo />
      <div className="header-options">
        <LanguageToggle />
        <PFKLogo />
      </div>
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
    z-index: 10;
    pointer-events: none;
    box-sizing: border-box;

    .header-options {
      display: flex;
      align-items: center;

      svg {
        margin-left: 25px;
      }
    }
  `,
};
