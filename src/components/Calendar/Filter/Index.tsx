import styled from "styled-components";
import { Checkbox } from "../../Global/Checkbox";

export const CalendarFilter = () => {
  return (
    <Style.Container>
      <Style.GroupsFilter>
        <div>
          <Checkbox type="checkbox" defaultChecked={true} />
          <label>Self</label>
        </div>
        <div>
          <Checkbox type="checkbox" defaultChecked={true} colorOption="green" />
          <label>Group A</label>
        </div>
        <div>
          <Checkbox type="checkbox" defaultChecked={true} colorOption="green" />
          <label>Group B</label>
        </div>
        <div>
          <Checkbox type="checkbox" defaultChecked={true} colorOption="green" />
          <label>Group C</label>
        </div>
        <div>
          <Checkbox type="checkbox" defaultChecked={true} colorOption="green" />
          <label>Group D</label>
        </div>
        <div>
          <Checkbox type="checkbox" defaultChecked={true} colorOption="green" />
          <label>Group E</label>
        </div>
      </Style.GroupsFilter>
      <Style.SubjectsFilter>
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
      </Style.SubjectsFilter>
    </Style.Container>
  );
};

const Style = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    overflow: hidden;
    height: 100%;

    & .event-groups {
      text-align: right;
    }
  `,
  GroupsFilter: styled.fieldset`
    border-radius: 8px;
    background: #ffffff50;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1.5rem;
    height: 50%;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);

    div {
      display: flex;
      gap: 2rem;
      height: 3rem;
      align-items: center;
      color: var(--neutral-800);
    }
  `,
  SubjectsFilter: styled.fieldset`
    border-radius: 8px;
    background: #ffffff50;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1.5rem;
    height: 50%;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);

    div {
      display: flex;
      gap: 2rem;
      height: 3rem;
      align-items: center;
      color: var(--neutral-800);
    }
  `,
};
