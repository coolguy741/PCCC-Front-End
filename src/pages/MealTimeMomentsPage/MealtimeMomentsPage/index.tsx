import styled from "styled-components";
import { Card } from "../../../components/Global/Card";
import { Text } from "../../../components/Global/Text";
import { SelectBox } from "../../../components/Global/SelectBox";
import mockData from "../../../lib/mockData/mealtime-moments/mealtime-moments.json";
import { SmallButton } from "../../../components/Global/SmallButton";

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

export const MealTimeMomentsPage = () => {
  const handleSortChange = (value: string) => {
    alert("Sort by " + value);
  }

  const handleDelete = () => {
    alert("Deleted selected mealtime moments");
  }

  const handleCreate = () => {
    alert("Deleted selected mealtime moments");
  }

  return (
    <Container>
      <InputContainer>
        <SelectBoxContainer>
          <Text>Sort</Text>
          <SelectBox options={SortOptions} onChange={handleSortChange}></SelectBox>
        </SelectBoxContainer>
        <ButtonGroup>
          <SmallButton onClick={handleDelete}>Delete</SmallButton> 
          <SmallButton onClick={handleCreate}>Create</SmallButton> 
        </ButtonGroup>
      </InputContainer>
      <CardsContainer>
      {
        mockData.moments.map((moment, index) => (
          <Card key={index} image={moment.image} title={moment.title} description={moment.description} placeholder="Moment Card" date={moment.date}/>
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
  width: 150px;
  
  select {
    margin-top: 10px;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap : 20px;
`