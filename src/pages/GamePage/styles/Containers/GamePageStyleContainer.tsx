import { memo } from 'react';
import styled from 'styled-components';
import { MarginPaddingNone } from '../Snippets/MarginPaddingNone';
import { UserSelectNone } from '../Snippets/UserSelectNone';

const R3FXR8PageStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default memo(R3FXR8PageStyleContainer);
