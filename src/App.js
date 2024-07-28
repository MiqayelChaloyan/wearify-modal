
import { ThemeProvider } from 'context';

import Layout from './layout';

export default function App() {

  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
};