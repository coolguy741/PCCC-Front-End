import styled from "styled-components";

interface ButtonRowProps {
  children: React.ReactNode;
}

export const ButtonRow = ({ children }: ButtonRowProps) => {
  return <Style.Container>{children}</Style.Container>;
};

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px 4px;
    gap: 8px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 12px;
    padding: 0.3rem;

    button {
      border-radius: 8px;
      height: 2.5rem;
      padding: 0 1rem;
      position: relative;

      /* &:after {
        content: "";
        border-right: 2px solid #d9d9d9;
      }

      &:last-child:after {
        display: none;
      } */

      &.active {
        background: linear-gradient(
          182.85deg,
          rgba(255, 215, 96, 0.8) 2.47%,
          rgba(255, 191, 0, 0.8) 97.72%
        );
      }
    }
  `,
};
