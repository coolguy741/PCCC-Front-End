import styled from "styled-components";
import { Checkbox } from "../../Global/Checkbox";
import Scrollbar from "../../Global/Scrollbar";

export const CalendarFilter = () => {
  return (
    <Style.Container>
      <Style.GroupsFilterContainer>
        <Scrollbar className="groups-filter">
          <div>
            <Checkbox type="checkbox" defaultChecked={true} />
            <label>Self</label>
          </div>
          <div>
            <Checkbox
              type="checkbox"
              defaultChecked={true}
              colorOption="green"
            />
            <label>Group A</label>
          </div>
          <div>
            <Checkbox
              type="checkbox"
              defaultChecked={true}
              colorOption="green"
            />
            <label>Group B</label>
          </div>
          <div>
            <Checkbox
              type="checkbox"
              defaultChecked={true}
              colorOption="green"
            />
            <label>Group C</label>
          </div>
          <div>
            <Checkbox
              type="checkbox"
              defaultChecked={true}
              colorOption="green"
            />
            <label>Group D</label>
          </div>
          <div>
            <Checkbox
              type="checkbox"
              defaultChecked={true}
              colorOption="green"
            />
            <label>Group E</label>
          </div>
        </Scrollbar>
      </Style.GroupsFilterContainer>
      <Style.SubjectsFilterContainer>
        <Scrollbar className="subjects-filter">
          <div>
            <Checkbox type="checkbox" colorOption="orange" />
            <label>Notes</label>
          </div>
          <div>
            <Checkbox
              type="checkbox"
              defaultChecked={true}
              colorOption="yellow"
            />
            <label>Activities</label>
          </div>
          <div>
            <Checkbox
              type="checkbox"
              defaultChecked={true}
              colorOption="yellow"
            />
            <label>Recipes</label>
          </div>
          <div>
            <Checkbox type="checkbox" colorOption="yellow" />
            <label>Lesson Assessments</label>
          </div>
          <div>
            <Checkbox
              type="checkbox"
              defaultChecked={true}
              colorOption="yellow"
            />
            <label>Educator Notes</label>
          </div>
          <div>
            <Checkbox type="checkbox" colorOption="yellow" />
            <label>Mealtime Moments</label>
          </div>
          <div>
            <Checkbox type="checkbox" colorOption="yellow" />
            <label>Foodways</label>
          </div>
          <div>
            <Checkbox type="checkbox" colorOption="yellow" />
            <label>Plate Full</label>
          </div>
        </Scrollbar>
      </Style.SubjectsFilterContainer>
    </Style.Container>
  );
};

const Style = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    overflow: hidden;
    height: 100%;

    & .event-groups {
      text-align: right;
    }
  `,
  GroupsFilterContainer: styled.fieldset`
    border-radius: 8px;
    background: #ffffff50;
    padding: 1rem 1.5rem;
    height: 48%;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);

    .groups-filter {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 1rem 0rem;

      div {
        display: flex;
        gap: 2rem;
        height: 3rem;
        align-items: center;
        color: var(--neutral-800);
      }
    }
  `,
  SubjectsFilterContainer: styled.fieldset`
    border-radius: 8px;
    background: #ffffff50;
    padding: 1rem 1.5rem;
    height: 48%;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);

    .subjects-filter {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 1rem 0rem;

      div {
        display: flex;
        gap: 2rem;
        height: 3rem;
        align-items: center;
        color: var(--neutral-800);
      }
    }
  `,
};
