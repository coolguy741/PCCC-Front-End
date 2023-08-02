import { ContentBuilderProps } from "..";
import { useEducatorNotesStore } from "../../../stores/educatorNotesStore";
import { useThemeBuilderStore } from "../../../stores/themeBuilderStore";
import { Content } from "../Components/Content";

export const ContentBuilderOverview: React.FC<ContentBuilderProps> = ({
  type,
  store,
}) => {
  const educatorNotesStore = useEducatorNotesStore();
  const { currentStep } = useThemeBuilderStore();

  const { slides, setSlideIndex, slideIndex } =
    currentStep === 1 ? educatorNotesStore : store;
  console.log(slides, educatorNotesStore.educatorNotes);
  return (
    <Content
      slides={slides}
      setSlideIndex={setSlideIndex}
      isEditable={false}
      slideIndex={slideIndex}
      type={type}
    />
  );
};
