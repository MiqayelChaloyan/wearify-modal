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
    padding: 0px;
    position: absolute;
    right: 21px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 22px;
`;

export const Box = styled.div`
    display: grid;
    align-items: center;
    padding: 5px 1px;
    position: relative;
`;

export const Button = styled.button`
    padding: 17px 12px;
    height: 59px;
    width: 50px;    
    background-color: transparent !important;
    cursor: pointer;
    transition: var(--transition);
`;

export const HorizontalLine = styled.div`
    height: 1px;
    background-color: rgb(210, 210, 212);
    min-width: 30px; 
    flex: 1;
    margin: 0 10px;
    max-width: 30px;
`;
