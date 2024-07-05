import React from 'react';

import { CgClose } from 'react-icons/cg';

import SafeExternalLink from 'ui/link';

import { colors } from 'constants';
import { ButtonsTexts } from 'constants';

import { scanning } from 'utils/fakeApi';

import './styles.css';

// TODO
import { DeepARLink } from 'constants';
//

const Header = React.memo(() => {
    const handleClose = () => document.getElementById('web-modal').style.display = 'none';

    const handleSubmit = () => {
        console.log('next scan page');
    }

    return (
        <div className='buttons-group-person'>
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