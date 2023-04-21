import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ContentList } from "../../../components/Global/ContentList";
import { SelectBox } from "../../../components/Global/SelectBox";
import { SmallButton } from "../../../components/Global/SmallButton";
import { Text } from "../../../components/Global/Text";
import mockData from "../../../lib/mockData/activities/activities.json";

const FilterOptions = [
  {
    value: "Curriculum name",
    label: "Curriculum name",
  },
  {
    value: "Curriculum name1",
    label: "Curriculum name1",
  },
  {
    value: "Curriculum name2",
    label: "Curriculum name2",
  },
  {
    value: "Curriculum name3",
    label: "Curriculum name3",
  },
];

const TopicOptions = [
  {
    value: "Topic name",
    label: "Topic name",
  },
  {
    value: "name1",
    label: "name1",
  },
  {
    value: "name2",
    label: "name2",
  },
  {
    value: "name3",
    label: "name3",
  },
];

const SortOptions = [
  {
    value: "Date Added",
    label: "Date Added",
  },
  {
    value: "A-Z",
    label: "A-Z",
  },
  {
    value: "Z-A",
    label: "Z-A",
  },
];

// interface Activity {
//   id: number;
//   image: string;
//   alt: string;
//   topic: string;
//   title: string;
//   description: string;
// }

export const ActivitiesPage = () => {
  // const [selectedActivities, setSelectedActivities] = useState<number[]>([]);

  const navigate = useNavigate();

  const handleSortChange = (value: string) => {
    alert("Sorted by " + value);
  };

  const handleCurriculumChange = (value: string) => {
    alert("Filtered by curriculumn: " + value);
  };

  const handleTopicChange = (value: string) => {
    alert("Filtered by topic: " + value);
  };

  // const handleDeleteSelectedActivities = () => {
  //   const updatedActivitiesData = mockData.activities.filter(
  //     (activity) => !selectedActivities.includes(activity.id),
  //   );
  //   setSelectedActivities([]);
  //   setCardsData(updatedActivitiesData);
  // };

  // const setCardsData = (newCardsData: Activity[]) => {
  //   mockData.activities.splice(0, mockData.activities.length, ...newCardsData);
  // };

  const handleSelectionChange = (id: number, isSelected: boolean) => {
    // if (isSelected) {
    //   setSelectedActivities([...selectedActivities, id]);
    // } else {
    //   setSelectedActivities(
    //     selectedActivities.filter((activity) => id !== activity),
    //   );
    // }
  };

  const handleCreate = () => {
    navigate("./create");
  };

  return (
    <Style.Container>
      <Style.InputContainer>
        <Style.SelectBoxGroup>
          <Style.SelectBoxContainer>
            <Text>Filter</Text>
            <div style={{ gap: "20px", display: "flex" }}>
              <SelectBox
                options={FilterOptions}
                onChange={handleCurriculumChange}
              ></SelectBox>
              <SelectBox
                options={TopicOptions}
                onChange={handleTopicChange}
              ></SelectBox>
            </div>
          </Style.SelectBoxContainer>
          <Style.SelectBoxContainer>
            <Text>Sort</Text>
            <SelectBox
              options={SortOptions}
              onChange={handleSortChange}
            ></SelectBox>
          </Style.SelectBoxContainer>
        </Style.SelectBoxGroup>
        <Style.ButtonGroup>
          <SmallButton>Delete</SmallButton>
          <SmallButton onClick={handleCreate}>Create</SmallButton>
        </Style.ButtonGroup>
      </Style.InputContainer>
      <ContentList
        listData={mockData.activities}
        selectable={false}
        onSelectionChange={handleSelectionChange}
      />
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
  `,
  ContentList: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  `,
  InputContainer: styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
  `,
  SelectBoxContainer: styled.div`
    select {
      margin-top: 10px;
    }
  `,
  ButtonGroup: styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
  `,
  SelectBoxGroup: styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
  `,
};
