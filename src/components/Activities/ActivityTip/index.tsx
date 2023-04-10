import { Link } from "react-router-dom";
import styled from "styled-components";

interface ActivityTipProps {
  activityLink1: string,
  activityLink2: string
}

export const ActivityTip = ({activityLink1, activityLink2}: ActivityTipProps) => {
  return (
    <Container>
      <TipText>
        <Text><Bold>It seems like you like this content. Check out this other activity <Underlined><Link to={activityLink1}>Bees need good nutrition too!</Link></Underlined>?</Bold></Text>
        <br/>
        <Text><Bold>OR </Bold>put your newfound knowledge to the test in our other activity <Underlined>&rsquo;<Link to={activityLink2}>Plant a seed, feed yourself</Link>&rsquo;</Underlined></Text>
      </TipText>
      <img src="/images/bee.png" placeholder="bee"/>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`

const TipText = styled.span`
  background-color: #D9D9D9;
  text-align: start;
  border-radius: 6px;
  padding: 20px;
  position: relative;

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 40px;
    right: -38px;
    margin-left: -5px;
    border-width: 20px;
    border-style: solid;
    border-color: #D9D9D9 transparent transparent transparent;
    transform: rotate(270deg);
  }
`
const Bold = styled.span`
  font-weight: 700;
`

const Text = styled.span`
  font-size: 1rem;
  text-align: start;
`
const Underlined = styled.span`
  text-decoration: underline;
`