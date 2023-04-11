import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import { Button } from '../../Global/Button';
import { CalendarEvent, EventType } from '../Popup';

interface Props {
  eventType: EventType;
  addEvent: (event: CalendarEvent) => void;
}

export const EventForm: React.FC<Props> = ({ eventType, addEvent }) => {
  const [eventFormFields, setEventFormFields] = useState({
    curriculum: '',
    group: '',
    topic: '',
    name: '',
    note: '',
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const {
      target: { name, value },
    } = event;

    setEventFormFields({
      ...eventFormFields,
      [name]: value,
    });
  };

  const handleAddEvent = () => {
    addEvent(eventFormFields);
  };

  return (
    <Container eventType={eventType}>
      <div className="form-body">
        <div className="form-title">{eventType.value?.replace('-', ' ')}</div>
        <div>
          <input type="checkbox" name="isVisibleToGroup" />
          <label>Make visible to group</label>
        </div>
        <div>
          <div>
            <label>Curriculum</label>
          </div>
          <select
            name="curriculum"
            value={eventFormFields.curriculum}
            onChange={handleChange}
          >
            <option value="">-</option>
            <option value="curriculum-a">Curriculum A</option>
          </select>
        </div>
        <div>
          <div>
            <label>Group</label>
          </div>
          <select
            name="group"
            value={eventFormFields.group}
            onChange={handleChange}
          >
            <option value="">-</option>
            <option value="group-a">Group A</option>
          </select>
        </div>
        <div>
          <div>
            <label>Topic</label>
          </div>
          <select
            name="topic"
            value={eventFormFields.topic}
            onChange={handleChange}
          >
            <option value="">-</option>
            <option value="garden-guardians">Garden Guardians</option>
          </select>
        </div>
        <div>
          <div>
            <label>{eventType.value?.replace('-', ' ')} name</label>
          </div>
          <select
            name="topic"
            value={eventFormFields.topic}
            onChange={handleChange}
          >
            <option value="">-</option>
            <option value="garden-guardians">Garden Guardians</option>
          </select>
        </div>
      </div>
      <div className="form-footer">
        <div>
          <div>
            <label>Notes</label>
          </div>
          <input
            name="note"
            value={eventFormFields.note}
            onChange={handleChange}
          />
        </div>
        <Button onClick={handleAddEvent}>Add</Button>
      </div>
    </Container>
  );
};

const Container = styled.div.attrs((props: { eventType: EventType }) => ({
  eventType: props.eventType,
}))`
  .form-body {
    display: grid;
    grid-template-columns: 1.5fr 2fr;

    & .form-title {
      text-transform: capitalize;
    }

    & label {
      text-transform: capitalize;
    }
  }

  .form-footer {
    display: grid;
    gap: 10px;
    grid-template-columns: 3fr 1fr;
    align-items: end;
  }
`;
