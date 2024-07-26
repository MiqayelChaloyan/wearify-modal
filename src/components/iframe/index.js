import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './styles.css';


function IFrame({ src, children }) {
  const [ref, setRef] = useState(null);
  const container = ref?.contentDocument?.body;

  return (
    <iframe title='iframe' ref={setRef} src={src} className='iframe' frameBorder='0' id='myIframe'>
      {container && createPortal(children, container)} 
    </iframe>
  );
}

const Iframe = ({ src }) => {
  return (
    <div className='Iframe'>
      <div className='hide-border'/>
      <IFrame src={src} />
    </div>
  );
}


export default Iframe;











// const Iframe = ({ src }) => {

//   useEffect(() => {
//     function getIframeContent(frameId) {
//       let frameObj = 
//           document.getElementById(frameId);
//       let frameContent = frameObj.
//           contentWindow.document.body.innerHTML;
          
//       console.log("frame content : " + frameContent);
//   }
//   getIframeContent('my-iframe')
//   }, [src]);


//   return (
//     <>
//       <iframe
//         src={src}
//         // title="DeepAR Try On"
//         frameBorder="0"
//         // scrolling="no"
//         className='iframe'
//         id='my-iframe'
//         loading="lazy"
//       // allow="fullscreen"
//       />
//       {/* <div className='btn_hide'/>
//         <div className='btn_hide_fitting'/> */}
//       {/* <div className='hide-border'/> */}
//     </>
//   );
// };

// export default Iframe;
