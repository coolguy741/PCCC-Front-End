import styled from "styled-components";

import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { ContentList } from "../../Global/ContentList";
import { ContentListItemData } from "../../Global/ContentListItem";
import Scrollbar from "../../Global/Scrollbar";

interface TogetherPageTemplateProps {
  relatedTo: string;
  listData: ContentListItemData[];
}

export const TogetherPageTemplate = ({
  relatedTo,
  listData,
}: TogetherPageTemplateProps) => {
  return (
    <Style.PageContainer>
      <h2>Related to '{relatedTo}'</h2>
      <Scrollbar width="thick">
        <ContentList listData={listData} />
      </Scrollbar>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    height: 83vh;
    display: flex;
    flex-direction: column;
    gap: ${convertToRelativeUnit(16, "vh")};
  `,
};
