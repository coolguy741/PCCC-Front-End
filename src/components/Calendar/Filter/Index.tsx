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
          <Checkbox type="checkbox" defaultChecked={true} />
          <label>Group A</label>
        </div>
        <div>
          <Checkbox type="checkbox" defaultChecked={true} />
          <label>Group B</label>
        </div>
        <div>
          <Checkbox type="checkbox" defaultChecked={true} />
          <label>Group C</label>
        </div>
        <div>
          <Checkbox type="checkbox" defaultChecked={true} />
          <label>Group D</label>
        </div>
        <div>
          <Checkbox type="checkbox" defaultChecked={true} />
          <label>Self</label>
        </div>
        <div>
          <Checkbox type="checkbox" defaultChecked={true} />
          <label>Group A</label>
        </div>
        <div>
          <Checkbox type="checkbox" defaultChecked={true} />
          <label>Group B</label>
        </div>
        <div>
          <Checkbox type="checkbox" defaultChecked={true} />
          <label>Group C</label>
        </div>
        <div>
          <Checkbox type="checkbox" defaultChecked={true} />
          <label>Group D</label>
        </div>
      </Style.GroupsFilter>
      <Style.SubjectsFilter>
        <div>
          <Checkbox type="checkbox" />
          <label>Meal Plan</label>
        </div>
        <div>
          <Checkbox type="checkbox" defaultChecked={true} />
          <label>Activities</label>
        </div>
        <div>
          <Checkbox type="checkbox" defaultChecked={true} />
          <label>Recipes</label>
        </div>
        <div>
          <Checkbox type="checkbox" />
          <label>Meal Plan</label>
        </div>
        <div>
          <Checkbox type="checkbox" defaultChecked={true} />
          <label>Activities</label>
        </div>
        <div>
          <Checkbox type="checkbox" defaultChecked={true} />
          <label>Recipes</label>
        </div>
        <div>
          <Checkbox type="checkbox" defaultChecked={true} />
          <label>Self</label>
        </div>
        <div>
          <Checkbox type="checkbox" defaultChecked={true} />
          <label>Group A</label>
        </div>
        <div>
          <Checkbox type="checkbox" defaultChecked={true} />
          <label>Group B</label>
        </div>
        <div>
          <Checkbox type="checkbox" defaultChecked={true} />
          <label>Group C</label>
        </div>
        <div>
          <Checkbox type="checkbox" defaultChecked={true} />
          <label>Group D</label>
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
    flex: 1;
    padding: 1rem;
    height: 50%;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);

    div {
      display: flex;
      gap: 1.5rem;
      height: 3rem;
      align-items: center;
    }
  `,
  SubjectsFilter: styled.fieldset`
    border-radius: 8px;
    background: #ffffff50;
    overflow-y: scroll;
    flex: 1;
    padding: 1rem;
    height: 50%;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);

    div {
      display: flex;
      gap: 1.5rem;
      height: 3rem;
      align-items: center;
    }
  `,
};
