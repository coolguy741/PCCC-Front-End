import styled from "styled-components";

import {
  PccServer23ActivitiesActivityDto,
  PccServer23CurriculumRecipesCurriculumRecipeDto,
  PccServer23MealtimeMomentsMealtimeMomentDto,
  PccServer23ThemesThemeDto,
} from "../../../lib/api/api";
import { MockContentsDto } from "../../../pages/types";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { ContentListItem } from "../ContentListItem";

interface ContentListProps {
  listData:
    | PccServer23ActivitiesActivityDto[]
    | PccServer23ThemesThemeDto[]
    | PccServer23CurriculumRecipesCurriculumRecipeDto[]
    | PccServer23MealtimeMomentsMealtimeMomentDto[]
    | MockContentsDto[];
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
      {listData.map((list) => (
        <StyledLink key={list.id}>
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
    flex-wrap: wrap;
    overflow: hidden;
    align-items: flex-start;
    padding: 0px;
    gap: ${convertToRelativeUnit(40, "vw")};
  `,
};

const StyledLink = styled.div`
  width: calc(50% - ${convertToRelativeUnit(20, "vw")});
`;
