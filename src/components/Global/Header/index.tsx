import { Logo } from "../Logo";
import { LanguageToggle } from "../LanguageToggle";
import { SetStateAction } from "react";
import styled from "styled-components";

interface HeaderProps {
  eng: boolean,
  useEng : React.Dispatch<SetStateAction<boolean>>
}

export const Header = ({eng, useEng}:HeaderProps ) => {
  return (
    <StyledHeader>
      <Logo />
      <LanguageToggle value={eng} setValue={useEng} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
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
`;
