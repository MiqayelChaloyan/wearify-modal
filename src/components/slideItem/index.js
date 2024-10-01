import React from 'react';

import { Button, Image } from './styles';


const Item = ({ source, isActive, onClick }) => {
    return (
        <Button $isactive={isActive} onClick={onClick}>
            <Image src={source} alt={source} />
        </Button>
    );
};

export default Item;

