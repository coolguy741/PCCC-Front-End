import { Link } from "react-router-dom";
import styled from "styled-components";
import { ContentListItem, ContentListItemData } from "../ContentListItem";

interface ContentListProps {
  listData: ContentListItemData[];
  selectable?: boolean;
  onSelectionChange?: (id: number, isSelected: boolean) => void;
}

export const ContentList: React.FC<ContentListProps> = ({
  listData,
  selectable,
  onSelectionChange,
}) => {
  return (
    <Style.Container>
      {listData.map((list) => (
        <StyledLink to="./asd">
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
    gap: 40px;
  `,
  ItemContainer: styled.div`
    flex-basis: calc(50% - 20px);
  `,
};

const StyledLink = styled(Link)`
  flex-basis: calc(50% - 20px);
`;
