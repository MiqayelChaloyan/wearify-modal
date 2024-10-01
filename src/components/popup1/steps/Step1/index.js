import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleUpdateData } from 'reducer/features/State';

import InputRange from 'ui/range';
import Header from '../header';

import { Titles, UnitsOfMeasurement } from 'constants';
import { HEIGHT, WEIGHT } from 'constants/data';

import { Container, H3, RangeBox, ToggleBox, ToggleButton, Titles as TitlesBox } from './styles';


const Step1 = () => {
    const { isCentimeter, height, weight } = useSelector((state) => state.data);
    const dispatch = useDispatch();

    const selectedHeight = isCentimeter ? HEIGHT[0] : HEIGHT[1];
    const selectedWeight = isCentimeter ? WEIGHT[0] : WEIGHT[1];

    const handleRangeChangeHeight = (e) => {
        dispatch(handleUpdateData({ height: e.target.value }));
    };

    const handleRangeChangeWeight = (e) => {
        dispatch(handleUpdateData({ weight: e.target.value }));
    };

    const handleChangeUnit = () => {
        dispatch(handleUpdateData({ isCentimeter: !isCentimeter }));
    };

    return (
        <div>
            <Header title={Titles.sizes} />
            <Container>
                <ToggleBox>
                    <ToggleButton
                        $isactive={isCentimeter}
                        onClick={handleChangeUnit}
                    >
                        {UnitsOfMeasurement.cm}
                    </ToggleButton>
                    <ToggleButton
                        $isactive={!isCentimeter}
                        onClick={handleChangeUnit}
                    >
                        {UnitsOfMeasurement.in}
                    </ToggleButton>
                </ToggleBox>
                <RangeBox>
                    <div>
                        <TitlesBox>
                            <H3>{Titles.height}</H3>
                            <H3>{height}</H3>
                        </TitlesBox>
                        <InputRange
                            max={selectedHeight.max}
                            min={selectedHeight.min}
                            handleRangeChange={handleRangeChangeHeight}
                        />
                    </div>
                    <div>
                        <TitlesBox>
                            <H3>{Titles.weight}</H3>
                            <H3>{weight}</H3>
                        </TitlesBox>
                        <InputRange
                            handleRangeChange={handleRangeChangeWeight}
                            max={selectedWeight.max}
                            min={selectedWeight.min}
                        />
                    </div>
                </RangeBox>
            </Container>
        </div>
    )
};

export default React.memo(Step1);