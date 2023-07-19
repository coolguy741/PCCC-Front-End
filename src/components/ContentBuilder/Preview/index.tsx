import { ContentBuilderProps } from "..";
import { Content } from "../Components/Content";

export const ContentBuilderPreview: React.FC<ContentBuilderProps> = ({
  type,
  store,
}) => {
  const { slides, setSlideIndex } = store;

  return (
    <Content
      slides={slides}
      setSlideIndex={setSlideIndex}
      isEditable={false}
      type={type}
    />
  );
};
