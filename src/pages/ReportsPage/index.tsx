import { useMemo } from "react";
import { useMatch } from "react-router-dom";
import styled from "styled-components";

import { PageHeader } from "../../components/Global/Header/PageHeader";
import { ReportActions } from "../../components/Reports/Actions";
import { ReportAssessment } from "../../components/Reports/Assessment";
import { ReportAssessmentPreview } from "../../components/Reports/Assessment/Preview";
import { ReportImpact } from "../../components/Reports/Impact";
import { ReportImpactPreview } from "../../components/Reports/Impact/Preview";
import { ReportsTabs } from "../../components/Reports/Tabs";

const tabs = ["assessment", "impact-qa"];

const mainComponents = [<ReportAssessment />, <ReportImpact />];
const previewComponents = [
  <ReportAssessmentPreview />,
  <ReportImpactPreview />,
];

export const ReportsPage = () => {
  const mainMatch = useMatch("/dashboard/reports/:slug");
  const previewMatch = useMatch("/dashboard/reports/:slug/preview");

  const tabIndex = useMemo(() => {
    const tab = (mainMatch ?? previewMatch)?.params?.slug ?? "assessment";

    return tabs.indexOf(tab);
  }, [mainMatch, previewMatch]);

  const isPreview = useMemo(() => !!previewMatch, [mainMatch, previewMatch]);

  if (tabIndex < 0) {
    throw Error;
  }

  return (
    <Container>
      <PageHeader title="Reports" />
      {isPreview && <ReportActions tabs={tabs} tabIndex={tabIndex} />}
      <ReportsTabs tabIndex={tabIndex} tabs={tabs} isPreview={isPreview} />
      {isPreview ? previewComponents[tabIndex] : mainComponents[tabIndex]}
    </Container>
  );
};

const Container = styled.div``;
