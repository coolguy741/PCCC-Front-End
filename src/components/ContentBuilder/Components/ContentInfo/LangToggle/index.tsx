import styled from "styled-components";

import { Language } from "../../../../../pages/types";

const languages: { value: Language; label: string }[] = [
  { value: "en", label: "Eng" },
  { value: "fr", label: "Fr" },
];

interface Props {
  setLang: (lang: Language) => void;
  lang: Language;
}

export const LanguageToggle: React.FC<Props> = ({
  setLang,
  lang: currentLang,
}) => {
  const toggleLanguage = (lang: Language) => {
    setLang(lang);
  };

  return (
    <Style.Container>
      {languages.map((language) => (
        <div key={language.value}>
          <div
            className={language.value === currentLang ? "active" : ""}
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
    padding: 0.7vh;
    margin-top: auto;
    background: #ffffff90;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
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
        padding: 0.6vh 0.7vw;
        cursor: pointer;
        &.active {
          background: linear-gradient(#ffd760, #ffbf00);
          border-radius: 0.25rem;
        }
      }
    }
  `,
};
