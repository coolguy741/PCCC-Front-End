import React, { useState } from 'react';
import styled from 'styled-components';
import { SmallButton } from '../../Global/SmallButton';

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
    value: string;
    label: string;
  }[];
  unitOptions: {
    value: string;
    label: string;
  }[];
}

export const SelectIngredients: React.FC<Props> = ({
  ingredients,
  setIngredients,
  ingredientOptions,
  unitOptions,
}) => {
  const [name, setName] = useState('');
  const [unit, setUnit] = useState('');
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
    <Style.Container>
      <Style.InputGroup>
        <Style.Select value={name} onChange={handleNameChange}>
          {ingredientOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Style.Select>
        <Style.Input
          type="number"
          value={amount}
          onChange={handleAmountChange}
        />
        <Style.Select value={unit} onChange={handleUnitChange}>
          {unitOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Style.Select>
        <SmallButton onClick={handleAdd}>Add</SmallButton>
      </Style.InputGroup>
      <Style.Panel>
        {ingredients.map((ingredient) => (
          <Style.PanelItem key={ingredient.id}>
            <Style.Text>{ingredient.name}</Style.Text>
            <div style={{ display: 'flex' }}>
              <Style.Text>{ingredient.amount}</Style.Text>
              <Style.Text>{ingredient.unit}</Style.Text>
            </div>
            <Style.CrossButton onClick={() => handleDelete(ingredient.id)}>
              X
            </Style.CrossButton>
          </Style.PanelItem>
        ))}
      </Style.Panel>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  InputGroup: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    gap: 20px;
    font-size: 1rem;
  `,
  Input: styled.input`
    padding: 5px;
    width: 50px;
    border-radius: 4px;
    background-color: #d9d9d9;
    border: none;
  `,
  Select: styled.select`
    background-color: #d9d9d9;
    padding: 5px;
    border: none;
  `,
  Panel: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  `,
  PanelItem: styled.div`
    background-color: #d9d9d9;
    padding: 5px;
    border: none;
    display: flex;
    gap: 5px;
    align-items: center;
  `,
  Text: styled.p`
    font-size: 0.8rem;
    margin: 0;
    font-weight: 400;
  `,
  CrossButton: styled.button`
    font-size: 1rem;
  `,
};
