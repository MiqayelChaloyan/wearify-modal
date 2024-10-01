
import { ThemeProvider } from 'context';

import Layout from './layout';
import { GlobalStyle } from 'globalStyles';
import IframeContainer from 'components/deepar';
const urlBows = 'https://wearifyai.github.io/ARTryOn/?effect=bows';

export default function App() {

  // const handleClose = () => {
  //   const modal = document.getElementById('web-depar');
  //   if (modal) {
  //     modal.style.display = "none";
  //   }
  // };


  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>


      {/* <div className='media-fit-contain' id='web-depar'>
        <IframeContainer src={urlBows} onClose={handleClose} />
      </div> */}
    </>
  );
};