import { useState } from "react";
import styled from "styled-components";
import { animatedbackgroundGradient } from "../../../styles/helpers/animatedBackgroundGradient";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Modal from "../../Modal";
import { ModalHeader } from "../ModalHeader";
import { ModalMenu } from "../ModalMenu";
import { UploadGallery } from "../UploadGallery";
import { UploadList } from "../UploadList";

export function UploadModal({
  toggle,
  modal,
}: {
  toggle: () => void;
  modal: boolean;
}) {
  const [view, setView] = useState<"list" | "gallery">("list");

  return (
    <Modal modal={modal} toggle={toggle}>
      <Style.Container>
        <ModalHeader changeView={setView} />
        <ModalMenu />
        <article className="um-content">
          {view === "list" ? (
            <UploadList list_items={dummy_content} />
          ) : (
            <UploadGallery list_items={dummy_content} />
          )}
        </article>
      </Style.Container>
    </Modal>
  );
}

const Style = {
  Container: styled.section`
    width: 60vw;
    height: 70vh;
    ${() => animatedbackgroundGradient("#C4E8FF", "#D2F7E5")}
    z-index: 45;
    border-radius: 16px;
    padding: 24px;

    article.um-content {
      ${glassBackground}
      padding: 15px 10px;
    }
  `,
};

const dummy_content = [
  {
    name: "Assessment.pdf",
    sharing: "Self",
    type: "doc",
    date: "Sat, 27 May 2023",
    size: "2mb",
  },
  {
    name: "Assessment.pdf",
    sharing: "Self",
    type: "doc",
    date: "Sat, 27 May 2023",
    size: "2mb",
  },
  {
    name: "Assessment.pdf",
    sharing: "Self",
    type: "doc",
    date: "Sat, 27 May 2023",
    size: "2mb",
  },
  {
    name: "Assessment.pdf",
    sharing: "Self",
    type: "doc",
    date: "Sat, 27 May 2023",
    size: "2mb",
  },
  {
    name: "Assessment.pdf",
    sharing: "Self",
    type: "doc",
    date: "Sat, 27 May 2023",
    size: "2mb",
  },
  {
    name: "Assessment.pdf",
    sharing: "Self",
    type: "doc",
    date: "Sat, 27 May 2023",
    size: "2mb",
  },
  {
    name: "Assessment.pdf",
    sharing: "Self",
    type: "doc",
    date: "Sat, 27 May 2023",
    size: "2mb",
  },
  {
    name: "Assessment.pdf",
    sharing: "Self",
    type: "doc",
    date: "Sat, 27 May 2023",
    size: "2mb",
  },
  {
    name: "Assessment.pdf",
    sharing: "Self",
    type: "doc",
    date: "Sat, 27 May 2023",
    size: "2mb",
  },
  {
    name: "Assessment.pdf",
    sharing: "Self",
    type: "doc",
    date: "Sat, 27 May 2023",
    size: "2mb",
  },
  {
    name: "Assessment.pdf",
    sharing: "Self",
    type: "doc",
    date: "Sat, 27 May 2023",
    size: "2mb",
  },
  {
    name: "Assessment.pdf",
    sharing: "Self",
    type: "doc",
    date: "Sat, 27 May 2023",
    size: "2mb",
  },
  {
    name: "Assessment.pdf",
    sharing: "Self",
    type: "doc",
    date: "Sat, 27 May 2023",
    size: "2mb",
  },
  {
    name: "Assessment.pdf",
    sharing: "Self",
    type: "doc",
    date: "Sat, 27 May 2023",
    size: "2mb",
  },
  {
    name: "Assessment.pdf",
    sharing: "Self",
    type: "doc",
    date: "Sat, 27 May 2023",
    size: "2mb",
  },
  {
    name: "Assessment.pdf",
    sharing: "Self",
    type: "doc",
    date: "Sat, 27 May 2023",
    size: "2mb",
  },
];
