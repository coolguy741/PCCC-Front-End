import styled from "styled-components";
import { FooterLinksLayout } from "../../layouts/FooterLinksLayout";
import { ArrowUp } from "../Icons";
import { Typography } from "../Typography";
import { ContactUs } from "./contact-us";
import { footer_data } from "./content-data";

export function FooterLinks({
  page,
}: {
  page:
    | "terms_and_conditions"
    | "privacy_policy"
    | "accessibility"
    | "contact_us";
}) {
  const page_content = footer_data[page];
  return (
    <FooterLinksLayout page={page}>
      {page !== "contact_us" && (
        <Style.Container>
          <nav>
            <Typography
              tag="h3"
              size="2.5vh"
              color="neutral-800"
              mb="1vh"
              weight={600}
            >
              {page_content.menuTitle}
            </Typography>
            <div>
              {page_content.content.map((link, idx) => (
                <a href={`#${idx}`}>{link.title}</a>
              ))}
            </div>
            <button>
              <Typography weight={500} size="1.5vh" color="neutral-700">
                Back to top
              </Typography>{" "}
              <ArrowUp />
            </button>
          </nav>
          <section>
            {page_content.content.map((link, idx) => (
              <article id={`${idx}`}>
                <Typography
                  tag="h4"
                  mb="1.5vh"
                  color="neutral-800"
                  size="2.5vh"
                >
                  {link.title}
                </Typography>
                <Typography
                  tag="p"
                  color="neutral-400"
                  weight={400}
                  size="1.75vh"
                >
                  {link.content}
                </Typography>
              </article>
            ))}
          </section>
        </Style.Container>
      )}
      {page === "contact_us" && <ContactUs />}
    </FooterLinksLayout>
  );
}

export const Style = {
  Container: styled.div`
    width: 100%;
    margin-top: 4vh;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    scroll-behavior: smooth;

    nav {
      width: 31%;
      display: flex;
      flex-direction: column;

      h3 {
        padding-left: 1.5vw;
      }

      div {
        display: flex;
        flex-direction: column;
        height: 27.5vh;
        overflow-y: scroll;
        border-bottom: 1px solid var(--neutral-100);
      }

      a {
        font-size: 2vh;
        font-weight: 500;
        margin-bottom: 1.5vh;
        color: var(--neutral-600);
        padding-left: 1.5vw;
      }

      button {
        border-radius: 80px;
        background: rgba(255, 255, 255, 0.65);
        box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
        width: max-content;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        font-weight: 500;
        margin-top: 2vh;

        svg {
          margin-left: 5px;
          height: 2vh;
        }
      }
    }

    section {
      width: 65%;
      margin-top: 2.5vh;

      article {
        margin-bottom: 2.5vh;
      }
    }
  `,
};
