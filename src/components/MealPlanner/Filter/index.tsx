import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import { LinkButton } from '../../Global/Button/Link';

interface Props {
  match?: boolean;
}

export const MealFilter: React.FC<Props> = ({ match }) => {
  const [form, setForm] = useState({
    count: 12,
    days: 5,
  });
  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Style.Container>
      <div>
        <label>Filters</label>
        <select>
          <option value="dairy">Dairy Free</option>
        </select>
      </div>
      <div>
        <label>Select Period</label>
        <select>
          <option value="dairy">Dairy Free</option>
        </select>
      </div>
      <div>
        <label>Number of Students</label>
        <input
          type="number"
          name="count"
          value={form.count}
          onChange={handleChange}
        />
      </div>
      <div>
        <label> Meals per day</label>
        <input
          type="number"
          name="days"
          value={form.days}
          onChange={handleChange}
        />
      </div>
      <div className="flex">
        <LinkButton to="edit" disabled={match}>
          Generate Meal
        </LinkButton>
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    align-items: end;
    gap: 10px;
    padding-top: 0.75rem;
    h1 {
      font-weight: 700;
      font-size: 3rem;
      font-family: 'Noir Std';
      line-height: 3.125rem;
      margin: 0.25rem 0;
    }
    p {
      margin: 0;
      font-weight: 700;
      font-family: 'Noir Std';
    }
    select {
      width: 100%;
      border: none;
      padding: 10px 20px;
      border-radius: 8px;
    }
    input {
      width: 100%;
      border: none;
      padding: 10px 20px;
      border-radius: 8px;
    }
    label {
      margin-bottom: 1rem;
      display: inline-block;
    }
  `,
};
