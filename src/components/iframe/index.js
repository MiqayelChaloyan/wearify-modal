import { useEffect } from 'react';
import './styles.css';

const Iframe = ({ src }) => {
    
    return (
      <>
        <iframe
            src={src}
            // title="DeepAR Try On"
            // frameBorder="0"
            // scrolling="no"
            className='iframe'
            id='my-iframe'
            // allow="fullscreen"
        />
        {/* <div className='btn_hide'/>
        <div className='btn_hide_fitting'/> */}
      </>
    );
};

export default Iframe;
