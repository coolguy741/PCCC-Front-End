import styled from "styled-components";
import { Icon } from "../Icon";
import { Typography } from "../Typography";

interface MessageBoxProps {
  variant?: "error" | "info" | "success";
  text: string;
}

export const MessageBox: React.FC<MessageBoxProps> = ({
  variant = "error",
  text,
}) => {
  return (
    <Style.MessageBox variant={variant}>
      <Icon name={variant} />
      <Typography variant="paragraph1" data-testid="message-text">
        {text}
      </Typography>
    </Style.MessageBox>
  );
};

const Style = {
  MessageBox: styled.div.attrs(
    ({ variant }: { variant?: "error" | "info" | "success" }) => ({
      variant: variant || "error",
    }),
  )`
    padding: 4px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 4px;
    background: var(
      ${({ variant }) =>
        variant === "info"
          ? "--blue-100"
          : variant === "success"
          ? "--green-100"
          : "--red-100"}
    );
  `,
};
