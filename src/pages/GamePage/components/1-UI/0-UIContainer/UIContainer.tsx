import { FC, Fragment, memo } from 'react';
import DebugUIContainer from '../1-DebugUI/DebugUIContainer';

const UIContainer: FC = () => {
  return (
    <Fragment>
      <DebugUIContainer />
    </Fragment>
  );
};

export default memo(UIContainer);
