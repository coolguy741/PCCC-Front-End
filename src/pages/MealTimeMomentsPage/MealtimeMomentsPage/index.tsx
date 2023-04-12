import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from '../../../components/Global/Card';
import { SelectBox } from '../../../components/Global/SelectBox';
import { SmallButton } from '../../../components/Global/SmallButton';
import { Text } from '../../../components/Global/Text';
import mockData from '../../../lib/mockData/mealtime-moments/mealtime-moments.json';

const SortOptions = [
  {
    value: 'Date Added',
    label: 'Date Added',
  },
  {
    value: 'A-Z',
    label: 'A-Z',
  },
  {
    value: 'Z-A',
    label: 'Z-A',
  },
];

interface Moment {
  id: number;
  image: string;
  alt: string;
  date: string;
  title: string;
  description: string;
}

export const MealTimeMomentsPage = () => {
  const [selectedMoments, setSelectedMoments] = useState<number[]>([]);

  const navigate = useNavigate();

  const handleSortChange = (value: string) => {
    alert('Sort by ' + value);
  };

  const handleDeleteSelectedMoments = () => {
    const updatedMomentsData = mockData.moments.filter(
      (moment) => !selectedMoments.includes(moment.id),
    );
    setSelectedMoments([]);
    setCardsData(updatedMomentsData);
  };

  const setCardsData = (newCardsData: Moment[]) => {
    mockData.moments.splice(0, mockData.moments.length, ...newCardsData);
  };

  const handleSelectionChange = (id: number, isSelected: boolean) => {
    if (isSelected) {
      setSelectedMoments([...selectedMoments, id]);
    } else {
      setSelectedMoments(selectedMoments.filter((moment) => id !== moment));
    }
  };

  const handleCreate = () => {
    navigate('./create');
  };

  useEffect(() => {
    console.log('moments', mockData.moments);
  }, []);

  return (
    <Style.Container>
      <Style.InputContainer>
        <Style.SelectBoxContainer>
          <Text>Sort</Text>
          <SelectBox
            options={SortOptions}
            onChange={handleSortChange}
          ></SelectBox>
        </Style.SelectBoxContainer>
        <Style.ButtonGroup>
          <SmallButton onClick={handleDeleteSelectedMoments}>
            Delete
          </SmallButton>
          <SmallButton onClick={handleCreate}>Create</SmallButton>
        </Style.ButtonGroup>
      </Style.InputContainer>
      <Style.CardsContainer>
        {mockData.moments.map((moment) => (
          <Link to="./mealtime-moment">
            <Card
              key={moment.id}
              image={moment.image}
              title={moment.title}
              description={moment.description}
              alt={moment.alt}
              date={moment.date}
              onSelectionChange={handleSelectionChange}
              id={moment.id}
              isSelected={false}
            />
          </Link>
        ))}
      </Style.CardsContainer>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
  `,
  CardsContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  `,
  InputContainer: styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
  `,
  SelectBoxContainer: styled.div`
    width: 150px;

    select {
      margin-top: 10px;
    }
  `,
  ButtonGroup: styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
  `,
};
