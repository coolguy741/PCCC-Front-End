import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { ContentBuilderOverview } from "../../../components/ContentBuilder/Overview";
import { useContentActions } from "../../../hooks/useContentActions";
import { useFetch } from "../../../hooks/useFetch";
import { VoloAbpApplicationDtosListResultDto1PccServer23EducatorNotesEducatorNoteDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull } from "../../../lib/api/api";
import { useThemeStore } from "../../../stores/contentBuilderStore";
import { useEducatorNotesStore } from "../../../stores/educatorNotesStore";
import { useUIStore } from "../../../stores/uiStore";
import { ContentBuilderType } from "../../types";

export const ThemePage = () => {
  const { getContent } = useContentActions();
  const { setEducatorNotes } = useEducatorNotesStore();
  const { item } = useParams();
  const { lang } = useUIStore();

  const { data: educatorNotes } =
    useFetch<VoloAbpApplicationDtosListResultDto1PccServer23EducatorNotesEducatorNoteDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull>(
      "appThemesEducatorNotesDetail",
      undefined,
      undefined,
      true,
      item,
    );

  useEffect(() => {
    getContent(ContentBuilderType.THEMES);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    educatorNotes && setEducatorNotes(educatorNotes.items || [], lang);
  }, [educatorNotes]);

  return (
    <ContentBuilderOverview
      type={ContentBuilderType.THEMES}
      store={useThemeStore()}
    />
  );
};
