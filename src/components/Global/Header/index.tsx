import styled from "styled-components";
import { LanguageToggle } from "../LanguageToggle";
import { Logo } from "../Logo";

export const Header = () => {
  return (
    <Style.Header>
      <Logo />
      <LanguageToggle />
    </Style.Header>
  );
};

const Style = {
  Header: styled.header`
    position: absolute;
    width: 100%;
    padding: 6vw 6.5vw;
    padding-bottom: 0;
    display: grid;
    grid-template-columns: auto min-content;
    align-items: start;
    gap: 10px;
    z-index: 10;
    pointer-events: none;
    box-sizing: border-box;

    & > svg {
      width: 115px;
    }
    & > div {
      align-self: start;
    }
    @media (min-width: 1000px) {
      padding: 2vw 2.5vw;
      padding-bottom: 0;

      & > svg {
        width: 130px;
      }
    }
  `,
};
