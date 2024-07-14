import React from 'react';

import './styles.css';

const RemovePopup = ({
    handleYesClick,
    handleNoClick
}) => {

    return (
        <div className='remove-popup'>
            <p className='remove-popup-title'>Are you sure you want to remove the image?</p>
            <div className='remove-popup-buttons'>
                <button className='remove-popup-button' onClick={handleYesClick}>Yes</button>
                <button className='remove-popup-button' onClick={handleNoClick}>No</button>
            </div>
        </div>
    )
};

export default RemovePopup;