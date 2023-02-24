import { useState } from "react";
import { Leva } from "leva";
import styled from "styled-components";
import { LanguageToggle } from "../../components/LanguageToggle";
import { Logo } from "../../components/Logo";
import Scene from "../../components/Scene";

export const HomePage = () => {
  const [eng, useEng] = useState(true);

  const MainEng = () => (
    <div className="title">
      <h3>
        Power <span> Full </span> Kids<sup>&trade;</sup>
      </h3>
      <h1>Launching</h1>
      <h1>Fall 2023</h1>
    </div>
  );

  const MainFr = () => (
    <div className="title">
      <h3>
        Enfants <span>Fort</span>smidables<sup>&trade;</sup>
      </h3>
      <h1>Lancement à</h1>
      <h1>
        l'automne
        <br />
        2023
      </h1>
    </div>
  );

  return (
    <StyledHomepage>
      <header>
        <Logo />
        <LanguageToggle value={eng} setValue={useEng} />
      </header>

      <main>
        {eng ? <MainEng /> : <MainFr />}
        <Scene />
      </main>

      <footer>
        {eng
          ? "For Power Full Kids program information visit www.pcchildrenscharity.ca"
          : "Pour obtenir des renseignements sur le programme Enfants FORTSmidables, visitez le site www.pcchildrenscharity.ca"}
      </footer>
      <Leva hidden={true} />
    </StyledHomepage>
  );
};

const StyledHomepage = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-height: -webkit-fill-available;
  display: grid;
  gap: 15px;
  grid-template-rows: min-content auto min-content;
  background-image: url("/images/background.svg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  .spline {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  & * {
    box-sizing: border-box;
  }

  color: #3d3d3d;
  font-kerning: normal;

  main {
    display: grid;
    width: 100%;
    justify-items: center;
    align-items: center;

    .title {
      z-index: 10;
      pointer-events: none;
    }

    span {
      color: #d41c25;
    }
    sup {
      font-family: sans-serif;
      font-size: 0.75rem;
    }

    h1 {
      font-family: "NoirStd-Heavy";
      font-size: 3rem;
      text-transform: uppercase;
      margin: 0;
      padding: 0;
      font-style: normal;
      font-weight: 900;
      line-height: 2.8rem;
      margin-left: -1px;
      letter-spacing: 1px;
    }
    h1:nth-of-type(1) {
      color: #e97a3c;
    }
    h1:nth-of-type(2) {
      font-size: 3.45rem;
    }
    h2 {
      font-family: "NoirStd-Heavy";
      font-size: 1.1rem;
      text-transform: uppercase;
      font-style: normal;
      margin: 0;
      padding: 0;
      letter-spacing: 3px;
      margin-top: 22px;
    }
    h3 {
      font-family: "NoirStd-Bold";
      font-size: 1.1rem;
      font-style: normal;
      margin: 0;
      padding: 0;
      font-weight: 700;
    }
  }

  header {
    padding: 6vw 6.5vw;
    padding-bottom: 0;
    display: grid;
    grid-template-columns: auto min-content;
    align-items: start;
    gap: 10px;
    z-index: 10;
    pointer-events: none;
    & > svg {
      width: 115px;
    }
    & > div {
      align-self: start;
    }
  }
  footer {
    padding: 6vw 6.5vw;
    padding-top: 0;
    font-size: 0.8rem;
    z-index: 10;
    pointer-events: none;
  }

  @media (min-width: 1000px) {
    header {
      padding: 2vw 2.5vw;
      padding-bottom: 0;

      & > svg {
        width: 130px;
      }
    }
    footer {
      padding: 1vw 2.5vw;
      padding-top: 0;
      font-size: 0.8rem;
    }

    main {
      .title {
        position: relative;
        padding-bottom: 230px;
        padding-right: 15px;
      }
      h1 {
        font-size: 6.1rem;
        line-height: 5.6rem;
        margin-left: -3px;
        letter-spacing: 3px;
      }
      h1:nth-of-type(2) {
        font-size: 7rem;
      }
      h2 {
        font-size: 1.7rem;
        line-height: 4.6rem;
        letter-spacing: 3px;
      }
      h3 {
        font-size: 2rem;
        margin-bottom: 12px;
        margin-top: 16px;
      }
    }
  }

  @media (orientation: portrait) {
    & main {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 0.5fr 0.25fr 1fr;

      & > div:nth-child(1) {
        grid-area: 1 / 1 / 3 / 2;
      }
      & > div:nth-child(2) {
        grid-area: 2 / 1 / 4 / 2;
      }
    }
  }

  @media (orientation: landscape) {
    & main {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;

      & > div:nth-child(1) {
        grid-area: 1 / 1 / 2 / 3;
      }
      & > div:nth-child(2) {
        grid-area: 1 / 2 / 2 / 4;
      }
    }
  }
`;
