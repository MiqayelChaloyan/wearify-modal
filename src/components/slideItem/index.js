import React from 'react';

import './styles.css';

const Item = ({ source, isActive, onClick }) => {
    return (
        <button className={`shape-button ${isActive ? 'active' : ''}`} onClick={onClick}>
            <img
                src={source}
                alt={source}
                className='image'
            />
        </button>
    );
};

export default Item;

