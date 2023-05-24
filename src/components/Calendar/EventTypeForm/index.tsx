import { ChangeEvent } from "react";

import styled from "styled-components";
import { Select } from "../../Global/Select";
import { EventType } from "../AddEventModal";

interface IEventTypeForm {
  setEventType: (value: EventType) => void;
}

export const EventTypeForm: React.FC<IEventTypeForm> = ({ setEventType }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { name, value },
    } = event;

    setEventType({
      type: name,
      value,
    });
  };

  return (
    <Style.Container>
      <div className="row">
        <div>
          <label>Add</label>
        </div>
        <Select name="activity" onChange={handleChange} height="2.5rem">
          <option value="">-</option>
          <option value="activity">Activity</option>
          <option value="recipe">Recipe</option>
          <option value="assessment">Assessment</option>
          <option value="mealtime-moments">Mealtime Moments</option>
          <option value="foodways">Foodways</option>
        </Select>
      </div>
      <div className="row">
        <div>
          <label>Publish</label>
        </div>
        <Select name="publish" onChange={handleChange} height="2.5rem">
          <option value="">-</option>
          <option value="mealtime-moments">Mealtime Moments</option>
          <option value="foodways">Foodways</option>
        </Select>
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .row {
      label {
        font-size: 1.1rem;
      }

      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  `,
};
