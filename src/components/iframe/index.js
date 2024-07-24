import { useEffect } from 'react';
import './styles.css';

const Iframe = ({ src }) => {
    
    return (
      <>
        <iframe
            src={src}
            // title="DeepAR Try On"
            frameborder="no"
                        // scrolling="no"
            className='iframe'
            id='my-iframe'
            loading="lazy" 
            // allow="fullscreen"
        />
        <div className='btn_hide'/>
        <div className='btn_hide_fitting'/>
      </>
    );
};

export default Iframe;
