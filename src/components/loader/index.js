import LoadingBar from 'ui/loading-bar';
import ArrowRight from 'icons/arrow';

import './styles.css'

const Loader = ({ handleClose }) => {
    return (
        <div className='loader-bar'>
            <div className='process8'>
                <div className='div8'></div>
                <div className='arrow-loading'>
                    <ArrowRight width={19} height={19} fill='gray' />
                </div>
                <div className='div8 arrow-loading'></div>
            </div>
            <div>
                <p className='info-text'>Creating model images, it’s expected to take 2 minutes.</p>
                <LoadingBar handleSubmit={handleClose} />
            </div>
        </div>
    )
}

export default Loader;