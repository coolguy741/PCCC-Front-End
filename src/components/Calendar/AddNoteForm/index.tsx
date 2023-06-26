import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { formatDate } from "../../../lib/util/formatDate";
import Button from "../../Button";
import { Checkbox } from "../../Global/Checkbox";
import { TextArea } from "../../Global/TextArea";
import { FitleredSelect } from "../FilteredSelect";
import { TimeSelect } from "../TimeSelect";

interface AddNoteFormProps {
  selectedDate: string | undefined;
  yPos: string;
  isOpen: boolean;
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  handleAddEvent: () => void;
  description?: string;
  setDescription?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  startTime?: string;
  setStartTime?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  endTime?: string;
  setEndTime?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const AddNoteForm = ({
  selectedDate,
  yPos,
  isOpen,
  modalOpen,
  setModalOpen,
  handleAddEvent,
  setDescription,
  description,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
}: AddNoteFormProps) => {
  return (
    <Style.Container>
      <div className="row">
        <div className="add-note">
          <label>Add note</label>
          <TextArea onChange={setDescription} value={description} />
        </div>
        <div className="date-picker">
          <label>{formatDate(selectedDate)}</label>
          <div className="date-picker-row">
            <TimeSelect value={startTime} onChange={setStartTime} />
            <TimeSelect value={endTime} onChange={setEndTime} />
            <div className="all-day-btn">
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
