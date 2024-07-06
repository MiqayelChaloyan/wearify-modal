
import Header from '../header';
import './styles.css';


const Step1 = () => {
    return (
        <div className='step'>
            <Header title={'INPUT SIZE'}/>
            <div className='options'>
                <div className='toggle-buttons'>
                    <button className='button-sizes'>CM</button>
                    <button className='button-sizes'>IN</button> 
                </div>
                <div>
                    1
                </div>
            </div>
        </div>
    )
};

export default Step1;