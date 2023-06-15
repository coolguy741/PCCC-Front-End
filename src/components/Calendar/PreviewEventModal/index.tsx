import { EventImpl } from "@fullcalendar/core/internal";
import { useMemo, useState } from "react";
import styled from "styled-components";
import { formatDate } from "../../../lib/util/formatDate";
import { getTimeFromDateString } from "../../../lib/util/getTimeFromDateString";
import { TYPE_KEY_OBJ } from "../StandardPublishForm";

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

type PopupSize = "sm" | "md" | "lg";

interface Props {
  position: {
    x: number;
    y: number;
    xPos: string;
    yPos: string;
    height: number;
  };
  isOpen?: boolean;
  close: () => void;
  isConfirm?: boolean;
  selectedDate?: string;
  selectedEvent: EventImpl;
}

export const PreviewEventModal: React.FC<Props> = ({
  isOpen = false,
  isConfirm = false,
  position,
  selectedDate,
  selectedEvent,
  close,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [eventType, setEventType] = useState<EventType | undefined>();
  const popupSize = useMemo<PopupSize>(() => {
    return isConfirm || !eventType ? "sm" : "md";
  }, [isConfirm, eventType]);

  const handleClose = () => {
    close();
    setEventType(undefined);
  };

  return (
    <Style.Container
      isOpen={isOpen}
      position={position}
      popupSize={popupSize}
      width={window.innerWidth}
      height={window.innerHeight}
      onClick={() => setModalOpen(false)}
    >
      <div className="popup-background" onClick={handleClose}></div>
      <div className="popup-container">
        <div className="popup">
          <div className="header">
            <h3>
              {TYPE_KEY_OBJ[
                selectedEvent.extendedProps.type as keyof typeof TYPE_KEY_OBJ
              ] || "Event"}
            </h3>
          </div>
          <div className="content">
            <div className="row">
              <div className="section">
                <h4>Curriculum</h4>
                <p>N/A</p>
              </div>
              <div className="section">
                <h4>Topic</h4>
                <p>Description</p>
              </div>
            </div>
            <div className="row">
              <div className="section">
                {selectedEvent.start && selectedEvent.end && (
                  <>
                    <h4>{formatDate(selectedEvent.start.toString())}</h4>
                    <p>
                      {getTimeFromDateString(selectedEvent.start)} -{" "}
                      {getTimeFromDateString(selectedEvent.end)}
                    </p>
                  </>
                )}
              </div>
              <div className="section">
                <h4>Title</h4>
                <p>{selectedEvent.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div.attrs(
    (props: {
      position: {
        x: number;
        y: number;
        xPos: string;
        yPos: string;
        height: number;
      };
      isOpen: boolean;
      popupSize: PopupSize;
      height: number;
      width: number;
    }) => ({
      position: props.position,
      isOpen: props.isOpen,
      popupSize: props.popupSize,
      height: props.height,
      width: props.width,
    }),
  )`
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;

    .popup-background {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      z-index: 2;
    }
    .popup-container {
      ${({ position, height, width }) =>
        `${position?.yPos}: ${
          position?.yPos === "bottom" ? height - position?.y : position?.y
        }px;
      ${position?.xPos}: ${
          position?.xPos === "right" ? width - position?.x : position?.x
        }px;
      `}
      width: ${({ popupSize }) => `${popupSize === "sm" ? 450 : 500}px;`};
      position: fixed;
      z-index: 10;

      .popup {
        background: none;
        border-radius: 1rem;
        position: relative;
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(59.2764px);
        z-index: auto;
        display: flex;
        flex-direction: column;

        .header {
          display: flex;
          padding: 1.75rem 1.25rem 0.25rem;
          width: 100%;
          justify-content: space-between;

          h3 {
            font-size: 1.3rem;
            font-weight: 600;
          }

          img {
            cursor: pointer;
          }
        }

        .content {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;

          .row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .section {
              display: flex;
              flex-direction: column;
              gap: 0.75rem;
              width: 50%;
            }
          }
        }

        &:before {
          content: "";
          position: absolute;
          z-index: -1;
          width: 20px;
          height: 20px;
          ${({ position }) => `${position.xPos}: 0;`}
          ${({ position }) => `${position.yPos}: 33px;`}
          transform: ${({ position }) =>
            position.xPos === "right"
              ? "translate(50%) rotate(45deg)"
              : "translate(-50%) rotate(45deg)"};
          border-top-left-radius: 5px;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(59.2764px);
        }
      }
    }
  `,
};
