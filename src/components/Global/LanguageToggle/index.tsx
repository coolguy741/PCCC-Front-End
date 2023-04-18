import { useEffect, useState } from "react";
import styled from "styled-components";

export const LanguageToggle = () => {
  const [lang, setLang] = useState(localStorage.getItem("lang") ?? "en");

  useEffect(() => {
    const currentDomain = window.location.hostname;
    if (currentDomain === "enfantsfortsmidables.ca") {
      localStorage.setItem("lang", "fr");
      setLang("fr");
    } else {
      localStorage.setItem("lang", "en");
      setLang("en");
    }
    window.dispatchEvent(new Event("storage"));
  }, []);

  const toggleLanguage = () => {
    if (lang === "en") {
      setLang("fr");
      localStorage.setItem("lang", "fr");
    }
    if (lang === "fr") {
      setLang("en");
      localStorage.setItem("lang", "en");
    }
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <Style.Toggle
      onClick={toggleLanguage}
      className={lang === "en" ? "inactive" : "active"}
    >
      <div className="slider" />
      <div>
        <span>EN</span>
      </div>
      <div>
        <span>FR</span>
      </div>
    </Style.Toggle>
  );
};

const Style = {
  Toggle: styled.div`
    font-size: 0.75rem;
    display: flex;
    position: relative;
    height: 28px;
    width: 72px;
    background: var(--blue-500);
    cursor: pointer;
    border-radius: 24px;
    z-index: 10;
    pointer-events: auto;
    justify-content: space-between;
    filter: drop-shadow(0px 10px 17px rgba(17, 165, 255, 0.3));
    align-items: center;
    padding: 0 10px;

    &:hover {
      filter: drop-shadow(0px 10px 10px rgba(17, 165, 255, 0.3));
    }

    & .slider {
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      width: 42px;
      height: 100%;
      background: #ffffff;
      border-radius: 24px;
      transition: transform 0.2s;
    }

    & div {
      z-index: 2;
      display: grid;
      justify-items: center;
      align-items: center;
      height: 100%;
      transition: transform 0.2s, color 0.2s;
      line-height: 0.75rem;
    }

    & div:nth-child(2) {
      color: #3d3d3d;
    }

    & div:nth-child(3) {
      color: #fff;
    }

    &.active {
      & div:nth-child(2) {
        color: #fff;
      }

      & div:nth-child(3) {
        color: #3d3d3d;
      }

      & .slider {
        transform: translateX(32px);
      }
    }
  `,
};
