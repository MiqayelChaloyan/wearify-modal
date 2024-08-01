import styled from 'styled-components';

export const Box = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-51%, -50%);
`;

export const Iframe = styled.iframe`
    display: ${({ $loaded }) => ($loaded ? 'block' : 'none')};
    border-radius: 30px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 490px;
    overflow: hidden;
`;

export const HideBorder = styled.div`
    width: 100%;
    height: 490px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 25px;
    border: 2px solid rgb(236, 237, 234);
    background-color: transparent;
    pointer-events: none;
    z-index: 100000;
    display: block !important;
`;
