import { useEffect } from 'react';
import './styles.css';

const Iframe = ({ src }) => {

  return (
    <>
      <iframe
        src={src}
        // title="DeepAR Try On"
        frameborder="0"
        // scrolling="no"
        className='iframe'
        id='my-iframe'
        loading="lazy"
      // allow="fullscreen"
      />
      {/* <div className='btn_hide'/>
        <div className='btn_hide_fitting'/> */}
      {/* <div className='hide-border'/> */}
    </>
  );
};

export default Iframe;
