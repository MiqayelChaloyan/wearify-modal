
import { ThemeProvider } from 'context';

import Layout from './layout';
import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    var iframes = document.getElementsByTagName('iframe');
    var classToHide = 'css-crejbx';
    
    for (var i = 0; i < iframes.length; i++) {
      try {
        iframes[i].contentWindow.postMessage({ action: 'hideElements', classToHide: classToHide }, '*');
      } catch (e) {
        console.error('Error posting message to iframe:', e);
      }
    }
    
  }, [])

  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
};