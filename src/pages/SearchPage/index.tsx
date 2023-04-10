import { useMemo } from "react";
import styled from "styled-components";
import { useSearchResultsStore } from "../../stores/searchResultsStore";

export const SearchPage = () => {
  const { searchKey, results } = useSearchResultsStore();
  const count = useMemo(() => results.length, [results]);

  return (
    <PageContainer>
      <Title>{"Search Results for " + searchKey}</Title>
      <ResultesText>
        {`Results ${count} of ${count} for ${searchKey}`}{" "}
      </ResultesText>
      {results.map((result, index) => (
        <ListItem key={`list-${index}`}>
          <img
            src={result.image}
            width="110px"
            height="88px"
            alt={result.title}
          />
          <div className="text-container">
            <p className="title">{result.title}</p>
            <p
              className="content"
              dangerouslySetInnerHTML={{
                __html: result.content.replaceAll(
                  searchKey,
                  `<strong>${searchKey}</strong>`
                ),
              }}
            />
          </div>
        </ListItem>
      ))}
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.p`
  font-family: "Noir Std";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 103.68%;
  letter-spacing: 0.02em;
  color: #c4c4c4;
  margin-bottom: 0px;
`;

const ResultesText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 143.18%;
  letter-spacing: 0.02em;
  color: #797979;
  margin: 0px;
`;

const ListItem = styled.div`
  display: flex;
  gap: 70px;

  .text-container {
    p {
      margin: 0px;
    }
    .topic {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 143.18%;
      letter-spacing: 0.02em;
      color: #797979;
    }

    .title {
      font-family: "Noir Std";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 129.18%;
      letter-spacing: 0.02em;
      color: #797979;
    }

    .content {
      font-family: "Noir Std";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 110%;
      letter-spacing: 0.02em;
      color: #797979;

      strong {
        color: var(--black);
        font-size: 14px;
      }
    }
  }
`;
