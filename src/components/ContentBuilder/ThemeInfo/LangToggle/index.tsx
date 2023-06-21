import styled from "styled-components";
import { Language } from "../../../../pages/types";

import { useThemeStore } from "../../../../stores/themeStore";

const languages: { value: Language; label: string }[] = [
  { value: "en", label: "Eng" },
  { value: "fr", label: "Fr" },
];

export const LanguageToggle = () => {
  const { setLang, lang } = useThemeStore();
  const toggleLanguage = (lang: Language) => {
    setLang(lang);
  };

  return (
    <Style.Container>
      {languages.map((language) => (
        <div key={language.value}>
          <div
            className={language.value === lang ? "active" : ""}
            onClick={() => toggleLanguage(language.value)}
          >
            {language.label}
          </div>
        </div>
      ))}
    </Style.Container>
  );
};

const Style = {
  Container: styled.section`
    display: flex;
    padding: 0.5vh;
    background: #ffffff90;
    border-radius: 0.5rem;

    & > div {
      &:first-child {
        border-right: 1px solid var(--neutral-100);
        padding-right: 0.5rem;
      }
      &:last-child {
        padding-left: 0.5rem;
      }
      & > div {
        padding: 0.5vh 0.7vw;
        cursor: pointer;
        &.active {
          background: linear-gradient(#ffd760, #ffbf00);
          border-radius: 0.25rem;
        }
      }
    }
  `,
};
