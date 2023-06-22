import styled from "styled-components";

import Button from "../../Button";
import Scrollable from "../../Global/Scrollable";

const activities = [
  "Tools of the trade",
  "Food is all around us",
  "Wait, dandelian tea?",
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
];
export const Activities = () => {
  return (
    <Style.Container>
      <p>Name</p>
      <Scrollable>
        <Style.ItemsContainer>
          {activities.map((activity, index) => (
            <Style.Item key={`activity-${index}`}>
              {activity}
              <Button variant="orange">Add</Button>
            </Style.Item>
          ))}
        </Style.ItemsContainer>
      </Scrollable>
    </Style.Container>
  );
};

const Style = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100vh;
    background: #ffffff50;
    backdrop-filter: blur(118px);
    padding: 1vh 0 1vh 1vw;
    border-radius: 1rem;
  `,
  ItemsContainer: styled.div`
    width: 100%;
    padding-bottom: 20px;
  `,
  Item: styled.div`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--neutral-400);
    padding: 1vh 0;
    display: flex;
    &:last-child {
      border-bottom: none;
    }
  `,
};
