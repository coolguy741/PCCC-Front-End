import styled from "styled-components";

interface LanguageChooserProps {
  lang: string,
  setLang: (lang: string) => void;
}

export const LanguageChooser = ({lang, setLang}: LanguageChooserProps) => {
  return (
    <Container>
      <StyledButton className={`${lang === "en" ? "active" : "inactive"}`} onClick={() => setLang("en")}>English</StyledButton>
      <StyledButton className={`${lang === "fr" ? "active" : "inactive"}`} onClick={() => setLang("fr")}>French</StyledButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledButton = styled.div<{className:string}>`
  border: ${(props) => (props.className === "active" ? "1px solid black ! important" : "none ! important")};
  background-color: var(--yellow);
  border-radius: 2rem;
  color: rgb(61, 61, 61);
  cursor: pointer;
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  min-width: 8rem;
`
