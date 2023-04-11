import { ChangeEvent } from 'react';

import { EventType } from '../Popup';

interface EventTypeForm {
  setEventType: (value: EventType) => void;
}

export const EventTypeForm: React.FC<EventTypeForm> = ({ setEventType }) => {
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
    <>
      <div>
        <div>
          <label>Add</label>
        </div>
        <select name="activity" onChange={handleChange}>
          <option value="">-</option>
          <option value="activity">Activity</option>
          <option value="recipe">Recipe</option>
          <option value="assessment">Assessment</option>
          <option value="mealtime-moments">Mealtime Moments</option>
          <option value="foodways">Foodways</option>
        </select>
      </div>
      <div>
        <div>
          <label>Publish</label>
        </div>
        <select name="publish" onChange={handleChange}>
          <option value="">-</option>
          <option value="mealtime-moments">Mealtime Moments</option>
          <option value="foodways">Foodways</option>
        </select>
      </div>
    </>
  );
};
