import styled from "styled-components";

export const TileTemplate = () => {
  return (
    <style.PageContainer>
      <style.Content>
        <style.TitleContainer>
          <style.FirstLine></style.FirstLine>
        </style.TitleContainer>
      </style.Content>
    </style.PageContainer>
  );
};

const style = {
  PageContainer: styled.div`
    min-height: calc(100vh);
    display: flex;
    align-items: center;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
  `,
  TitleContainer: styled.div`
    font-family: "Noir Std";
    font-style: normal;
    font-weight: 900;
    font-size: 120px;
    line-height: 90%;
    leading-trim: both;
    text-edge: cap;
    letter-spacing: 0.03em;
  `,
  ColoredText: styled.p<{ color: string }>`
    color: ;
  `,
};
