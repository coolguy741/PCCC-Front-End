import { useThemeStore } from "../../../stores/themeStore";
import { Typography } from "../../Global/Typography";
import { ThemeInfo } from "../ThemeInfo";
import { ContentNavigator } from "./ContentNavigator";

export const ContentBuilderHeader = () => {
  const { currentStep } = useThemeStore();

  return (
    <>
      <ContentNavigator />

      <Typography variant="h3" as="h3" weight="semi-bold">
        Create Theme
      </Typography>

      {currentStep > 3 && (
        <Typography variant="h5" mt={4} as="h5" weight="semi-bold">
          Select the {currentStep === 4 ? "activities" : "recipes"} you want to
          link to this theme
        </Typography>
      )}
      <ThemeInfo />
    </>
  );
};
