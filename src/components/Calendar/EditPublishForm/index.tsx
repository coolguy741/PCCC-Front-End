import styled from "styled-components";
import { formatDate } from "../../../lib/util/formatDate";
import Button from "../../Button";
import { Checkbox } from "../../Global/Checkbox";
import { Select } from "../../Global/Select";
import { EVENT_NAME_OBJECT } from "../PublishForm";
import { TimeSelect } from "../TimeSelect";

interface EditPublishFormProps {
  yPos: string;
  // TODO: FullCalendar type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedEvent: any;
  type: string;
}

export const EditPublishForm = ({
  yPos,
  selectedEvent,
  type,
}: EditPublishFormProps) => {
  return (
    <Style.Container>
      <div className="row">
        <div className="date-picker">
          <label>{formatDate(selectedEvent.start)}</label>
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
          <label>Select {EVENT_NAME_OBJECT[type]}</label>
          <div className="group-row">
            <Select height="3rem">
              <option value="">—</option>
              <option value="mealtime">Mealtime Moment</option>
            </Select>
            <Button>Save</Button>
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
