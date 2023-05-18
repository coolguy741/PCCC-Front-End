import styled from "styled-components";
import Button from "../../../components/Button";
import { Select } from "../../../components/Global/Select";

export const LessonAssessmentPage: React.FC = () => {
  return (
    <Style.Container>
      <div className="select-container">
        <div className="labeled-input">
          <label>Theme</label>
          <Select>
            <option value="Topic A">Topic A</option>
            <option value="Topic B">Topic B</option>
            <option value="Topic C">Topic C</option>
          </Select>
        </div>
        <div className="labeled-input">
          <label>Theme</label>
          <Select>
            <option value="Topic A">Topic A</option>
            <option value="Topic B">Topic B</option>
            <option value="Topic C">Topic C</option>
          </Select>
        </div>
        <div className="labeled-input">
          <label>Theme</label>
          <Select>
            <option value="Topic A">Topic A</option>
            <option value="Topic B">Topic B</option>
            <option value="Topic C">Topic C</option>
          </Select>
        </div>
        <div className="labeled-input">
          <label>Theme</label>
          <Select>
            <option value="Topic A">Topic A</option>
            <option value="Topic B">Topic B</option>
            <option value="Topic C">Topic C</option>
          </Select>
        </div>
      </div>
      <Button>Export</Button>
    </Style.Container>
  );
};

const Style = {
  Container: styled.form`
    height: 100%;
    padding-top: 2.66vh;
    margin: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .select-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      row-gap: 2.66vh;
      .labeled-input {
        width: 27%;
        display: flex;
        flex-direction: column;
        gap: 1vh;

        label {
          color: var(--neutral-600);
        }

        select {
          height: 4.5vh;
        }
      }
    }

    button {
      align-self: flex-end;
    }
  `,
};
