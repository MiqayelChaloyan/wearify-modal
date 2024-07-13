import React from 'react';

import useTheme from 'hooks/useTheme';

import './styles.css';


export default function Modal({
    children,
    // currentStepIndex,
    _handleBack,
    _handleNext
}) {
    const { theme } = useTheme();

    const styles = { backgroundColor: theme };

    const childrenWithProps = React.Children.map(children, child =>
        React.cloneElement(child, { _handleBack, _handleNext })
    );

    return (
        <div
            id='web-modal'
            className='modal'
            style={styles}
        >
            <div role='document'>
                {childrenWithProps}
            </div>
        </div>
    )
};