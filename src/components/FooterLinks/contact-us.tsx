import styled from "styled-components";

export function ContactUs() {
  return (
    <Style.Container>
      <nav></nav>
      <section></section>
    </Style.Container>
  );
}

const Style = {
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
    }

    section {
      width: 65%;
      margin-top: 2.5vh;
    }
  `,
};
