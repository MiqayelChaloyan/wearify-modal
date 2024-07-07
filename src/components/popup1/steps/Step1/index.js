
import InputRange from 'ui/range';
import Header from '../header';
import './styles.css';
import { useState } from 'react';


const Step1 = () => {
    const [isCentimeter, setIsCentimeter] = useState(true)
    const [rangeValueHeight, setValueHeight] = useState(150);
    const [rangeValueWeight, setValueWeight] = useState(150);

    const handleRangeChangeHeight = (e) => {
        setValueHeight(e.target.value)
    }

    const handleRangeChangeWeight = (e) => {
        setValueWeight(e.target.value)
    }

    const handleChangeMeasurements = () => {
        setIsCentimeter(!isCentimeter)
    }

    return (
        <div>
            <Header title={'INPUT SIZE'} />
            <div className='options'>
                <div className='toggle-buttons'>
                    <button className={`button-sizes ${isCentimeter ? 'active-sizes' : ''}`} onClick={handleChangeMeasurements}>CM</button>
                    <button className={`button-sizes ${!isCentimeter ? 'active-sizes' : ''}`} onClick={handleChangeMeasurements}>IN</button>
                </div>
                <div className='range'>
                    <div>
                        <div className='range-titles'>
                            <h3 className='range-title'>HEIGHT</h3>
                            <h3 className='range-title'>{rangeValueHeight}</h3>
                        </div>
                        <InputRange handleRangeChange={handleRangeChangeHeight} />
                    </div>
                    <div>
                        <div className='range-titles'>
                            <h3 className='range-title'>WEIGHT</h3>
                            <h3 className='range-title'>{rangeValueWeight}</h3>
                        </div>
                        <InputRange handleRangeChange={handleRangeChangeWeight} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Step1;