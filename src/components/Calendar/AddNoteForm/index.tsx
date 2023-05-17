import styled from "styled-components";
import { formatDate } from "../../../lib/util/formatDate";
import { Checkbox } from "../../Global/Checkbox";
import { Input } from "../../Global/Input";
import { Select } from "../../Global/Select";
import { TimeSelect } from "../TimeSelect";

interface AddNoteFormProps {
  selectedDate: string | undefined;
}

export const AddNoteForm = ({ selectedDate }: AddNoteFormProps) => {
  return (
    <Style.Container>
      <div className="row">
        <div>
          <label>Add note</label>
          <Input type="text" height="5rem"></Input>
        </div>
        <div>
          <label>{formatDate(selectedDate)}</label>
          <div>
            <TimeSelect />
            <TimeSelect />
            <div>
              <Checkbox />
              <label>All Day</label>
            </div>
          </div>
        </div>
        <div>
          <label>Add to</label>
          <Select height="2.5rem">
            <option value=""></option>
            <option value="">Group A</option>
          </Select>
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
        font-size: 1.1rem;
      }

      display: flex;
      flex-direction: column;
      gap: 2rem;

      div {
        display: flex;
        gap: 0.5rem;
        flex-direction: column;

        div {
          display: flex;
          flex-direction: row;
          gap: 1rem;

          div {
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
