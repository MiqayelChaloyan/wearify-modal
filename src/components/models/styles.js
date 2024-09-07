import styled from 'styled-components';
import { media } from 'globalStyles';

export const Column = styled.div`
    height: 120px;
    width: 91px;
    border-radius: 30px;
    background-color: var(--pink);
    transition: var(--transition);
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${({ $isactive }) => ($isactive ? '2px solid var(--dark-blue)' : '2px solid var(--white)')};
    ${media.xs`
        height: 20px;
        width: 40px;
    `}
    ${media.sm`
        height: 40px;
        width: 50px;
    `}
    ${media.md`
        height: 60px;
        width: 60px;
    `}
    ${media.lg`
        height: 80px;
        width: 70px;
    `}
    ${media.xl`
        height: 100px;
        width: 80px;
    `}
    ${media["2xl"]`
        height: 120px;
        width: 91px;
    `}
`;

export const Image = styled.img`
    height: 100%;
    object-fit: cover;
    width: 100%;
    padding: 5px;
    border-radius: 30px;
`;
