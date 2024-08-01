import React from 'react';

import { useSelector } from 'react-redux';

import LoadingBar from 'ui/loading-bar';

import ArrowRight from 'icons/arrow';

import { Texts } from 'constants';

import colors from 'themes/colors';

import { Box, Column, Image, LoaderBar, P } from './styles';


const Loader = ({ handleClose }) => {
    const { images } = useSelector(state => state.imageReducer);
    const { item } = useSelector((state) => state.ItemReducer);

    return (
        <LoaderBar>
            <Box>
                <Image
                    src={images[0]?.source}
                    alt={images[0]?.id}
                    $left={false}
                />
                <Column>
                    <ArrowRight
                        width={19}
                        height={19}
                        fill={colors.lightGray}
                    />
                </Column>
                <Image
                    src={item?.imgPath}
                    alt={item?.name}
                    $left={true}
                />
            </Box>
            <div>
                <P>{Texts.creatingModelImage}</P>
                <LoadingBar handleSubmit={handleClose} />
            </div>
        </LoaderBar>
    )
};

export default React.memo(Loader);