import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { LinkButton } from "../../Global/Button/Link";
import { SmallButton } from "../../Global/SmallButton";
import { TopicSlider } from "../Slider";
import { ActivitiesForm } from "./Activities";
import { AssessmentForm } from "./Assessment";
import { EducatorNotesForm } from "./EducatorNotes";
import { OverviewForm } from "./Overview";
import { RecipesForm } from "./Recipes";
import { TopicForm } from "./Topic";

interface Props {
  tab: string;
  isEdit?: boolean;
  topicId: number | undefined;
}

const tabs = [
  "topic",
  "overview",
  "educator-notes",
  "assessment",
  "activities",
  "recipes",
];

const components = [
  <TopicForm />,
  <OverviewForm />,
  <EducatorNotesForm />,
  <AssessmentForm />,
  <ActivitiesForm />,
  <RecipesForm />,
];

const basePath = "/topics";

export const TopicCreateForm: React.FC<Props> = ({
  tab,
  topicId,
  isEdit = false,
}) => {
  // const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const tabIndex = useMemo(() => tabs.indexOf(tab), [tab]);
  const getPrevPath = useCallback(
    (index: number) =>
      index >= 0
        ? isEdit
          ? `/topics/${topicId}/${tabs[index]}/edit`
          : `/topics/create/${tabs[index]}`
        : basePath,
    [isEdit, topicId],
  );
  const handleNext = () => {
    if (tabIndex < tabs.length - 1) {
      navigate(
        isEdit
          ? `/topics/${topicId}/${tabs[tabIndex + 1]}/edit`
          : `/topics/create/${tabs[tabIndex + 1]}`,
      );
    } else {
      // setIsOpen(true);
    }
  };

  if (tabIndex < 0) {
    throw Error;
  }

  return (
    <div>
      <div className="flex justify-between">
        <LinkButton to={getPrevPath(tabIndex - 1)}>
          &lt; {tabIndex ? "Back" : "Return to Topic List"}
        </LinkButton>
        <div className="flex space-x-6">
          <LinkButton to="#">Enlish</LinkButton>
          <LinkButton to="#">French</LinkButton>
        </div>
        <Style.Link
          href={`/topics/preview/create/${tabs[tabIndex]}`}
          target="_blank"
        >
          Preview
        </Style.Link>
      </div>

      <div className="mt-4">{topicId ? "Edit" : "Create"} Topic</div>

      <TopicSlider tabs={tabs} tabIndex={tabIndex} />

      {components[tabIndex]}

      <div className="flex justify-end space-x-6 mt-4">
        <LinkButton to="#">Save changes, and Exit</LinkButton>
        <SmallButton onClick={handleNext}>
          Save changes, and Continue
        </SmallButton>
      </div>
    </div>
  );
};

const Style = {
  Link: styled.a`
    background-color: var(--yellow-500);
    border: none;
    border-radius: 2rem;
    color: var(--neutral-800);
    cursor: pointer;
    display: inline-block;
    font-size: 0.75rem;
    padding: 0.75rem 1.125rem;
    vertical-align: top;
  `,
};
