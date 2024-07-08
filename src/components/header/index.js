import React, { useState } from 'react';

import { CgClose } from 'react-icons/cg';

import SafeExternalLink from 'ui/link';
import { ButtonsTexts, colors } from 'constants';

import { scanning } from 'utils/fakeApi';

import './styles.css';

// TODO
import { DeepARLink } from 'constants';
import Loader from 'components/loader';
//

const Header = React.memo(() => {
    const [isLoading, setIsLaoding] = useState(false);
    const handleClose = () => document.getElementById('web-modal').style.display = 'none';

    const handleSubmit = () => {
        console.log('next scan page');
    }

    const handleCloseLoading = () => setIsLaoding(false);

    return (
        <div className='buttons-group-person'>
            {isLoading && <Loader handleClose={handleCloseLoading}/>}
            <button
                id='close-modal'
                type='button'
                className='close-modal'
                onClick={handleClose}
            >
                <CgClose size={30} fill={colors.darkBlue} />
            </button>
            {scanning ? (
                <button className='button-try-on' onClick={handleSubmit}>
                    {ButtonsTexts.tryOn}
                </button>
            ) : (
                <SafeExternalLink href={DeepARLink} className='button-try-on'>
                    {ButtonsTexts.tryOn}
                </SafeExternalLink>
            )}
        </div>
    );
});

export default Header;