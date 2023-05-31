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
        <div className="list-item">
          <FoodwaysListItem
            key={item.id}
            data={item}
            selectable={selectable}
            onSelectedChange={onSelectionChange}
          />
        </div>
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

    .list-item {
      flex-basis: calc(50% - 20px);
    }
  `,
};
