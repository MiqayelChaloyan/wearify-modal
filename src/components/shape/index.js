import React from 'react';


const ShapeItem = ({ 
    source 
}) => {
    return (
        <div>
            <div style={{ width: '59px', height: '59px', borderRadius: '10px', backgroundColor: '#D9D9D9' }} />
            {/* <img src={item.source} alt={item.title} style={{ width: '59px', height: '59px', borderRadius: '10px' }} /> */}
        </div>
    )
};

export default ShapeItem;

