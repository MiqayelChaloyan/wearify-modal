import styled from 'styled-components';

export const Container = styled.div`
    z-index: 20;
    background: transparent;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: absolute;
    right: 19px;
    top: 76.7px;
    padding: 11.5px 8px;
    background: rgba(0, 0, 0, 0.3);
    transform: translateY(-50%);
    border-radius: 32px;
    cursor: no-drop;
`;

export const Box = styled.div`
    display: grid;
    align-items: center;
    padding: 5px 1px;
    position: relative;
`;

export const Button = styled.button` 
    background-color: transparent !important;
    cursor: no-drop;
    transition: var(--transition);
`;

export const H3 = styled.h3` 
    font-family: inherit;
    font-size: 14px;
    color: rgb(255, 255, 255);
    font-weight: 600;
    text-align: center;
    font-style: normal;
    line-height: initial;
    letter-spacing: 1px;
`;
