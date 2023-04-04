import styled from "styled-components";

interface HomeTipProps {
  text: string;
  top?: string;
  left?: string;
}

export const HomeTip = ({text, top="0px", left="0px"}: HomeTipProps) => {
  return (
    <TipText top={top} left={left}>
      <Text>{text}</Text>
    </TipText>
  )
}

const TipText = styled.span<{top: string, left: string}>`
  background-color: #D9D9D9;
  text-align: start;
  border-radius: 2px;
  padding: 5px;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};

  &:after {
    content: "";
    display: block;
    position: absolute;
    

    right: 40px;
    margin-left: -5px;
    border-width: 10px;
    border-style: solid;
    border-color: #D9D9D9 transparent transparent transparent;
  }
`

const Text = styled.span`
  font-size: 1rem;
  text-align: start;
  color: #797979;
`
