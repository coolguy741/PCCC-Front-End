import styled from "styled-components";

interface ListItemProps {
  data: {
    image: string;
    alt: string;
    topic?: string;
    title: string;
    content: string;
  };
}

export const ListItem = ({ data }: ListItemProps) => {
  return (
    <Style.Container>
      <img src={data.image} width="110px" height="88px" alt={data.alt} />
      <div className="text-container">
        {data.topic && <p className="topic">{"Topic : " + data.topic}</p>}
        <p className="title">{data.title}</p>
        <p className="content">{data.content}</p>
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
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
      }
    }
  `,
};
