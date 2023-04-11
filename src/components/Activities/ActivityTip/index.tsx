import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ActivityTipProps {
  activityLink1: string;
  activityLink2: string;
}

export const ActivityTip = ({
  activityLink1,
  activityLink2,
}: ActivityTipProps) => {
  return (
    <Style.Container>
      <Style.TipText>
        <Style.Text>
          <Style.Bold>
            It seems like you like this content. Check out this other activity{' '}
            <Style.Underlined>
              <Link to={activityLink1}>Bees need good nutrition too!</Link>
            </Style.Underlined>
            ?
          </Style.Bold>
        </Style.Text>
        <br />
        <Style.Text>
          <Style.Bold>OR </Style.Bold>put your newfound knowledge to the test in
          our other activity{' '}
          <Style.Underlined>
            &rsquo;<Link to={activityLink2}>Plant a seed, feed yourself</Link>
            &rsquo;
          </Style.Underlined>
        </Style.Text>
      </Style.TipText>
      <img src="/images/bee.png" alt="bee" placeholder="bee" />
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
  `,
  TipText: styled.span`
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
  `,
  Bold: styled.span`
    font-weight: 700;
  `,
  Text: styled.span`
    font-size: 1rem;
    text-align: start;
  `,
  Underlined: styled.span`
    text-decoration: underline;
  `,
};
