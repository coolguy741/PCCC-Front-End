import styled from "styled-components";
import { Input } from "../../Global/Input";
import { Select } from "../../Global/Select";

export const AddNoteForm = () => {
  return (
    <Style.Container>
      <div className="row">
        <label>Add note</label>
        <Input type="text" height="5rem"></Input>
        <label>Add to</label>
        <Select height="2.5rem">
          <option value=""></option>
          <option value="">Group A</option>
        </Select>
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
      gap: 0.5rem;
    }
  `,
};
