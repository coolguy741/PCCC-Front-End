import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ActivityContent } from '../../../components/Activities/ActivityContent';
import { Button } from '../../../components/Global/Button';
import { AlignmentStyle } from '../../../components/Global/Container';
import { LanguageChooser } from '../../../components/Global/LanguageChooser';

export const ActivitiesPreviewPage = () => {
  const [lang, setLang] = useState('en');
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Style.PageContainer>
      <AlignmentStyle.LeftAlignedContainer>
        <Button onClick={handleBack}>Back</Button>
      </AlignmentStyle.LeftAlignedContainer>
      <AlignmentStyle.CenterAlignedContainer>
        <LanguageChooser lang={lang} setLang={setLang} />
      </AlignmentStyle.CenterAlignedContainer>
      <ActivityContent />
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
};
