import styled from "styled-components";

interface Props {
  match?: boolean;
}

const weekDays = [
  "",
  "Sunday",
  "Monday",
  "TuesDay",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const MealPlan: React.FC<Props> = ({ match = false }) => {
  return (
    <Container>
      <div>
        {weekDays.map((weekDay) => (
          <div key={`weekday-${weekDay}`}>{weekDay}</div>
        ))}
      </div>
      {Array.from({ length: 5 })
        .fill(1)
        .map((value, index) => (
          <div key={`meal-${index}`}>
            {weekDays.map((weekDay, dayIndex) => (
              <>
                {dayIndex === 0 ? (
                  <div>Meal {index + 1}</div>
                ) : (
                  <div key={`${dayIndex}-${weekDay}`}>
                    {match ? (
                      <Meal>
                        <div>
                          <img src="/images/circle-minus.svg" width="15" />
                          <p>Meal</p>
                        </div>
                      </Meal>
                    ) : (
                      <Meal />
                    )}
                  </div>
                )}
              </>
            ))}
          </div>
        ))}
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  overflow-x: hidden;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  margin-right: 1.25rem;
  background: #c4c4c4;
  margin-bottom: 10px;
  & > div {
    display: grid;
    border-bottom 1px solid #2f2f2f;
    gap: 10px;
    grid-template-columns: repeat(8, 1fr);
  }
  & > div:last-of-type {
    border-bottom: none;
  }
`;

const Meal = styled.div`
  width: 100%;
  height: 80px;
  & > div {
    width: 100%;
    height: 100%;
    background: #2f2f2f;
    position: relative;

    img {
      position: absolute;
      top: 2px;
      right: 2px;
    }

    p {
      color: #ffffff;
      margin: 0;
    }
  }
`;
