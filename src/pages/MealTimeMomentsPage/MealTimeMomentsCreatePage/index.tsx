import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../../components/Global/Button';
import { AlignmentStyle } from '../../../components/Global/Container';
import { FileUploader } from '../../../components/Global/FileUploader';
import { LanguageChooser } from '../../../components/Global/LanguageChooser';
import { ModalContainer } from '../../../components/Global/ModalContainer';
import { SaveChangesModal } from '../../../components/Global/SaveChangesModal';
import { SmallButton } from '../../../components/Global/SmallButton';
import { SelectTags, Tag } from '../../../components/Recipes/SelectTags';
import mockData from '../../../lib/mockData/mealtime-moments/mealtime-moment-create.json';

// TODO: NOBERT. Continue style object implementation

export const MealTimeMomentsCreatePage = () => {
  const [lang, setLang] = useState<string>(
    localStorage.getItem('lang') ?? 'en',
  );
  const [titleEn, setTitleEn] = useState('');
  const [titleFr, setTitleFr] = useState('');
  const [overivewEn, setOverviewEn] = useState('');
  const [overivewFr, setOverviewFr] = useState('');
  const [tags, setTags] = useState<Tag[]>([]);
  const [visibleModal, setVisibleModal] = useState(false);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handlePreview = () => {
    navigate('./../preview');
  };

  const handleSave = () => {
    alert('Save');
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (lang === 'en') {
      setTitleEn(value);
    } else {
      setTitleFr(value);
    }
  };

  const handleOverviewChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const value = event.target.value;
    if (lang === 'en') {
      setOverviewEn(value);
    } else {
      setOverviewFr(value);
    }
  };

  const handleToggleLanguage = () => {
    setVisibleModal(false);
    if (lang === 'en') setLang('fr');
    else setLang('en');
  };

  return (
    <PageContainer>
      <ButtonGroup>
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handlePreview}>Preview</Button>
      </ButtonGroup>
      <AlignmentStyle.CenterAlignedContainer>
        <LanguageChooser lang={lang} setLang={setLang} />
      </AlignmentStyle.CenterAlignedContainer>
      <Content>
        <DetailContainer>
          <AlignmentStyle.LeftAlignedContainer>
            <h3>Title</h3>
          </AlignmentStyle.LeftAlignedContainer>
          <TitleInput
            value={lang === 'en' ? titleEn : titleFr}
            onChange={handleTitleChange}
          />
        </DetailContainer>
        <OverviewImageContainer>
          <DetailContainer>
            <h3>Overview</h3>
            <OverviewTextArea
              value={lang === 'en' ? overivewEn : overivewFr}
              rows={15}
              onChange={handleOverviewChange}
            ></OverviewTextArea>
          </DetailContainer>
          <DetailContainer>
            <h3>Images and Videos</h3>
            <FileUploader />
          </DetailContainer>
          <DetailContainer>
            <h3>Add tags</h3>
            <SelectTags
              tagOptions={mockData.Tags}
              tags={tags}
              setTags={setTags}
            />
          </DetailContainer>
        </OverviewImageContainer>
      </Content>
      <AlignmentStyle.RightAlignedContainer>
        <SmallButton onClick={() => setVisibleModal(true)}>Save</SmallButton>
      </AlignmentStyle.RightAlignedContainer>
      {visibleModal && (
        <ModalContainer>
          <SaveChangesModal
            onSave={handleSave}
            onToggleLanguage={handleToggleLanguage}
          />
        </ModalContainer>
      )}
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TitleInput = styled.input`
  border: solid 1px black;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px #007bff33;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-basis: 0;
  flex-grow: 1;
`;

const OverviewImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 30px;
`;

const OverviewTextArea = styled.textarea`
  width: 100%;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px #007bff33;
  }
`;
