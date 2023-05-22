import styled from "styled-components";

interface MoreLinksModalProps {
  position: {
    x: number;
    y: number;
    xPos: string;
    yPos: string;
    height: number;
  };
  moreLinks: any;
  setShowMoreLinksModal: (boolean: boolean) => void;
}

export const MoreLinksModal = ({
  moreLinks,
  setShowMoreLinksModal,
  position,
}: MoreLinksModalProps) => {
  return (
    <Style.Container
      position={position}
      width={window.innerWidth}
      height={window.innerHeight}
      // type={selectedEvent.extendedProps.type}
      onClick={() => setShowMoreLinksModal(false)}
    >
      <div className="popup-background"></div>
      <div className="popup-container">
        <div className="popup">
          <h3>Daily Plan</h3>
          {/* {selectedEvent && (
            <div>
              <h4>{capitalize(selectedEvent.extendedProps.type)}</h4>
              <p>
                {selectedEvent.extendedProps.theme
                  ? `${selectedEvent.extendedProps.theme.toUpperCase()} — `
                  : null}
                {selectedEvent.extendedProps.type === "note"
                  ? selectedEvent.extendedProps.description
                  : selectedEvent.title}{" "}
                — at{" "}
                {selectedEvent.start.toLocaleTimeString([], {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                })}
              </p>
            </div>
          )} */}
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
      height: number;
      width: number;
      type: string;
    }) => ({
      position: props.position,
      isOpen: props.isOpen,
      height: props.height,
      width: props.width,
      type: props.type,
    }),
  )`
    display: block;
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
      width: 400px;
      position: fixed;
      z-index: 1002930923092439000;

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
        padding: 1rem 1.5rem;
        gap: 1rem;

        h3 {
          font-size: 1.3rem;
          font-weight: 600;
        }

        h4 {
          color: ${({ type }) =>
            type === "note" ? "var(--orange-500)" : "var(--yellow-700)"};
          margin-bottom: 0.3rem;
        }

        p {
          line-height: 1.3rem;
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
