import styled from "styled-components";
import Scrollable from "../../components/Global/Scrollable";
import { Typography } from "../../components/Typography";
import { capitalize } from "../../lib/util/capitalize";
import { animatedbackgroundGradient } from "../../styles/helpers/animatedBackgroundGradient";
import { convertToRelativeUnit } from "../../styles/helpers/convertToRelativeUnits";

export const SearchPage = () => {
  // const { results } = useSearchResultsStore();

  // const count = useMemo(() => results.length, [results]);
  const count = 0;
  const searchKey: string | null | undefined = capitalize("dummy");
  console.log("Search Key >>>>>>");

  return (
    <Style.Container>
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

      <Scrollable height="auto" className="content-container">
        <article className="empty-container">
          <Typography color="neutral-400" size="3.5vh" weight={600} mb="1.5vh">
            No results found
          </Typography>
          <Typography color="neutral-500" size="2vh" mb="7.5vh" weight={500}>
            There's nothing here. Try using different word
          </Typography>
        </article>
        {/* <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem /> */}
      </Scrollable>
    </Style.Container>
  );
};

const Style = {
  Container: styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 9vh ${convertToRelativeUnit(32, "vw")} 2.5vh
      ${convertToRelativeUnit(64, "vw")};
    ${() => animatedbackgroundGradient("#C4E8FF", "#FFF9E0")}

    .content-container {
      width: 100%;
      margin-top: ${convertToRelativeUnit(10, "vh")};
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;

      .empty-container {
        margin-top: 22.5vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  `,
};
