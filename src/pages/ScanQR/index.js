import React from 'react';

import { ButtonsTexts, Texts } from 'constants';
import { ImagePaths, DeepARLink } from 'constants';

import './styles.css';


const ScanQR = React.memo(({
    _handleBack
}) => {
    const handleNavigateToLink = (url) => window.open(url, '_blank');

    return (
        <div>
            <div className='header'>
                <button
                    className='button-back'
                    onClick={_handleBack}
                >
                    {ButtonsTexts.backScanning}
                </button>
                <button
                    className='button-information'
                    onClick={() => handleNavigateToLink(DeepARLink)}
                >
                    {ButtonsTexts.info}
                </button>
            </div>
            <div>
                <h3 className='scanning-title'>{Texts.scanningQR}</h3>
                <p className='scanning-text'>{Texts.scanningText}</p>
            </div>
            <div className='qr-block'>
                <img
                    src={ImagePaths.QRUrl}
                    className='qr-image'
                    alt='QR'
                />
            </div>
            <div className='line-qr' />
            <div className='footer'>
                <p className='footer-text'>{Texts.scann}</p>
                <p className='footer-text'>{Texts.allow}</p>
                <p className='footer-text'>{Texts.tryOn}</p>
            </div>
        </div>
    )
});

export default ScanQR;