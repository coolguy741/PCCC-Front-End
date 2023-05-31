import styled from "styled-components";

import { animatedbackgroundGradient } from "../../../styles/helpers/animatedBackgroundGradient";
import { Icon } from "../Icon";
import { ModalContainer } from "../ModalContainer";
import Scrollbar from "../Scrollbar";
import { Typography } from "../Typography";

export interface ModalProps {
  isOpen: boolean;
  close: () => void;
  title: string;
  size?: "md" | "lg";
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  close,
  size = "md",
  children,
  title,
}) => {
  return isOpen ? (
    <ModalContainer close={close}>
      <Style.Modal size={size}>
        <Style.ModalHeader>
          <Typography variant="h3" weight="semi-bold">
            {title}
          </Typography>
          <Icon name="close" />
        </Style.ModalHeader>
        <Scrollbar>{children}</Scrollbar>
      </Style.Modal>
    </ModalContainer>
  ) : null;
};

const Style = {
  Modal: styled.div.attrs((props: { size: "md" | "lg" }) => ({
    size: props.size || "md",
  }))`
    padding: ${({ size }) => (size === "md" ? "40px" : "49px")} 40px;
    max-width: ${({ size }) => (size === "md" ? "597px" : "1034px")};
    max-height: ${({ size }) => (size === "md" ? "308px" : "582px")};
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: calc(2 * var(--gutter-grid));
    border-radius: var(--gutter-grid);
    ${() => animatedbackgroundGradient("var(--blue-200)", "#fff9e0")};
  `,
  ModalHeader: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex: 1;
  `,
  ModalBody: styled.div`
    overflow-y: auto;
    flex: auto;
  `,
};
