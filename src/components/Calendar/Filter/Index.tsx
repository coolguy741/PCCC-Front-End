import styled from "styled-components";

export const CalendarFilter = () => {
  return (
    <Style.Container>
      <Style.GroupsFilter>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Mealtime Moments</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Foodways</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Mealtime Moments</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Foodways</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Mealtime Moments</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Foodways</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Mealtime Moments</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Foodways</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Mealtime Moments</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Foodways</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Mealtime Moments</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Foodways</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Mealtime Moments</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Foodways</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Mealtime Moments</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Foodways</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Mealtime Moments</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Foodways</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Mealtime Moments</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Foodways</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Mealtime Moments</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Foodways</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Mealtime Moments</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Foodways</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Mealtime Moments</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Foodways</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Mealtime Moments</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Foodways</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Mealtime Moments</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Foodways</label>
        </div>
      </Style.GroupsFilter>
      <Style.SubjectsFilter>
        <div className="filter-group">
          <div>
            <input type="checkbox" />
            <label>Meal Plan</label>
          </div>
          <div>
            <input type="checkbox" defaultChecked={true} />
            <label>Activities</label>
          </div>
          <div>
            <input type="checkbox" defaultChecked={true} />
            <label>Recipes</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Meal Plan</label>
          </div>
          <div>
            <input type="checkbox" defaultChecked={true} />
            <label>Activities</label>
          </div>
          <div>
            <input type="checkbox" defaultChecked={true} />
            <label>Recipes</label>
          </div>
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
    gap: 1rem;
    overflow: hidden;
    height: 100%;

    & .event-groups {
      text-align: right;
    }
  `,
  GroupsFilter: styled.fieldset`
    border-radius: 8px;
    background: #ffffff50;
    overflow: auto;
    flex: 1;
  `,
  SubjectsFilter: styled.fieldset`
    border-radius: 8px;
    background: #ffffff50;
  `,
};
