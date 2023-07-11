import { Link } from "react-router-dom";
import styled from "styled-components";

import { PccServer23ActivitiesActivityDto } from "../../../lib/api/api";
import { MockContentsDto } from "../../../pages/types";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { ContentListItem } from "../ContentListItem";

interface ContentListProps {
  listData: PccServer23ActivitiesActivityDto[] | MockContentsDto[];
  selectable?: boolean;
  onSelectionChange?: (id: string, isSelected: boolean) => void;
}

export const ContentList: React.FC<ContentListProps> = ({
  listData,
  selectable,
  onSelectionChange,
}) => {
  return (
    <Style.Container>
      {listData.map((list, index) => (
        <StyledLink to={`./${list.id}`} key={list.id}>
          <ContentListItem
            key={list.id}
            data={list}
            selectable={selectable}
            onSelectedChange={onSelectionChange}
          />
        </StyledLink>
      ))}
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 0px;
    gap: ${convertToRelativeUnit(40, "vw")};
  `,
};

const StyledLink = styled(Link)`
  overflow: hidden;
  flex-basis: calc(50% - ${convertToRelativeUnit(20, "vw")});
`;
