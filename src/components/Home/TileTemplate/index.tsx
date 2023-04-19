import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button, { ButtonVariant } from "../../Button";

export interface TileTemplateProps {
  title: {
    firstLine: {
      text: string;
      color?: string;
    };
    secondLine?: {
      text: string;
      color?: string;
    };
  };
  description: string;
  button: {
    text: string;
    link: string;
    variant?: ButtonVariant;
  };
}

export const TileTemplate = ({
  title,
  description,
  button,
}: TileTemplateProps) => {
  const navigate = useNavigate();

  function goToPage(): void {
    navigate(button.link);
  }

  return (
    <style.PageContainer>
      <style.Content>
        <style.TitleContainer>
          <style.FirstLine
            // eslint-disable-next-line prettier/prettier
            color={`${
              title.firstLine.color ? title.firstLine.color : "orange"
            }`}
          >
            {title.firstLine.text}
          </style.FirstLine>
          {title.secondLine && (
            <style.SecondLine>{title.secondLine.text}</style.SecondLine>
          )}
        </style.TitleContainer>
        <style.Description>{description}</style.Description>
        <Button
          variant={`${button.variant ? button.variant : "orange"}`}
          onClick={goToPage}
          size="large"
        >
          {button.text}
        </Button>
      </style.Content>
    </style.PageContainer>
  );
};

const style = {
  PageContainer: styled.div`
    min-height: calc(100vh);
    display: flex;
    align-items: center;
    font-family: "Noir Std";
    font-style: normal;
    width: 720px;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
  `,
  TitleContainer: styled.div`
    font-weight: 900;
    font-size: 120px;
    line-height: 90%;
    leading-trim: both;
    text-edge: cap;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  `,
  FirstLine: styled.p<{ color: string }>`
    color: ${(props) => "var(--" + props.color + ")"};
  `,
  SecondLine: styled.p`
    color: var(--neutral-900);
  `,
  Description: styled.p`
    font-weight: 500;
    font-size: 23px;
    line-height: 28px;
    color: var(--neutral-700);
    width: 648px;
  `,
};
