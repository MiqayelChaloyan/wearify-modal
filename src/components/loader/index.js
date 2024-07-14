import React from 'react';

import { useSelector } from 'react-redux';

import LoadingBar from 'ui/loading-bar';
import ArrowRight from 'icons/arrow';
import { Texts } from 'constants';
import colors from 'themes/colors';

import './styles.css'

const Loader = React.memo(({ handleClose }) => {
    const { images } = useSelector(state => state.imageReducer);
    const { item } = useSelector((state) => state.ItemReducer);

    return (
        <div className='loader-bar'>
            <div className='process8'>
                <img className='div8' src={images[0]?.source} alt={images[0]?.id} />
                <div className='arrow-loading'>
                    <ArrowRight width={19} height={19} fill={colors.lightGray} />
                </div>
                <img className='div8 arrow-loading' src={item?.imgPath} alt={item?.name} />
            </div>
            <div>
                <p className='info-text'>
                    {Texts.creatingModelImage}
                </p>
                <LoadingBar handleSubmit={handleClose} />
            </div>
        </div>
    )
});

export default Loader;