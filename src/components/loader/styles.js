import styled from 'styled-components';

export const LoaderBar = styled.div`
    position: absolute;
    height: 145px;
    display: grid;
    justify-content: flex-start;
    background-color: none;
    top: 0px;
    right: 0px;
    z-index: 10000000;
    padding: 15px;
    background-color: var(--pink);
    border-radius: 0 50px 0 0;
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const Image = styled.img`
    object-fit: cover;
    width: 55px;
    height: 55px;
    background-color: var(--container-bg);
    border-radius: 10px;
    margin-left: ${({ $left }) => ($left ? '15px' : '0')};
`;

export const Column = styled.div`
    margin-left: 15px;
`;

export const P = styled.p`
    font-size: 10.91px;
    color:  var(--dark-blue);
    font-weight: var(--font-weight-medium);
    line-height: 13.02px;
    margin-bottom: 10px;
`;