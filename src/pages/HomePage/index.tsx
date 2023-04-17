import styled from "styled-components";
import { Icon } from "../../components/Global/Icon";
import { CookTogetherTile } from "./CookTogetherTile";
import { DiscoverTogetherTile } from "./DiscoverTogetherTile";
import { FoodwaysTile } from "./FoodwaysTile";
import { FooterTile } from "./FooterTile";
import { GrowTogetherTile } from "./GrowTogetherTile";
import { MadKitchenTile } from "./MadKitchenTile";
import { MealPlannerTile } from "./MealPlannerTile";
import { MealtimeMomentsTile } from "./MealtimeMomentsTile";
import { PowerFullKidsTile } from "./PowerFullKidsTile";

export const HomePage = () => {
  return (
    <Style.PageContainer>
      <PowerFullKidsTile />
      <DiscoverTogetherTile />
      <GrowTogetherTile />
      <CookTogetherTile />
      <MadKitchenTile />
      <FoodwaysTile />
      <MealtimeMomentsTile />
      <MealPlannerTile />
      <FooterTile />
      <Style.ScrollIconContainer>
        <Icon name="scroll" />
      </Style.ScrollIconContainer>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    margin: -108px 0px 0px 0px;
    font-family: "Noir Std";
    font-style: normal;
  `,
  ScrollIconContainer: styled.div`
    position: fixed;
    left: calc((100vw - 42px) / 2);
    bottom: 45px;
  `,
};
