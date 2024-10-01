import React from 'react';

import useTheme from 'hooks/useTheme';

import { Container } from './styles';


export default function Modal({
    children,
    _handleBack,
    _handleNext
}) {
    const { theme } = useTheme();

    const childrenWithProps = React.Children.map(children, child =>
        React.cloneElement(child, { _handleBack, _handleNext })
    );

    return (
        <Container
            id='web-modal'
            $bgColor={theme}
        >
            <div role='document'>
                {childrenWithProps}
            </div>
        </Container>
    )
};