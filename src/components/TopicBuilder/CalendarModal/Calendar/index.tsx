import { MouseEvent } from 'react';
import styled from 'styled-components';

import { AddRecipeDropdown } from '../AddRecipeDropdown';

// Should move these exported types to `types.ts` as this is updated according to the data structure
export type TCalendarType = 'assessment' | 'recipe';

export type TData = {
  group: string;
  date?: number;
  week?: number;
  type: TCalendarType;
  topic?: string;
  recipeName?: string;
};

interface Props {
  onDayClick?: (event: MouseEvent<HTMLDivElement>) => void;
  onWeekClick?: (event: MouseEvent<HTMLDivElement>) => void;
  type: TCalendarType;
  data?: TData;
}

export const Calendar: React.FC<Props> = ({
  onDayClick,
  onWeekClick,
  type = 'assessment',
  data,
}) => {
  function placeholderForAddRecipe() {
    return 'add recipe';
  }
  return (
    <StyledCalendar>
      {Array.from({ length: 5 })
        .fill(1)
        .map((value, index) => {
          return (
            <Week
              key={`row-${index}`}
              id={`${index + 1}`}
              onClick={onWeekClick}
            >
              {Array.from({ length: 7 })
                .fill(1)
                .map((value, colIndex) => {
                  const date = 7 * index + colIndex + 1;

                  return (
                    <div
                      key={`column-${index}-${colIndex}`}
                      className={`day ${date <= 31 ? 'current-month' : ''}`}
                      onClick={onDayClick}
                      id={`${date}`}
                    >
                      {date % 31 === 0 ? 31 : date % 31}
                      {!!data && (
                        <div className="scheduled-plans">
                          {data.date === date && (
                            <div>
                              <div className="flex">
                                <div className="to-uppercase">{data.type}:</div>
                                <div>{data.group}</div>
                              </div>
                              <div>{data.topic}</div>
                              <div>{data.recipeName}</div>
                            </div>
                          )}
                          {data.week === index && (
                            <div>
                              <div>{data.group}s</div>
                            </div>
                          )}
                        </div>
                      )}
                      <div className="dropdown-container">
                        <AddRecipeDropdown add={placeholderForAddRecipe} />
                      </div>
                    </div>
                  );
                })}
            </Week>
          );
        })}
    </StyledCalendar>
  );
};

const StyledCalendar = styled.div`
  margin-top: 20px;
  border: 0.5px solid var(--black);
`;

const Week = styled.div.attrs((props: { isPlan: boolean }) => ({
  isPlan: props.isPlan || false,
}))`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  position: relative;
  & > div {
    min-width: 0px;
  }

  ${({ isPlan }) =>
    isPlan &&
    `&:hover .day {
      background: #2e2e2e;
    }
    &:hover > .dropdown-container .trigger {
      opacity: 1;
    }
  `}

  .dropdown-container {
    position: absolute;
    top: 0;
    width: 100%;
    .trigger {
      opacity: 0;
    }
  }

  .day {
    width: 100%;
    height: 100px;
    position: relative;
    background: #d9d9d9;
    border: 0.5px solid var(--black);
    color: grey;

    ${({ isPlan }) =>
      !isPlan &&
      `&:hover {
        background: #2e2e2e;

        & > .dropdown-container .trigger {
          opacity: 1;
        }
      }
    `}
    &.current-month {
      color: #000000;
    }

    &.active {
      background: var(--orange);
    }
  }

  .scheduled-plans {
    div {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      position: relative;
      font-size: 0.75rem;
    }
  }

  .to-uppercase {
    text-transform: uppercase;
  }

  &.active {
    .day {
      background: var(--orange);
    }
  }
`;
