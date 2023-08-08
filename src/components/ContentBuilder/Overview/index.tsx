import { useEffect } from "react";

import { ContentBuilderProps } from "..";
import { ContentBuilderType } from "../../../pages/types";
import { useEducatorNotesStore } from "../../../stores/educatorNotesStore";
import { useThemeBuilderStore } from "../../../stores/themeBuilderStore";
import { Content } from "../Components/Content";

export const ContentBuilderOverview: React.FC<ContentBuilderProps> = ({
  type,
  store,
}) => {
  const educatorNotesStore = useEducatorNotesStore();
  const { currentStep, setCurrentStep } = useThemeBuilderStore();

  const { slides, setSlideIndex, slideIndex } =
    currentStep === 1 ? educatorNotesStore : store;

  useEffect(() => {
    type !== ContentBuilderType.THEMES && setCurrentStep(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

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
