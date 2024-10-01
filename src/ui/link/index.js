import React from 'react';
import { Button } from './styles';


const SafeExternalLink = ({ href, children, className }) => {
    const handleOpenLink = () => {
        window.open(href, '_blank', 'noopener,noreferrer');
    };

    return (
        <Button onClick={handleOpenLink}>
            {children}
        </Button>
    );
};

export default SafeExternalLink;
