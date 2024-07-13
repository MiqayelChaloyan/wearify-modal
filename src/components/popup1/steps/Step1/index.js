import React, { useState }  from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleUpdateData } from 'reducer/features/State';

import InputRange from 'ui/range';
import Header from '../header';

import { Titles, UnitsOfMeasurement } from 'constants';
import { HEIGHT, WEIGHT } from 'constants/data';

import cn from 'classnames';

import './styles.css';


const Step1 = React.memo(() => {
    const { isCentimeter, height, weight } = useSelector((state) => state.data);
    const dispatch = useDispatch();

    // const [isCentimeter, setIsCentimeter] = useState(defaultisCentimeter)
    // const [rangeValueHeight, setValueHeight] = useState(height);
    // const [rangeValueWeight, setValueWeight] = useState(weight);

    const selectedHeight = isCentimeter ? HEIGHT[0] : HEIGHT[1];
    const selectedWeight = isCentimeter ? WEIGHT[0] : WEIGHT[1];

    const handleRangeChangeHeight = (e) => {
        dispatch(handleUpdateData({ height: e.target.value }));
        // setValueHeight(e.target.value)
    };

    const handleRangeChangeWeight = (e) => {
        dispatch(handleUpdateData({ weight: e.target.value }));
        // setValueWeight(e.target.value);
    };

    const handleChangeUnit = () => {
        dispatch(handleUpdateData({ isCentimeter: !isCentimeter }));
        // setIsCentimeter(!isCentimeter);
    };

    return (
        <div>
            <Header title={Titles.sizes} />
            <div className='options'>
                <div className='toggle-buttons'>
                    <button
                        className={cn('button-sizes', isCentimeter && 'active-sizes')}
                        onClick={handleChangeUnit}
                    >
                        {UnitsOfMeasurement.cm}
                    </button>
                    <button
                        className={cn('button-sizes', !isCentimeter && 'active-sizes')}
                        onClick={handleChangeUnit}
                    >
                        {UnitsOfMeasurement.in}
                    </button>
                </div>
                <div className='range'>
                    <div>
                        <div className='range-titles'>
                            <h3 className='range-title'>{Titles.height}</h3>
                            <h3 className='range-title'>{height}</h3>
                        </div>
                        <InputRange
                            max={selectedHeight.max}
                            min={selectedHeight.min}
                            handleRangeChange={handleRangeChangeHeight}
                        />
                    </div>
                    <div>
                        <div className='range-titles'>
                            <h3 className='range-title'>{Titles.weight}</h3>
                            <h3 className='range-title'>{weight}</h3>
                        </div>
                        <InputRange
                            handleRangeChange={handleRangeChangeWeight}
                            max={selectedWeight.max}
                            min={selectedWeight.min}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Step1;