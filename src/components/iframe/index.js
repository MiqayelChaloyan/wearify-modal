import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleSwitchLoading } from 'reducer/features/LoaderCloSet';

import IframeLoad from 'ui/loading';

import './styles.css';


function IFrame({ src }) {
  const [ref, setRef] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (ref) {
      const handleLoad = () => {
        setLoaded(true);
        dispatch(handleSwitchLoading(true));
      };
      ref.addEventListener('load', handleLoad);
      return () => {
        ref.removeEventListener('load', handleLoad);
      };
    }
  }, [ref]);


  return (
    <>
      {!loaded &&
        <div className="loader">
          <IframeLoad />
        </div>}
      <iframe
        title="iframe"
        ref={setRef}
        src={src}
        className={`iframe ${loaded ? 'loaded' : ''}`}
        frameBorder="0"
        id="myIframe"
        sandbox={true}
        loading="eager"
      />
    </>
  );
};


const Iframe = ({ src }) => {
  return (
    <div className="Iframe">
      <div className="hide-border" />
      <IFrame src={src} />
    </div>
  );
}

export default Iframe;


