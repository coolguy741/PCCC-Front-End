import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { formatDate } from "../../../lib/util/formatDate";
import Button from "../../Button";
import { Checkbox } from "../../Global/Checkbox";
import { TextArea } from "../../Global/TextArea";
import { FitleredSelect } from "../FilteredSelect";
import { TimeSelect } from "../TimeSelect";

interface EditNoteFormProps {
  yPos: string;
  isOpen: boolean;
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  noteDescription: string;
  setNoteDescription: Dispatch<SetStateAction<string>>;
  startTime: string | undefined;
  setStartTime: Dispatch<SetStateAction<string | undefined>>;
  endTime: string | undefined;
  setEndTime: Dispatch<SetStateAction<string | undefined>>;
  // TODO: FullCalendar type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedEvent: any;
  handleEdit: () => void;
}

export const convertTimeToSelectFormat = (time: string | undefined) => {
  if (time && time.length > 6) {
    return time.split(" ")[4].split(":")[0] + ":00";
  } else return time;
};

export const EditNoteForm = ({
  yPos,
  isOpen,
  modalOpen,
  setModalOpen,
  noteDescription,
  setNoteDescription,
  selectedEvent,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  handleEdit,
}: EditNoteFormProps) => {
  return (
    <Style.Container>
      <div className="row">
        <div className="add-note">
          <label>Edit note</label>
          <TextArea
            value={noteDescription}
            onChange={(e) => setNoteDescription(e.target.value)}
          />
        </div>
        <div className="date-picker">
          <label>{formatDate(selectedEvent.start)}</label>
          <div className="date-picker-row">
            <TimeSelect
              value={convertTimeToSelectFormat(startTime)}
              onChange={(e) => setStartTime(e.target.value)}
            />
            <TimeSelect
              value={convertTimeToSelectFormat(endTime)}
              onChange={(e) => setEndTime(e.target.value)}
            />
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
            <Button onClick={handleEdit}>Save</Button>
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
