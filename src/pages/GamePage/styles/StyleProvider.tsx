import { FC, memo, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './NormalizeReset/GlobalStyle';
import { Theme } from './Snippets/Theme';

interface StyleProviderPropTypes {
  children: ReactNode;
}

const StyleProvider: FC<StyleProviderPropTypes> = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default memo(StyleProvider);
