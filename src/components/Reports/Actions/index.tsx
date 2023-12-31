import { LinkButton } from "../../Global/Button/Link";

interface Props {
  tabs: string[];
  tabIndex: number;
}

export const ReportActions: React.FC<Props> = ({ tabs, tabIndex }) => {
  return (
    <div className="flex justify-between mt-4">
      <LinkButton to={`/reports/${tabs[tabIndex]}`}>&lt;Back</LinkButton>
      <LinkButton to={`/reports/${tabs[tabIndex]}/print`}>Print</LinkButton>
    </div>
  );
};
