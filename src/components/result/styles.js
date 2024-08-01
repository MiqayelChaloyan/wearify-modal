import styled from 'styled-components';
import { media } from 'globalStyles';

export const Container = styled.div`
    z-index: 150;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: var(--gray);
    border-radius: 30px;
    -webkit-backdrop-filter: blur(3px);
    -moz-backdrop-filter: blur(3px);
    -ms-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);
`;

export const Header = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 10px 15px;
`;

export const Button = styled.button`
    width: 77px;
    height: 24px;
    background-color: transparent;
    color: var(--dark-blue);
    margin: 5px;
    cursor: pointer;
    position: absolute;
    top: 140px;
    right: 50px;
    z-index: 25;
    ${media.xl`
        top: 90px;
        right: 20px;
    `}
`;

export const Box = styled.div`
    width: 330px;
    height: 473px;
    border-radius: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -35%);
`;

export const ResultBox = styled.div`
    width: 90%;
    height: 340px;
    margin: 0 auto;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
`;