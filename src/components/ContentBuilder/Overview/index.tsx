import { ContentBuilderProps } from "..";
import { Content } from "../Components/Content";

export const ContentBuilderOverview: React.FC<ContentBuilderProps> = ({
  type,
  store,
}) => {
  const { slides, setSlideIndex, slideIndex } = store;

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
