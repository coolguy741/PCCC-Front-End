import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MealtimeMomentTip = () => {
  return (
    <Container>
      <TipText>
        <Text>
          <Bold>
            It seems like you like this content. Would you like to learn more
            about{' '}
            <Underlined>
              <Link to="./">Mealtime Moments</Link>
            </Underlined>
            ?
          </Bold>
        </Text>
        <br />
        <Text>
          <Bold>OR </Bold>Check out this fun{' '}
          <Underlined>
            &rsquo;<Link to="./">Vegetable Spring Rolls</Link>&rsquo;
          </Underlined>{' '}
          recipe that’s full of healthy ingredients
        </Text>
      </TipText>
      <img src="/images/bee.png" placeholder="bee" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const TipText = styled.span`
  background-color: #d9d9d9;
  text-align: start;
  border-radius: 6px;
  padding: 20px;
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 40px;
    right: -38px;
    margin-left: -5px;
    border-width: 20px;
    border-style: solid;
    border-color: #d9d9d9 transparent transparent transparent;
    transform: rotate(270deg);
  }
`;
const Bold = styled.span`
  font-weight: 700;
`;

const Text = styled.span`
  font-size: 1rem;
  text-align: start;
`;
const Underlined = styled.span`
  text-decoration: underline;
`;
