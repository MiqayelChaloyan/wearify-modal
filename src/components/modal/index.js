import React from 'react';

import useTheme from 'hooks/useTheme';

import './styles.css';


export default function Modal({
    children,
    // currentStepIndex,
    // _handleBack
}) {
    const { theme } = useTheme();

    const styles = { backgroundColor: theme };

    return (
        <div
            id='web-modal'
            className='modal'
            style={styles}
        >
            <div role='document'>
                {children}
            </div>
        </div>
    )
};