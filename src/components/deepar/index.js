import { useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import './styles.css';
import IframeLoad from 'components/loading';

function IFrame({ src, onClose }) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  // const handleReload = () => {
  //   setLoaded(false);
  //   const iframe = document.getElementById('myIframe');
  //   if (iframe) {
  //     iframe.src = iframe.src; // Reload the iframe
  //   }
  // };

  return (
    <>
      {!loaded && (
        <div className="loader">
          <IframeLoad/>
        </div>
      )}
      <iframe
        title="iframe"
        id="myIframe"
        src={src}
        className={`iframe ${loaded ? 'loaded' : ''}`}
        frameBorder="0"
        scrolling="no"
        allow="camera *;"
        loading="eager"
        onLoad={handleLoad}
      />
      {/* <button onClick={handleReload} className="reload-button">
        <TfiReload color="white" size={20} />
      </button> */}
      <button onClick={onClose} className="close-button">
        <IoClose color="green" size={30} />
      </button>
    </>
  );
}

const IframeContainer = ({ src }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = () => {
    const button = document.getElementById('wearify-button');
    if(button) {
      button.style.display = 'none';
    }
    setIsVisible(true);
  };

  const handleClose = () => {
    const button = document.getElementById('wearify-button');
    if(button) {
      button.style.display = 'flex';
    }
    setIsVisible(false);
  };

  useEffect(() => {
    const button = document.getElementById('wearify-button');
    if (button) {
      button.addEventListener('click', handleOpen);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', handleOpen);
      }
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="Iframe">
          <IFrame src={src} onClose={handleClose} />
        </div>
      )}
    </div>
  );
};

export default IframeContainer;
