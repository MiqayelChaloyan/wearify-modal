import React from 'react';

import { ButtonsTexts, Texts } from 'constants';
import { ImagePaths, DeepARLink } from 'constants';

import { ButtonPrev, Button, Column, H3, P, Image, Box, HorizontalLine, Text, Footer } from './styles';


const ScanQR = ({ _handleBack }) => {
    const handleNavigateToLink = (url) => window.open(url, '_blank');

    return (
        <div>
            <Column>
                <ButtonPrev type='button' onClick={_handleBack}>
                    {ButtonsTexts.backScanning}
                </ButtonPrev>
                <Button type='button' onClick={() => handleNavigateToLink(DeepARLink)}>
                    {ButtonsTexts.info}
                </Button>
            </Column>
            <div>
                <H3>{Texts.scanningQR}</H3>
                <P>{Texts.scanningText}</P>
            </div>
            <Box>
                <Image src={ImagePaths.QRUrl} alt='QR-Image' />
            </Box>
            <HorizontalLine />
            <Footer>
                <Text>{Texts.scann}</Text>
                <Text>{Texts.allow}</Text>
                <Text>{Texts.tryOn}</Text>
            </Footer>
        </div>
    )
};

export default React.memo(ScanQR);