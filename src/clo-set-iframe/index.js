import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { handleSwitchLoading } from 'reducer/features/LoaderCloSet';

import IframeLoad from 'ui/loading';

import { Box, Container, HideBorder, Iframe, ButtonBack, Container1, Box1, Button, HorizontalLine } from './styles';
import MeasurementsIcon from 'icons/measurements';
import UserIcon from 'icons/people'

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


const IframeCloSet = ({ src, _handleBack }) => {
    return (
        <Container>

            <Container1>
                <Box1>
                    <Button>
                        <MeasurementsIcon size={24} fill={'#ACACAC'} />
                    </Button>
                    <HorizontalLine />
                    <Button disabled={!true}>
                        <UserIcon size={24} fill={'#ACACAC'} />
                    </Button>
                </Box1>
            </Container1>

            <ButtonBack type='button' onClick={_handleBack}>Back</ButtonBack>
            <HideBorder />
            <IFrame src={src} />
        </Container>
    );
}

export default IframeCloSet;


