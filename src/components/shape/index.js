import React from 'react';

import './styles.css';


const ShapeItem = ({ source, isActive, onClick }) => {
    return (
        <button className={`shape-button ${isActive ? 'active' : ''}`} onClick={onClick}>
            <div style={{ backgroundColor: '#D9D9D9' }} />
            {/* <img src={source} alt={source} style={{ width: '100%', height: '100%', borderRadius: '10px' }} /> */}
        </button>
    );
};

export default ShapeItem;

