import styled from "styled-components";
import { ActivityContent } from "../../../components/Activities/ActivityContent";

export const ActivityPrintPage = () => {
  return (
    <PageContainer>
      <ActivityContent />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 86px 0px 86px;
  gap: 20px;
`;