import styled from "styled-components";
import { Typography } from "../../components/Typography";
import { capitalize } from "../../lib/util/capitalize";
import { useSearchResultsStore } from "../../stores/searchResultsStore";
import { convertToRelativeUnit } from "../../styles/helpers/convertToRelativeUnits";

export const SearchPage = () => {
  const { results } = useSearchResultsStore();

  // const count = useMemo(() => results.length, [results]);
  const count = 0;
  const searchKey: string | null | undefined = capitalize("dummy");
  console.log("Search Key >>>>>>");

  return (
    <Style.PageContainer>
      <Typography
        tag="h1"
        color="orange-500"
        size="4vh"
        weight={600}
        mb="1vh"
      >{`Search Results for “${searchKey ?? "Dummy"}”`}</Typography>
      <Typography tag="h2" size="3vh" weight={600} color="neutral-800">
        {`${count} Results  for ${searchKey}`}{" "}
      </Typography>

      <div className="content-container">
        <article className="empty-container">
          <Typography color="neutral-400" size="3.5vh" weight={600} mb="1.5vh">
            No results found
          </Typography>
          <Typography color="neutral-500" size="2vh" mb="7.5vh" weight={500}>
            There's nothing here. Try using different word
          </Typography>
        </article>
      </div>
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

    .content-container {
      width: 100%;
      flex-grow: 1;
      margin-top: ${convertToRelativeUnit(10, "vh")};

      .empty-container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
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
