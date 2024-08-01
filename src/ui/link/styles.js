import styled from 'styled-components';
import { media } from 'globalStyles';

export const Link = styled.a`
    font-size: 15px;
    width: 120px;
    height: 46px;
    font-weight: var(--font-weight-medium);
    background-color: var(--dark-blue);
    border: 1px solid var(--dark-blue);
    border-radius: 60px;
    cursor: pointer;
    color: var(--text-first-color);
    text-decoration: none;
    transition: var(--transition);
    ${media.xs`
        font-size: 14px;
        padding: 5px 10px 5px 10px;
        width: 120px;
        height: 40px;
    `}
    ${media.sm`
        font-size: 14px;
        padding: 5px 10px 5px 10px;
        width: 120px;
        height: 40px;
    `}
    ${media.md`
        font-size: 14px;
        padding: 5px 10px 5px 10px;
    `}
    ${media.lg`
        font-size: 14px;
        width: 100px;
        height: 40px;
    `}
    ${media.xl`
        width: 120px;
        height: 46px;
    `}
    ${media["2xl"]`
        width: 120px;
        height: 46px;
    `}
`;
