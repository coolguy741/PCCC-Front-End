import { useMemo, useState } from 'react';
import styled from 'styled-components';

import { useCalendarEventsStore } from '../../../stores/eventsStore';
import { EventForm } from '../EventForm';
import { EventTypeForm } from '../EventTypeForm';

export interface EventType {
  type: string;
  value: string;
}

export type CalendarEvent = {
  curriculum: string;
  group: string;
  topic: string;
  name: string;
};

type PopupSize = 'sm' | 'md' | 'lg';

interface Props {
  position: {
    x: number;
    y: number;
  };
  isOpen?: boolean;
  close: () => void;
  isConfirm?: boolean;
  selectedDate?: string;
}

export const CalendarPopup: React.FC<Props> = ({
  isOpen = false,
  isConfirm = false,
  position,
  selectedDate,
  close,
}) => {
  const addEvent = useCalendarEventsStore((state) => state.addEvent);
  const [eventType, setEventType] = useState<EventType | undefined>();
  const popupSize = useMemo<PopupSize>(() => {
    return isConfirm || !eventType ? 'sm' : 'md';
  }, [isConfirm, eventType]);

  const handleAddEvent = (event: CalendarEvent) => {
    addEvent({
      title: event.group,
      start: selectedDate,
      type: eventType?.type,
      description: `${event.curriculum.replaceAll(
        '-',
        ' ',
      )} ${event.topic.replaceAll('-', ' ')} ${event.name}`,
    });
    handleClose();
  };

  const handleClose = () => {
    close();
    setEventType(undefined);
  };

  return (
    <Container isOpen={isOpen} position={position} popupSize={popupSize}>
      <div className="popup-background" onClick={handleClose}></div>
      <div className="popup-container">
        <div className="popup">
          {!eventType && <EventTypeForm setEventType={setEventType} />}
          {eventType && (
            <EventForm eventType={eventType} addEvent={handleAddEvent} />
          )}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div.attrs(
  (props: {
    position: { x: number; y: number };
    isOpen: boolean;
    popupSize: PopupSize;
  }) => ({
    position: props.position,
    isOpen: props.isOpen,
    popupSize: props.popupSize,
  }),
)`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: relative;

  .popup-background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #d9d9d9;
    opacity: 0;
    z-index: 2;
  }
  .popup-container {
    ${({ position }) =>
      `top: ${position?.y}px;
    left: ${position?.x}px;
    `}
    transform: translate(-50%);
    width:  ${({ popupSize }) => `${popupSize === 'sm' ? 300 : 500}px;`}
    position: fixed;
    z-index: 10;

    .popup {
      background: #9d9d9d;
      padding: 20px;
      border-radius: 5px;
      border: 1px solid black;
      position: relative;

      &:after {
        content: "";
        width: 20px;
        left: 50%;
        transform: translate(-50%) rotate(45deg);
        position: absolute;
        height: 20px;
        top: -11.5px;
        border-top: 1px solid black;
        border-left: 1px solid black;
        border-top-left-radius: 5px;
        background: #9d9d9d;
      }
    }
  }
`;
