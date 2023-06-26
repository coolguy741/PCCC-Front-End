import { useState } from "react";
import styled from "styled-components";
import { formatDate } from "../../../lib/util/formatDate";
import Button from "../../Button";
import { Checkbox } from "../../Global/Checkbox";
import { Select } from "../../Global/Select";
import { TimeSelect } from "../TimeSelect";

interface PublishFormProps {
  selectedDate: string | undefined;
  yPos: string;
  handleAddEvent: () => void;
}

interface EventNameObject {
  [key: string]: string | undefined;
}

const EVENTS = [
  { value: "MealtimeMoment", label: "Mealtime Moment" },
  { value: "Foodway", label: "Foodway" },
];

export const TYPE_KEY_OBJ = {
  MealtimeMoment: "Mealtime Moment",
  Foodway: "Foodway",
};

export const PublishForm = ({
  selectedDate,
  yPos,
  handleAddEvent,
}: PublishFormProps) => {
  const [type, setType] = useState<string>("");

  return (
    <Style.Container>
      <div className="row">
        {!type && (
          <>
            <label>Add</label>
            <Select onChange={(e) => setType(e.target.value)} height="3rem">
              <option value="">—</option>
              {EVENTS.map((event) => (
                <option value={event.value}>{event.label}</option>
              ))}
            </Select>
          </>
        )}
        {type && (
          <>
            <div className="date-picker">
              <label>{formatDate(selectedDate)}</label>
              <div className="date-picker-row">
                <TimeSelect />
                <TimeSelect />
                <div className="all-day-btn">
                  <Checkbox />
                  <label>All Day</label>
                </div>
              </div>
            </div>
            <div className="group">
              <label>
                Add {TYPE_KEY_OBJ[type as keyof typeof TYPE_KEY_OBJ]}
              </label>
              <div className="group-row">
                <Select height="3rem">
                  <option value="">—</option>
                  <option value="mealtime">Mealtime Moment</option>
                </Select>
                <Button onClick={handleAddEvent}>Publish</Button>
              </div>
            </div>
          </>
        )}
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.25rem;

    .row {
      label {
        font-size: 1rem;
        color: var(--neutral-800);
      }

      display: flex;
      flex-direction: column;
      gap: 1.2rem;

      .add-note,
      .date-picker,
      .group {
        display: flex;
        gap: 0.5rem;
        flex-direction: column;

        .date-picker-row,
        .group-row {
          display: flex;
          flex-direction: row;
          gap: 1rem;

          .all-day-btn {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            align-items: center;
            min-width: 25%;
          }
        }
      }
    }
  `,
};
