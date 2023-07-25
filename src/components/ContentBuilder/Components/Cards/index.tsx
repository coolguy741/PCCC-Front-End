import { useMemo } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import { ThemeComponent } from "../../../../pages/types";
import { DoubleBullet } from "../../../ContentCreation/DoubleBullet";
import { DoubleImage } from "../../../ContentCreation/DoubleImage";
import {
  AMC,
  ATF,
  AW,
  DB,
  DoubleImageIcon,
  IC,
  IWC,
  PWH,
  PWN,
  SB,
  SingleImageIcon,
  TitleIcon,
} from "../../../ContentCreation/Icons";
import { ImageWithCaption } from "../../../ContentCreation/ImageWithCaption";
import { IngredientCard } from "../../../ContentCreation/IngredientCard";
import { LessonAssessmentMultiple } from "../../../ContentCreation/LessonAssessment/MultipleSelection";
import { LessonAssessmentTextArea } from "../../../ContentCreation/LessonAssessment/TextArea";
import { LessonAssessmentTrueOrFalse } from "../../../ContentCreation/LessonAssessment/TrueFalse";
import { NumberedParagraph } from "../../../ContentCreation/NumberedParagraph";
import { ParagraphWithHeading } from "../../../ContentCreation/ParagraphWithHeading";
import { SingleBullet } from "../../../ContentCreation/SingleBullet";
import { SingleImage } from "../../../ContentCreation/SingleImage";
import { Title } from "../../../ContentCreation/Title";
import { ThemeComponentProps } from "../../../ContentCreation/types";
import Scrollable from "../../../Global/Scrollable";

export const components: ThemeComponent[] = [
  {
    width: 3,
    id: 1,
    height: 2,
    title: "Tile Card",
    preview: <TitleIcon />,
    component: (props: ThemeComponentProps) => <Title key="title" {...props} />,
  },
  {
    width: 1,
    id: 2,
    height: 1,
    title: "Paragraph",
    preview: <PWH />,
    component: (props: ThemeComponentProps) => (
      <ParagraphWithHeading key="pwh" {...props} />
    ),
  },
  {
    id: 3,
    width: 1,
    height: 1,
    title: "Paragraph with Number",
    preview: <PWN />,
    component: (props: ThemeComponentProps) => (
      <NumberedParagraph key="np" {...props} />
    ),
  },
  {
    id: 4,
    width: 1,
    height: 1,
    title: "1X1 Image",
    preview: <SingleImageIcon />,
    component: (props: ThemeComponentProps) => (
      <SingleImage key="si" {...props} />
    ),
  },
  {
    id: 5,
    width: 2,
    height: 1,
    title: "Double Image",
    preview: <DoubleImageIcon />,
    component: (props: ThemeComponentProps) => (
      <DoubleImage key="di" {...props} />
    ),
  },
  {
    id: 6,
    width: 3,
    height: 2,
    title: "Assessment - Multiple Choice",
    preview: <AMC />,
    component: (props: ThemeComponentProps) => (
      <LessonAssessmentMultiple key="amc" {...props} />
    ),
  },
  {
    id: 7,
    width: 3,
    height: 2,
    title: "Assessment - True & False",
    preview: <ATF />,
    component: (props: ThemeComponentProps) => (
      <LessonAssessmentTrueOrFalse key="atf" {...props} />
    ),
  },
  {
    id: 8,
    width: 3,
    height: 2,
    title: "Assessment - Written",
    preview: <AW />,
    component: (props: ThemeComponentProps) => (
      <LessonAssessmentTextArea key="aw" {...props} />
    ),
  },
  {
    id: 9,
    width: 1,
    height: 1,
    title: "Image with Caption",
    preview: <IWC />,
    component: (props: ThemeComponentProps) => (
      <ImageWithCaption key="iwc" {...props} />
    ),
  },
  {
    id: 10,
    width: 1,
    height: 1,
    title: "Bullet 1",
    preview: <SB />,
    component: (props: ThemeComponentProps) => (
      <SingleBullet key="sb" {...props} />
    ),
  },
  {
    id: 10,
    width: 1,
    height: 1,
    title: "Ingredient Card",
    preview: <IC />,
    component: (props: ThemeComponentProps) => (
      <IngredientCard key="ic" {...props} />
    ),
  },
  {
    id: 11,
    width: 2,
    height: 1,
    title: "Bullet 2",
    preview: <DB />,
    component: (props: ThemeComponentProps) => (
      <DoubleBullet key="db" {...props} />
    ),
  },
];

export const ContentBuilderCards: React.FC<{
  draggingComponent: number | undefined;
  isForAssessments?: boolean;
}> = ({ draggingComponent, isForAssessments }) => {
  const contentComponents = useMemo(
    () =>
      components.filter((component) =>
        isForAssessments
          ? component.title.includes("Assessment")
          : !component.title.includes("Assessment"),
      ),
    [isForAssessments],
  );

  return (
    <Droppable droppableId="preview-drop" isDropDisabled={true}>
      {(dropProvided) => (
        <Style.Cards
          {...dropProvided.droppableProps}
          ref={dropProvided.innerRef}
        >
          <Scrollable tag="div">
            {contentComponents.map((component, index) => (
              <Draggable
                draggableId={`component-${index}`}
                index={index}
                key={`component-${index}`}
              >
                {(provided, snapShot) => (
                  <Style.Card>
                    <div className="preview-title">{component.title}</div>
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="icon-container"
                    >
                      {snapShot.isDragging && draggingComponent === index
                        ? contentComponents[draggingComponent].preview
                        : component.preview}
                    </div>
                  </Style.Card>
                )}
              </Draggable>
            ))}
            {dropProvided.placeholder}
          </Scrollable>
        </Style.Cards>
      )}
    </Droppable>
  );
};

const Style = {
  Cards: styled.div`
    width: 20%;
    height: 100%;
    background: #ffffff50;
    padding: 2vh;
    border-radius: 0.5rem;
  `,
  Card: styled.div`
    height: 30%;
    width: 100%;
    margin-bottom: 15%;
    display: flex;
    flex-direction: column;
    .preview-title {
    }
    .icon-container {
      display: flex;
      flex: 1;
      border-radius: 0.5rem;
      align-items: center;
      justify-content: center;
      width: 100%;
      background: white;
      filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.1));
    }
  `,
};
