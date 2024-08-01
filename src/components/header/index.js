import React from 'react';

import { CgClose } from 'react-icons/cg';

import SafeExternalLink from 'ui/link';

import { ButtonsTexts } from 'constants';

import colors from 'themes/colors';

import { scanning } from 'utils/fakeApi';

import { Button, ButtonTryOn, Container } from './styles';

// TODO
import { DeepARLink } from 'constants';
//

const Header = ({
    _handleBack,
    _handleNext
}) => {
    const handleClose = () => document.getElementById('web-modal').style.display = 'none';

    return ( 
        <Container>
            <Button
                id='close'
                type='button'
                onClick={handleClose}
            >
                <CgClose size={25} fill={colors.darkBlue} />
            </Button>
            {scanning ? (
                <ButtonTryOn
                    type='button'
                    onClick={() =>  _handleNext()}
                >
                    {ButtonsTexts.tryOn}
                </ButtonTryOn>
            ) : (
                <SafeExternalLink href={DeepARLink}>
                    {ButtonsTexts.tryOn}
                </SafeExternalLink>
            )}
        </Container>
    );
};

export default React.memo(Header);