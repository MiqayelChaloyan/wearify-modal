import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { handleSwitchLoading } from 'reducer/features/LoaderCloSet';

import IframeLoad from 'ui/loading';

import { Box, Container, HideBorder, Iframe, ContainerClo3d } from './styles';


const IFrame = ({ src }) => {
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
        <Box>
          <IframeLoad />
        </Box>}
      <Iframe
        $loaded={loaded}
        title="iframe"
        ref={setRef}
        src={src}
        frameBorder="0"
        id="myIframe"
        loading="eager"
      />
    </>
  );
};


const IframeWrapper = ({ src }) => {
  return (
    <Container>
      <HideBorder />
      <IFrame src={src} />
    </Container>
  );
}

export default IframeWrapper;


