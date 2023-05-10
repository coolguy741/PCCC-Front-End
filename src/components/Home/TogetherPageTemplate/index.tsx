import styled from "styled-components";

import { ContentList } from "../../Global/ContentList";
import { ContentListItemData } from "../../Global/ContentListItem";
import { Typography } from "../../Global/Typography";

interface TogetherPageTemplateProps {
  title: string;
  relatedTo: string;
  listData: ContentListItemData[];
}

export const TogetherPageTemplate = ({
  title,
  relatedTo,
  listData,
}: TogetherPageTemplateProps) => {
  return (
    <Style.PageContainer>
      <Style.Background />
      <div>
        <Typography variant="h1" mb={5} color="orange-500" weight="semi-bold">
          {title}
        </Typography>
        <Typography variant="h3" mb={7} weight="semi-bold">
          Related to '{relatedTo}'
        </Typography>
      </div>
      <Style.ScrollContainer>
        <ContentList listData={listData} />
      </Style.ScrollContainer>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    padding: 118px 70px 0 70px;
    display: flex;
    height: 100vh;
    flex-direction: column;
    position: relative;
    overflow: overlay;
    max-height: 100vh;
  `,
  Background: styled.div`
    position: absolute;
    top: 0;
    left: -32px;
    width: calc(100% + 32px);
    height: 100vh;
    background: linear-gradient(270deg, var(--blue-200), #fff9e0);
    z-index: -1;
  `,
  ScrollContainer: styled.div`
    overflow-y: auto;
    height: 100%;
    padding-right: 16px;
    margin-right: -24px;
  `,
};
