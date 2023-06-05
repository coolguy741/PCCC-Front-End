import styled from "styled-components";

import { animatedbackgroundGradient } from "../../../styles/helpers/animatedBackgroundGradient";
import { Icon } from "../Icon";
import { ModalContainer } from "../ModalContainer";
import Scrollbar from "../Scrollable";
import { Typography } from "../Typography";

export interface ModalProps {
  isOpen: boolean;
  close: () => void;
  title?: string;
  width?: string;
  size?: "md" | "lg" | "xl";
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  close,
  size = "md",
  children,
  width,
  title,
}) => {
  return isOpen ? (
    <Style.Container>
      <ModalContainer close={close}></ModalContainer>
      <Style.Modal size={size} width={width}>
        {!!title && (
          <Style.ModalHeader>
            <Typography variant="h3" weight="semi-bold">
              {title}
            </Typography>
            <Icon name="close" onClick={close} />
          </Style.ModalHeader>
        )}
        <Scrollbar>{children}</Scrollbar>
      </Style.Modal>
    </Style.Container>
  ) : null;
};

const Style = {
  Container: styled.div`
    position: fixed;
    z-index: 400;
    left: 0;
    width: 100%;
  `,
  Modal: styled.div.attrs(
    (props: { size: "md" | "lg" | "xl"; width: string }) => ({
      size: props.size || "md",
      width: props.width ?? "100%",
    }),
  )`
    padding: ${({ size }) => (size === "md" ? "40px" : "49px")} 40px;
    max-width: ${({ size }) =>
      size === "md" ? "597px" : size === "lg" ? "1034px" : "1700px"};
    max-height: ${({ size }) =>
      size === "md" ? "308px" : size === "lg" ? "582px" : "917px"};
    width: ${({ width }) => width};
    display: flex;
    flex-direction: column;
    gap: calc(2 * var(--gutter-grid));
    border-radius: var(--gutter-grid);
    position: relative;
    z-index: 6000;
    margin: auto;
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
