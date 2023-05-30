import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../components/Global/Button";
import { AlignmentStyle } from "../../../components/Global/Container";
import { LanguageChooser } from "../../../components/Global/LanguageChooser";
import { ModalContainer } from "../../../components/Global/ModalContainer";
import { SaveChangesModal } from "../../../components/Global/SaveChangesModal";
import { SmallButton } from "../../../components/Global/SmallButton";

export const ActivitiesEditPage = () => {
  const [lang, setLang] = useState("en");
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handlePreview = () => {
    navigate("./../preview");
  };

  const showModal = () => {
    setVisibleModal(true);
  };

  const handleSave = () => {
    navigate("./../preview");
  };

  const handleToggleLanguage = () => {
    if (lang === "en") setLang("fr");
    if (lang === "fr") setLang("en");
    setVisibleModal(false);
  };

  return (
    <Style.PageContainer>
      <Style.ButtonGroup>
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handlePreview}>Preview</Button>
      </Style.ButtonGroup>
      <h2>Create recipe</h2>
      <AlignmentStyle.CenterAlignedContainer>
        <LanguageChooser lang={lang} setLang={setLang} />
      </AlignmentStyle.CenterAlignedContainer>
      <Style.ContentContainer>
        <p>Coming Soon.</p>
        <AlignmentStyle.RightAlignedContainer>
          <SmallButton onClick={showModal}>Save</SmallButton>
        </AlignmentStyle.RightAlignedContainer>
      </Style.ContentContainer>
      {visibleModal && (
        <ModalContainer>
          <SaveChangesModal
            onSave={handleSave}
            onToggleLanguage={handleToggleLanguage}
          />
        </ModalContainer>
      )}
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    .title-buttons-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .language-toggle {
        display: flex;
        gap: 20px;
      }
    }
  `,
  ButtonGroup: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  ContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    gap: 20px;

    .left-content {
      width: 50%;

      .images-videos-tags-container {
        display: flex;
        justify-content: space-between;
        gap: 20px;
      }
    }

    .right-content {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 50%;

      .servering-size-container {
        display: flex;
        align-items: center;
        gap: 20px;
      }
    }
  `,
};
