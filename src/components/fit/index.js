import React from 'react';

import { useSelector } from 'react-redux';

import FitIcon from 'icons/fit';

import { Box, Button, Container, H3 } from './styles';


const FitHide = () => {
    const { isLoading } = useSelector(state => state.loaderCloSet);

    return isLoading && (
        <Container>
            <Box>
                <Button>
                    <FitIcon size={24} fill={'rgb(235, 235, 237)'} />
                </Button>
                <div>
                <H3>FIT</H3>
                </div>
            </Box>
        </Container>
    )
};

export default React.memo(FitHide);