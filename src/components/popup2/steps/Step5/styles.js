import styled from 'styled-components';

export const Container = styled.div`
    width: 70%;
    margin: 60px auto;
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImageUser = styled.img`
    width: 55px;
    height: 55px;
    background-color: var(--container-bg);
    margin: 20px; 
    border-radius: 10px;
    object-fit: cover;
`;

export const Image = styled.img`
    width: 55px;
    height: 55px;
    background-color: var(--container-bg);
    margin: 20px; 
    padding: 4px;
    border-radius: 10px;
    object-fit: contain;
`;


export const P = styled.p`
    text-align: center;
    color: var(--dark-blue);
    font-weight: var(--font-weight-medium);
    font-size: 10.91px;
    line-height: 13.02px;
    margin-bottom: 20px;
`;

export const Loader = styled.div`
    width: 100%;
`;
