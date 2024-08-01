
import { ThemeProvider } from 'context';

import Layout from './layout';
import { GlobalStyle } from 'globalStyles';

export default function App() {

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
};