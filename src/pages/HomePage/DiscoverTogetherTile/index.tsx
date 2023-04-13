import styled from "styled-components";

export const DiscoverTogetherTile = () => {
  return (
    <style.PageContainer>
      <style.Content>
        <style.Title>
          <style.TitleFirstLine>Discover</style.TitleFirstLine>
          <style.TitleSecondLine>Together</style.TitleSecondLine>
        </style.Title>
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
  Title: styled.div`
    font-family: "Noir Std";
    font-style: normal;
    font-weight: 900;
    font-size: 120px;
    line-height: 90%;
  `,
  TitleFirstLine: styled.p`
    color: var(--orange-600);
  `,
  TitleSecondLine: styled.p`
    color: var(--neutral-900);
  `,
};
