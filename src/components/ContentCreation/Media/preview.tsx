import styled from "styled-components";
import useModal from "../../../hooks/useModal";
import { usePatterns } from "../../../hooks/usePatterns";
import Modal from "../../Modal";
import { Patterns } from "../../Patterns";
import { PreviewModal } from "../../PreviewModal";

export function MediaPreview({ src, type }: any) {
  const { modal, toggle } = useModal();
  const { currentPattern } = usePatterns();
  return (
    <>
      {" "}
      <Style.Container>
        <Patterns className="mp-audio-container" pattern={currentPattern}>
          <p onClick={toggle}>Play</p>
        </Patterns>
      </Style.Container>
      {modal && (
        <Modal modal={modal} toggle={toggle}>
          <PreviewModal url={src} type={type} fileName={"fileName"} />
        </Modal>
      )}
    </>
  );
}

const Style = {
  Container: styled.button`
    height: 100%;
    width: 100%;

    .mp-audio-container {
      display: grid;
      place-items: center;

      p {
        aspect-ratio: 1 / 1;
        display: grid;
        place-items: center;
        border-radius: 50%;
        border: 2px solid rgba(0, 0, 0, 0.2);
        background-color: rgba(0, 0, 0, 0.2);
        color: white;
        font-weight: 600;
        padding: 35px;
        font-size: 2vh;
        transition: border 0.25s linear, background 0.25s ease-in;

        &:hover {
          border: 2px solid white;
          background-color: rgba(0, 0, 0, 0.4);
        }
      }
    }
  `,
};
