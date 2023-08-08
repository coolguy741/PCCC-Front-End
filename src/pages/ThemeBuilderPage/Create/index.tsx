import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContentBuilder } from "../../../components/ContentBuilder";
import { useContentActions } from "../../../hooks/useContentActions";
import { useFetch } from "../../../hooks/useFetch";
import {
  PccServer23CurriculumsCurriculumDto,
  VoloAbpApplicationDtosListResultDto1PccServer23AssessmentQuestionsPublicAssessmentQuestionDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
  VoloAbpApplicationDtosListResultDto1PccServer23EducatorNotesEducatorNoteDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
} from "../../../lib/api/api";
import { useAssessmentsStore } from "../../../stores/assessmentsStore";
import { useThemeStore } from "../../../stores/contentBuilderStore";
import { useEducatorNotesStore } from "../../../stores/educatorNotesStore";
import { useThemeBuilderStore } from "../../../stores/themeBuilderStore";
import { useUIStore } from "../../../stores/uiStore";
import { ContentBuilderType } from "../../types";

export const ThemeCreatePage = () => {
  const { setCurriculums } = useThemeBuilderStore();
  const { setEducatorNotes } = useEducatorNotesStore();
  const { setAssessmentQuestions } = useAssessmentsStore();
  const { getContent } = useContentActions();
  const { lang } = useUIStore();
  const themeStore = useThemeStore();
  const { item } = useParams();
  const store = themeStore;

  const { data } = useFetch<PccServer23CurriculumsCurriculumDto[]>(
    "appCurriculumsList",
    undefined,
    undefined,
    true,
  );

  const { data: educatorNotes, fetchData } =
    useFetch<VoloAbpApplicationDtosListResultDto1PccServer23EducatorNotesEducatorNoteDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull>(
      "appThemesEducatorNotesDetail",
      undefined,
      undefined,
      false,
      item,
    );

  const { data: assessmentQuestions, fetchData: getAssessmentQuestions } =
    useFetch<VoloAbpApplicationDtosListResultDto1PccServer23AssessmentQuestionsPublicAssessmentQuestionDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull>(
      "appAssessmentQuestionsQuestionsForThemeAndCurriculumList",
      undefined,
      { query: { ThemeId: item } },
      false,
    );

  useEffect(() => {
    item && getContent(ContentBuilderType.THEMES);
    item && fetchData?.(undefined, undefined, true, item);
    item &&
      getAssessmentQuestions?.(undefined, { query: { ThemeId: item } }, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  useEffect(() => {
    educatorNotes && setEducatorNotes(educatorNotes.items || [], lang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [educatorNotes]);

  useEffect(() => {
    assessmentQuestions &&
      setAssessmentQuestions(assessmentQuestions.items || [], lang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assessmentQuestions]);

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
