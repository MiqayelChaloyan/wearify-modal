import ArrowRight from 'icons/arrow';

import LoadingBar from 'ui/loading-bar';

import { useDispatch } from 'react-redux';
import { handleSwitchStatusPopup2 } from 'store/features/PopupState';

import './styles.css';


const Step5 = () => {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(handleSwitchStatusPopup2());
    };

    return (
        <div className='child'>
            <div className='process'>
                <div className='div'></div>
                <ArrowRight width={19} height={19} fill='gray' />
                <div className='div'></div>
            </div>
            <p className='queue-text'>Your task is in the queue...</p>
            <div className='loader'>
                <LoadingBar handleSubmit={handleClose} />
            </div>
        </div>
    );
}

export default Step5;