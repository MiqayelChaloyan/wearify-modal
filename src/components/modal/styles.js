import { media } from 'globalStyles';
import styled from 'styled-components';

export const Container = styled.div`
    width: 362px;
    height: 490px;
    background-color: ${({ $bgColor }) => $bgColor};
    border-radius: 30px;
    position: fixed;
    transform: translate(0%, -50%);
    box-shadow: 0px 15px 24px -15px var(--shadow-color);
    right: 20px;
    top: 50%;
    display: none;
    z-index: 100000;
    ${media.xs`
        height: 490px;
        width: 90%;
        border-radius: 30px;
    `}
    ${media.sm`
        height: 490px;
        transform: translate(-50%, -50%);
        left: 50%;
        right: 0;
    `}
    ${media.md`
        width: 362px;
        height: 490px;  
        top: 50%;  
    `}
    ${media.lg`
        width: 362px;
        height: 490px;  
        top: 50%;  
    `}
    ${media.xl`
        width: 362px;
        height: 490px;  
        top: 50%;  
    `}
    ${media["2xl"]`
        width: 362px;
        height: 490px;  
        top: 50%; 
    `}
`;
