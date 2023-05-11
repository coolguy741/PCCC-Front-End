import { Link } from "react-router-dom";
import styled from "styled-components";
import { PccServer23FoodwaysFoodwayDto } from "../../../lib/api/api";
import { FoodwaysListItem } from "../FoodwaysListItem";

interface FoodwaysListProps {
  listData: PccServer23FoodwaysFoodwayDto[];
  selectable?: boolean;
  onSelectionChange?: (id: string, isSelected: boolean) => void;
}

export const FoodwaysList: React.FC<FoodwaysListProps> = ({
  listData,
  selectable,
  onSelectionChange,
}) => {
  return (
    <Style.Container>
      {listData.map((item) => (
        <StyledLink to={`${item.id}`}>
          <FoodwaysListItem
            key={item.id}
            data={item}
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
