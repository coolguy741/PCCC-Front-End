import React, { useState } from "react";
import styled from "styled-components";
import { SmallButton } from "../../Global/SmallButton";

export interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
}

interface Props {
  ingredients: Ingredient[];
  setIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>;
  ingredientOptions: {
    value: string,
    label: string
  } [];
  unitOptions: {
    value: string;
    label: string;
  } [];
}

export const SelectIngredients: React.FC<Props> = ({ ingredients, setIngredients, ingredientOptions, unitOptions }) => {
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");
  const [amount, setAmount] = useState(1);

  const handleNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setName(e.target.value);
  };

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUnit(e.target.value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleAdd = () => {
    if (name && unit && amount) {
      const nextID = ingredients.length;
      const newIngredient: Ingredient = {
        id: nextID,
        name,
        unit,
        amount: Number(amount),
      };
      setIngredients([...ingredients, newIngredient]);
    }
  };

  const handleDelete = (id: number) => {
    setIngredients(ingredients.filter((i) => i.id !== id));
  };

  return (
    <Container>
      <InputGroup>
        <Select value={name} onChange={handleNameChange}>
          {ingredientOptions.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </Select>
        <Input type="number" value={amount} onChange={handleAmountChange} />
        <Select value={unit} onChange={handleUnitChange}>
          {unitOptions.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </Select>
        <SmallButton onClick={handleAdd}>Add</SmallButton>
      </InputGroup>
      <Panel>
        {ingredients.map((ingredient) => (
          <PanelItem key={ingredient.id}>
            <Text>{ingredient.name}</Text>
            <div style={{display: "flex"}}>
              <Text>{ingredient.amount}</Text>
              <Text>{ingredient.unit}</Text>
            </div>
            <CrossButton onClick={() => handleDelete(ingredient.id)}>X</CrossButton>
          </PanelItem>
        ))}
      </Panel>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  gap: 20px;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 5px;
  width: 50px;
  border-radius: 4px;
  background-color: #D9D9D9;
  border: none;
`;

const Select = styled.select`
  background-color: #D9D9D9;
  padding: 5px;
  border: none;
`

const Panel = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

const PanelItem= styled.div`
  background-color: #D9D9D9;
  padding: 5px;
  border: none;
  display: flex;
  gap: 5px;
  align-items: center;
`

const Text = styled.p`
  font-size: 0.8rem;
  margin: 0;
  font-weight: 400;
`

const CrossButton = styled.button`
  font-size: 1rem;
`