import { useState } from "react";
import styled from "styled-components";
import { formatDate } from "../../../lib/util/formatDate";
import Button from "../../Button";
import { Checkbox } from "../../Global/Checkbox";
import { Select } from "../../Global/Select";
import { FitleredSelect } from "../FilteredSelect";
import { TimeSelect } from "../TimeSelect";

interface PublishFormProps {
  selectedDate: string | undefined;
  yPos: string;
  type: string;
  isOpen: boolean;
  handleAddEvent: () => void;
  startTime: string;
  setStartTime: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  endTime: string;
  setEndTime: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const TYPE_KEY_OBJ = {
  Note: "Note",
  Activity: "Activity",
  Recipe: "Recipe",
  Assessment: "Assessment",
  MealtimeMoment: "Mealtime Moment",
  Foodway: "Foodway",
  EducatorNote: "Educator Note",
  Topic: "Topic",
  DailyDiscovery: "Daily Discovery",
};

export const StandardPublishForm = ({
  selectedDate,
  yPos,
  type,
  isOpen,
  handleAddEvent,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
}: PublishFormProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Style.Container>
      <div className="row">
        <div className="select-event">
          <label>
            Select {TYPE_KEY_OBJ[type as keyof typeof TYPE_KEY_OBJ]}
          </label>
          <Select height="3rem">
            <option value="">—</option>
            <option value="event1">Event 1</option>
            <option value="event2">Event 2</option>
            <option value="event3">Event 3</option>
          </Select>
        </div>
        <div className="date-picker">
          <label>{formatDate(selectedDate)}</label>
          <div className="date-picker-row">
            <TimeSelect value={startTime} onChange={setStartTime} />
            <TimeSelect value={endTime} onChange={setEndTime} />
            <div className="date-picker-row">
              <Checkbox />
              <label>All Day</label>
            </div>
          </div>
        </div>
        <div className="group">
          <label>Add to</label>
          <div className="group-row">
            <FitleredSelect
              position={yPos}
              isOpen={isOpen}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            />
            <Button onClick={handleAddEvent}>Add</Button>
          </div>
        </div>
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
      .select-event,
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
