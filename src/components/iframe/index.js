import { useEffect } from 'react';
import './styles.css';

const Iframe = ({ src }) => {
    
    return (
      <>
        <iframe
            src={src}
            title="DeepAR Try On"
            frameBorder="0"
            scrolling="no"
            className='iframe'
            id='my-iframe'
        />
        <div className='btn_hide'/>
      </>
    );
};

export default Iframe;
