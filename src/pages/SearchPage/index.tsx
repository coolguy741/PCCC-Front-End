import { useMemo } from "react";
import styled from "styled-components";
import { Typography } from "../../components/Typography";
import { useSearchResultsStore } from "../../stores/searchResultsStore";
import { convertToRelativeUnit } from "../../styles/helpers/convertToRelativeUnits";

export const SearchPage = () => {
  const { searchKey, results } = useSearchResultsStore();
  const count = useMemo(() => results.length, [results]);

  return (
    <Style.PageContainer>
      <Typography
        tag="h1"
        color="orange-500"
        size={convertToRelativeUnit(40, "vh")}
        weight={600}
      >{`Search Results for “${searchKey}”`}</Typography>
      <p>{`Results ${count} of ${count} for ${searchKey}`} </p>
      {results.map((result, index) => (
        <Style.ListItem key={`list-${index}`}>
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
                  `<strong>${searchKey}</strong>`,
                ),
              }}
            />
          </div>
        </Style.ListItem>
      ))}
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 9vh ${convertToRelativeUnit(32, "vw")} 2.5vh
      ${convertToRelativeUnit(64, "vw")};
  `,
  ListItem: styled.div`
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
  `,
};
