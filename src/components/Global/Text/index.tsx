import styled from 'styled-components';

interface TextProps {
  size?: string;
}

export const Text = styled.p<TextProps>`
  font-family: 'Noir Std';
  font-style: normal;
  letter-spacing: 0.02em;
  font-size: ${({ size = '1rem' }) =>
    size == 'lg'
      ? '1.2rem'
      : size == 'md'
      ? '1rem'
      : size == 'sm'
      ? '0.8rem'
      : '1rem'};
  margin: 0px;
  color: #797979;
`;

export const UpperCase = styled.span`
  text-transform: uppercase;
`;

export const Bold = styled.span`
  font-weight: 700;
`;
