import { useMemo } from "react";
import { useMatch } from "react-router-dom";
import styled from "styled-components";

import { ReportAssessmentPreview } from "../../../components/Reports/Assessment/Preview";
import { ReportImpactPreview } from "../../../components/Reports/Impact/Preview";

const tabs = ["assessment", "impact-qa"];

const components = [<ReportAssessmentPreview />, <ReportImpactPreview />];

export const ReportsPrintPage = () => {
  const match = useMatch("/reports/:slug/print");

  if (!match) {
    throw Error;
  }

  const tabIndex = useMemo(() => {
    const tab = match.params.slug ?? "assessment";

    return tabs.indexOf(tab);
  }, [match]);

  return <Style.Container>{components[tabIndex]}</Style.Container>;
};

const Style = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    padding: 40px;

    h4 {
      font-size: 2.5rem;
    }
  `,
};
