import styled from "styled-components";
import { Marker } from "../Icons";
import { Typography } from "../Typography";

const text_props = {
  size: "1.5vh",
  color: "neutral-600",
  mb: "1vh",
};

export function ContactUs() {
  return (
    <Style.Container>
      <section className="cu-text-address">
        <Typography
          tag="h3"
          size="2.5vh"
          color="neutral-800"
          mb="1vh"
          weight={600}
        >
          Contact Information
        </Typography>
        <article>
          <Typography
            color="neutral-600"
            tag="h4"
            size="2vh"
            weight={500}
            mb="1.5vh"
          >
            <Marker /> Ontario, Western & Atlantic
          </Typography>
          <Typography tag="p" {...text_props}>
            1 President's Choice Circle, Brampton, ON L6Y 5S5
          </Typography>
          <Typography tag="span" {...text_props}>
            PCCharity@Loblaw.ca
          </Typography>
        </article>
        <article>
          <Typography
            color="neutral-600"
            tag="h4"
            size="2vh"
            weight={500}
            mb="1.5vh"
          >
            <Marker /> Quebec
          </Typography>
          <Typography tag="p" {...text_props}>
            400 Saint-Croix Avenue, Ville Sainte-Laurent, PQ H4N 3L4
          </Typography>
          <Typography tag="span" {...text_props}>
            Fondationlcp@Provigo.ca
          </Typography>
        </article>
      </section>
      <section className="cu-text-map">
        <img src="photos/Map.png" alt="address" />
      </section>
    </Style.Container>
  );
}

const Style = {
  Container: styled.div`
    width: 100%;
    margin-top: 2.5vh;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    scroll-behavior: smooth;

    h4 {
      display: flex;
      align-items: center;
      transition: color 0.25s linear;
      cursor: pointer;

      svg {
        margin-right: 0.5vw;

        path {
          transition: fill 0.25s linear;
        }
      }

      &:hover {
        color: var(--blue-500);

        svg {
          path {
            fill: var(--blue-500);
          }
        }
      }
    }

    article {
      margin-bottom: 2.5vh;
    }

    section.cu-text-address {
      width: 31%;
      display: flex;
      flex-direction: column;
    }

    section.cu-text-map {
      width: 55%;

      img {
        width: 100%;
      }
    }
  `,
};
