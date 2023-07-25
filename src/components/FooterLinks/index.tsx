import styled from "styled-components";
import { FooterLinksLayout } from "../../layouts/FooterLinksLayout";
import { footer_data } from "./content-data";

export function FooterLinks({
  page,
}: {
  page: "terms_and_conditions" | "privacy_policy" | "accessibility";
}) {
  const page_content = footer_data[page];
  return (
    <FooterLinksLayout>
      <Style.Container></Style.Container>
    </FooterLinksLayout>
  );
}

export const Style = {
  Container: styled.div`
    width: 100%;
    border: 1px solid red;
  `,
};
