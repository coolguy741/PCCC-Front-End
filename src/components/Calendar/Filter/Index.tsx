import styled from "styled-components";

export const CalendarFilter = () => {
  return (
    <Style.Container>
      <div className="filter-group">
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Mealtime Moments</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={true} />
          <label>Foodways</label>
        </div>
      </div>
      <div className="event-groups">
        <select>
          <option value="group-a">Group A</option>
        </select>
      </div>
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
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & .filter-group {
      padding: 10px;
      background: #d9d9d9;
    }

    & .event-groups {
      text-align: right;
    }
  `,
};
