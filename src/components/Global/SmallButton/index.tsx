import styled from "styled-components";

interface SmallButtonProps {
  bgColor?: string;
  children: string;
  onClick?: () => void;
}

export const SmallButton = ({
  children,
  bgColor = "yellow",
  onClick,
}: SmallButtonProps) => {
  return (
    <Style.Button onClick={onClick} bgColor={bgColor}>
      {children}
    </Style.Button>
  );
};

const Style = {
  Button: styled.button<SmallButtonProps>`
    background-color: ${(SmallButtonProps) =>
      SmallButtonProps.bgColor
        ? "var(--" + SmallButtonProps.bgColor + ")"
        : "var(--yellow-500)"};
    border: none;
    border-radius: 1.5rem;
    color: var(--neutral-800);
    cursor: pointer;
    font-size: 1rem;
    min-width: 4rem;
    line-height: 110%;
    padding: 0.5rem;
  `,
};
