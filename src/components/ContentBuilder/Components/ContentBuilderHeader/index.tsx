import { ContentBuilderType } from "../../../../pages/types";
import { Typography } from "../../../Global/Typography";
import { ContentInfo } from "../ContentInfo";
import { ContentNavigator } from "../ContentNavigator";

interface Props {
  step: number;
  type: ContentBuilderType;
  slideIndex: number;
  currentStep: number;
  deleteSlide: () => void;
}

export const ContentBuilderHeader: React.FC<Props> = ({
  step,
  type,
  ...props
}) => {
  return (
    <>
      <ContentNavigator type={type} />

      <Typography variant="h3" as="h3" weight="semi-bold">
        Create{" "}
        {type === ContentBuilderType.THEMES
          ? "Theme"
          : type === ContentBuilderType.ACTIVITIES
          ? "Activity"
          : "Recipe"}
      </Typography>

      {type === ContentBuilderType.THEMES && step > 3 && (
        <Typography variant="h5" mt={4} as="h5" weight="semi-bold">
          Select the {step === 4 ? "activities" : "recipes"} you want to link to
          this theme
        </Typography>
      )}
      <ContentInfo {...props} />
    </>
  );
};
