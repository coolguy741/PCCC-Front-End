import styled from "styled-components";

export const PowerFullKidsTile = () => {
  return (
    <PageContainer>
      <img
        src="/images/powerfullkids.svg"
        alt="powerfullkids"
        width="1008px"
        height="128px"
      />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  min-height: calc(100vh);
  display: flex;
  justify-content: center;
  align-items: center;
`;
