import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  match?: string;
}

const weekDays = [
  '',
  'Sunday',
  'Monday',
  'TuesDay',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const MealPlan: React.FC<Props> = ({ match = '' }) => {
  const isPrint = useMemo(() => match.includes('print'), [match]);

  return (
    <Container isPrint={isPrint}>
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
                    {/* TODO: Look into redundant double negation */}
                    {match ? (
                      <Meal>
                        <div>
                          <div className="meal-image"></div>
                          {!isPrint && (
                            <Link to="/dashboard/meal-planner/1">
                              <img
                                src="/images/circle-minus.svg"
                                alt="circle minus"
                                width="15"
                              />
                            </Link>
                          )}
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

const Container = styled.div.attrs((props: { isPrint: boolean }) => ({
  isPrint: props.isPrint || false,
}))`
  & * {
    box-sizing: border-box;
  }
  overflow-x: hidden;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  padding: 10px;
  ${({ isPrint }) => !isPrint && `margin-right: 1.25rem; background: #c4c4c4;`};
  margin-bottom: 10px;

  & > div {
    text-align: center;
    display: grid;
    border-bottom: 1px solid #2f2f2f;

    & > div {
      padding: 10px;
      ${({ isPrint }) => isPrint && `border-right: 1px solid #2f2f2f;`}
    }
    grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

    & > div:last-child {
      ${({ isPrint }) => isPrint && `border-right: none;`}
    }
  }
  & > div:last-of-type {
    border-bottom: none;
  }
`;

const Meal = styled.div`
  width: 100%;
  height: 80px;
  & > div {
    position: relative;
    height: 100%;
    text-align: center;

    .meal-image {
      width: 80%;
      height: 70%;
      margin: auto;
      background: #2f2f2f;
    }

    img {
      position: absolute;
      top: 2px;
      right: 2px;
    }

    p {
      margin: 0;
    }
  }
`;
