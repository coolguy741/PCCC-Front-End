import styled from "styled-components";

interface Props {
  isPrint?: boolean;
}

export const Assessment: React.FC<Props> = ({ isPrint = false }) => {
  return (
    <Style.Container>
      <div className={`to-uppercase ${isPrint ? "text-center" : ""}`}>
        Topic: Garden Guardian
      </div>
      <h3 className={`${isPrint ? "text-center" : ""}`}>
        Chocolate granola bites - Assessment
      </h3>
      <div className="qa-list">
        <div>
          <div>
            Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor?
          </div>
          <div>
            <Style.Input type="text" />
          </div>
        </div>
        <div>
          <div>
            Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor?
          </div>
          <div className="flex">
            <span>
              <Style.Input type="radio" />
            </span>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing</div>
          </div>
          <div className="flex">
            <span>
              <Style.Input type="radio" />
            </span>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing</div>
          </div>
          <div className="flex">
            <span>
              <Style.Input type="radio" />
            </span>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing</div>
          </div>
        </div>
        <div>
          <div>
            Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor?
          </div>
          <div>
            <Style.Input type="text" />
          </div>
        </div>
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    & * {
      box-sizing: border-box;
    }
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-bottom: 10px;

    .text-center {
      text-align: center;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0;
    }

    .to-uppercase {
      text-transform: uppercase;
    }

    .qa-list {
      display: flex;
      flex-direction: column;
      gap: 20px;

      span {
        margin-right: 4px;
      }
    }
  `,
  Input: styled.input`
    padding: 0.75rem;
    border: none;
    border-radius: 0.2rem;
    width: 100%;
  `,
};
