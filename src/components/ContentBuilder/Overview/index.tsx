import { ContentBuilderProps } from "..";
import { Content } from "../Components/Content";

export const ContentBuilderOverview: React.FC<ContentBuilderProps> = ({
  type,
  store,
}) => {
  const { contents, currentStep, setSlideIndex } = store;

  return (
    <Content
      contents={contents}
      currentStep={currentStep}
      setSlideIndex={setSlideIndex}
      isEditable={false}
      type={type}
    />
  );
};
