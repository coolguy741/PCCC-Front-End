import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../../components/Global/Button';
import { AlignmentStyle } from '../../../components/Global/Container';
import { LanguageChooser } from '../../../components/Global/LanguageChooser';
import { Text } from '../../../components/Global/Text';
import mockData from '../../../lib/mockData/mealtime-moments/mealtime-moment-edit.json';

export const MealTimeMomentsPreviewPage = () => {
  const navigate = useNavigate();
  const [lang, setLang] = useState<string>(
    localStorage.getItem('lang') ?? 'en',
  );

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
      <h2>{lang === 'en' ? mockData.en.title : mockData.fr.title}</h2>
      <Style.Content>
        <Text>
          {lang === 'en' ? mockData.en.overview : mockData.fr.overview}
        </Text>
        <Style.StyledImage
          src={lang === 'en' ? mockData.en.image : mockData.fr.image}
          alt={lang === 'en' ? mockData.en.alt : mockData.fr.alt}
        />
      </Style.Content>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div``,
  Content: styled.div`
    display: flex;
    gap: 50px;
  `,
  StyledImage: styled.img``,
};
