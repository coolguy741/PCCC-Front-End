import { useEffect } from "react";
import { ContentBuilder } from "../../../components/ContentBuilder";
import { useFetch } from "../../../hooks/useFetch";
import { PccServer23CurriculumsCurriculumDto } from "../../../lib/api/api";
import {
  useEducatorNotesStore,
  useThemeStore,
} from "../../../stores/contentBuilderStore";
import { useThemeBuilderStore } from "../../../stores/themeBuilderStore";
import { ContentBuilderType } from "../../types";

export const ThemeCreatePage = () => {
  const { currentStep, setCurriculums } = useThemeBuilderStore();
  const themeStore = useThemeStore();
  const educatorNotesStore = useEducatorNotesStore();
  const store = currentStep === 0 ? themeStore : educatorNotesStore;
  const { data } = useFetch<PccServer23CurriculumsCurriculumDto[]>(
    "appCurriculumsList",
    undefined,
    undefined,
    true,
  );

  useEffect(() => {
    data &&
      setCurriculums(
        data?.map((item) => ({
          id: item.id ?? "",
          name: item.name ?? "",
        })),
      );
  }, [data, setCurriculums]);

  return <ContentBuilder type={ContentBuilderType.THEMES} store={store} />;
};
