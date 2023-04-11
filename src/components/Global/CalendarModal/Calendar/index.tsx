import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import { MouseEvent, useMemo } from 'react';
import styled from 'styled-components';

type TPlan = {
  time: Date;
  meal: string;
};

// Should move these exported types to `types.ts` as this is updated according to the data structure
export type TCalendarType = 'plan' | 'assessment' | 'recipe' | 'foodways';

export type TData = {
  group: string;
  date?: number;
  week?: number;
  type: TCalendarType;
  topic?: string;
  recipeName?: string;
  plans?: TPlan[];
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
  type = 'plan',
  data,
}) => {
  const isPlan = useMemo(() => type === 'plan', [type]);

  return (
    <StyledCalendar>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'event 1', date: '2023-03-01' },
          { title: 'event 2', date: '2023-03-02' },
        ]}
      />
    </StyledCalendar>
  );
};

const StyledCalendar = styled.div`
  margin-top: 20px;
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
