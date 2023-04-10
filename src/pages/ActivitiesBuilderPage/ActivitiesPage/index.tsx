import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "../../../components/Global/Card";
import { Text } from "../../../components/Global/Text";
import { SelectBox } from "../../../components/Global/SelectBox";
import { SmallButton } from "../../../components/Global/SmallButton";
import mockData from "../../../lib/mockData/activities/activities.json";


const FilterOptions = [
  {
    value : "Curriculum name",
    label : "Curriculum name",
  },
  {
    value : "Curriculum name1",
    label : "Curriculum name1",
  },
  {
    value : "Curriculum name2",
    label : "Curriculum name2",
  },
  {
    value : "Curriculum name3",
    label : "Curriculum name3",
  },
];

const TopicOptions = [
  { 
    value: "Topic name",
    label: "Topic name"
  },
  { 
    value: "name1",
    label: "name1"
  },
  {
    value: "name2",
    label: "name2"
  },
  {
    value: "name3",
    label: "name3"
  }
];

const SortOptions = [
  {
    value: "Date Added",
    label : "Date Added"
  },
  {
    value: "A-Z",
    label : "A-Z"
  },
  {
    value: "Z-A",
    label : "Z-A"
  }
]

interface Activity {
  "id": number,
  "image": string,
  "alt": string,
  "topic": string,
  "title": string,
  "description": string
}

export const ActivitiesPage = () => {
  const [selectedActivities, setSelectedActivities] = useState<number[]>([]);
  
  const navigate = useNavigate();

  const handleSortChange = (value: string) => {
    alert("Sorted by " + value);
  }

  const handleCurriculumChange = (value: string) => {
    alert("Filtered by curriculumn: " + value);
  }

  const handleTopicChange = (value: string) => {
    alert("Filtered by topic: " + value);
  }

  const handleDeleteSelectedActivities = () => {
    const updatedActivitiesData = mockData.activities.filter((activity) => !selectedActivities.includes(activity.id));
    setSelectedActivities([]);
    setCardsData(updatedActivitiesData);
  }

  const setCardsData = (newCardsData: Activity[]) => {
    mockData.activities.splice(0, mockData.activities.length, ...newCardsData);
  }

  const handleSelectionChange = (id: number, isSelected: boolean) => {
    if(isSelected) {
      setSelectedActivities([...selectedActivities, id]);
    } else {
      setSelectedActivities(selectedActivities.filter((activity) => id !== activity));
    }
  }

  const handleCreate = () => {
    navigate("./create");
  }

  useEffect(() => {
    console.log("activities", mockData.activities);
  }, [])

  return (
    <Container>
      <InputContainer>
        <SelectBoxGroup>
          <SelectBoxContainer>
            <Text>Filter</Text>
            <div style={{gap: "20px", display: "flex"}}>
              <SelectBox options={FilterOptions} onChange={handleCurriculumChange}></SelectBox>
              <SelectBox options={TopicOptions} onChange={handleTopicChange}></SelectBox>
            </div>
          </SelectBoxContainer>
          <SelectBoxContainer>
            <Text>Sort</Text>
            <SelectBox options={SortOptions} onChange={handleSortChange}></SelectBox>
          </SelectBoxContainer>
        </SelectBoxGroup>
        <ButtonGroup>
          <SmallButton onClick={handleDeleteSelectedActivities}>Delete</SmallButton> 
          <SmallButton onClick={handleCreate}>Create</SmallButton> 
        </ButtonGroup>
      </InputContainer>
      <CardsContainer>
      {
        mockData.activities.map((activity) => (
          <Link to="./activity">
            <Card key={activity.id} image={activity.image} title={activity.title} description={activity.description} alt={activity.alt} topic={activity.topic} onSelectionChange={handleSelectionChange} id={activity.id} isSelected={false}/>
          </Link>
        ))
      }
      </CardsContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap : 30px;
`

const InputContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`

const SelectBoxContainer = styled.div`
  select {
    margin-top: 10px;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap : 20px;
`

const SelectBoxGroup = styled.div`
  display: flex;
  align-items: center;
  gap : 20px;
`