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
}

interface EventNameObject {
  [key: string]: string | undefined;
}

const EVENT_NAME_OBJECT: EventNameObject = {
  mealtime: "Mealtime Moment",
  foodways: "Foodways",
};

export const PublishForm = ({ selectedDate, yPos }: PublishFormProps) => {
  const [type, setType] = useState<string>("");

  return (
    <Style.Container>
      <div className="row">
        {!type && (
          <>
            <label>Add</label>
            <Select onChange={(e) => setType(e.target.value)} height="3rem">
              <option value="">—</option>
              <option value="mealtime">Mealtime Moment</option>
              <option value="foodways">Foodways</option>
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
                <div className="date-picker-row">
                  <Checkbox />
                  <label>All Day</label>
                </div>
              </div>
            </div>
            <div className="group">
              <label>Add {EVENT_NAME_OBJECT[type]}</label>
              <div className="group-row">
                <Select height="3rem">
                  <option value="">—</option>
                  <option value="mealtime">Mealtime Moment</option>
                </Select>
                <Button>Publish</Button>
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

          .date-picker-row {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  `,
};
