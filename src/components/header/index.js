import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { CgClose } from 'react-icons/cg';

import Loader from 'components/loader';

import SafeExternalLink from 'ui/link';
import { ButtonsTexts } from 'constants';
import colors from 'themes/colors';

import { scanning } from 'utils/fakeApi';

import './styles.css';

// TODO
import { DeepARLink } from 'constants';
import { handleSwitchPopup, handleSwitchResultLoading } from 'reducer/features/ResultReducer';
//

const Header = React.memo(({
    _handleBack,
    _handleNext
}) => {
    const { isLoading } = useSelector((state) => state.result);
    const dispatch = useDispatch();

    // const [isLoading, setIsLaoding] = useState(false);
    const handleClose = () => document.getElementById('web-modal').style.display = 'none';

    const handleSubmit = () => {
        _handleNext()
    }

    const handleCloseLoading = () => {
        dispatch(handleSwitchResultLoading())
        dispatch(handleSwitchPopup());
    };

    return (
        <div className='buttons-group-person'>
            {isLoading && <Loader handleClose={handleCloseLoading} />}
            <button
                id='close-modal'
                type='button'
                className='close-modal'
                onClick={handleClose}
            >
                <CgClose size={25} fill={colors.darkBlue} />
            </button>
            {scanning ? (
                <button
                    className='button-try-on'
                    onClick={handleSubmit}
                >
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