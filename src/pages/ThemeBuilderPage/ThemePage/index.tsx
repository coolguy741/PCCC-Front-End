import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { ContentBuilderOverview } from "../../../components/ContentBuilder/Overview";
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

export const ThemePage = () => {
  const { setCurriculums } = useThemeBuilderStore();
  const { getContent } = useContentActions();
  const { setEducatorNotes } = useEducatorNotesStore();
  const { setAssessmentQuestions } = useAssessmentsStore();
  const { item } = useParams();
  const { lang } = useUIStore();

  const { data } = useFetch<PccServer23CurriculumsCurriculumDto[]>(
    "appCurriculumsList",
    undefined,
    undefined,
    true,
  );
  const { data: educatorNotes } =
    useFetch<VoloAbpApplicationDtosListResultDto1PccServer23EducatorNotesEducatorNoteDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull>(
      "appThemesEducatorNotesDetail",
      undefined,
      undefined,
      true,
      item,
    );
  const { data: assessmentQuestions } =
    useFetch<VoloAbpApplicationDtosListResultDto1PccServer23AssessmentQuestionsPublicAssessmentQuestionDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull>(
      "appAssessmentQuestionsQuestionsForThemeAndCurriculumList",
      undefined,
      { query: { themeId: item } },
      true,
    );

  useEffect(() => {
    getContent(ContentBuilderType.THEMES);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <ContentBuilderOverview
      type={ContentBuilderType.THEMES}
      store={useThemeStore()}
    />
  );
};
