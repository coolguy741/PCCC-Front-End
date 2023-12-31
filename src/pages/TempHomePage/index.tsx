import { Leva } from "leva";
import { useEffect } from "react";
import styled from "styled-components";
import { Header } from "../../components/Global/Header";
import Scene from "../../components/Global/Scene";
import { useUIStore } from "../../stores/uiStore";
import { Language } from "../types";

export const TempHomePage = () => {
  const { lang, setLanguage } = useUIStore();

  useEffect(() => {
    setLanguage((localStorage.getItem("lang") ?? Language.EN) as Language);
    const handleStorageChange = (event: StorageEvent) => {
      setLanguage((localStorage.getItem("lang") ?? Language.EN) as Language);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [setLanguage]);

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
    <Style.Homepage>
      <Header />

      <main>
        {lang === Language.EN ? <MainEng /> : <MainFr />}
        <Scene />
      </main>

      <footer>
        {lang === Language.EN ? (
          <p>
            For Power Full Kids program information visit{" "}
            <a href="https://www.pcchildrenscharity.ca">
              www.pcchildrenscharity.ca
            </a>
          </p>
        ) : (
          <p>
            Pour obtenir des renseignements sur le programme Enfants
            FORTSmidables, visitez le site{" "}
            <a href="https://www.fondationpourlesenfantspc.ca">
              www.fondationpourlesenfantspc.ca
            </a>
          </p>
        )}
      </footer>
      <Leva hidden={true} />
    </Style.Homepage>
  );
};

const Style = {
  Homepage: styled.div`
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
    color: var(--neutral-800);
    font-kerning: normal;
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

    main {
      width: 100%;
      display: flex;
      justify-items: center;

      .title {
        position: absolute;
        top: 30%;
        left: 15%;
        z-index: 10;
        pointer-events: none;
      }

      span {
        color: var(--red-500);
      }
      sup {
        font-family: sans-serif;
        font-size: 0.75rem;
      }

      h1 {
        font-family: "Noir Std";
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
        color: #fff;
      }
      h1:nth-of-type(2) {
        font-size: 3.45rem;
      }
      h2 {
        font-family: "Noir Std";
        font-weight: 900;
        font-size: 1.1rem;
        text-transform: uppercase;
        font-style: normal;
        margin: 0;
        padding: 0;
        letter-spacing: 3px;
        margin-top: 22px;
      }
      h3 {
        font-family: "Noir Std";
        font-weight: 700;
        font-size: 1.1rem;
        font-style: normal;
        margin: 0;
        padding: 0;
        font-weight: 700;
      }
    }

    footer {
      position: absolute;
      bottom: 0;
      font-size: 0.8rem;
      z-index: 10;
      pointer-events: none;

      a {
        pointer-events: auto;
      }
    }

    @media (min-width: 1000px) {
      footer {
        padding: 1vw 2.5vw;
        padding-top: 0;
        font-size: 0.8rem;
      }

      main {
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
    }

    @media (orientation: landscape) {
    }
  `,
};
