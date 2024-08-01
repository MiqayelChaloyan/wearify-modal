import styled from 'styled-components';
import { media } from 'globalStyles';

export const Column = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 30px;
    padding-right: 20px;
    margin-top: 40px;
    margin-bottom: 20px;
`;

export const ButtonPrev = styled.button`
    font-size: 14px;
    width: 100px;
    height: 40px;
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
    `}
    ${media.sm`
        font-size: 17px;
        padding: 10px 20px 10px 20px;
    `}
    ${media.md`
        font-size: 14px;
        padding: 5px 15px;
    `}
    ${media.lg`
        font-size: 14px;
        padding: 5px 10px 5px 10px;
    `}
    ${media.xl`
        font-size: 14px;
        width: 100px;
        height: 40px;
    `}
    ${media["2xl"]`
        font-size: 14px;
        width: 100px;
        height: 40px;
    `}
`;

export const Button = styled.button`
    font-size: 17px;
    width: 40px;
    height: 40px;
    font-weight: var(--font-weight-medium);
    background-color: var(--light-blue);
    border: 1px solid var(--dark-blue);
    border-radius: 50px;
    cursor: pointer;
    color: var(--dark-blue);
    text-decoration: none;
    transition: var(--transition);
    ${media.xs`
        font-size: 15px;
        width: 40px;
        height: 40px;
    `}
    ${media.sm`
        font-size: 15px;
        width: 40px;
        height: 40px;
    `}
    ${media.md`
        font-size: 15px;
        width: 40px;
        height: 40px;
    `}
    ${media.lg`
        font-size: 17px;
        width: 40px;
        height: 40px;
    `}
    ${media.xl`
        font-size: 17px;
        width: 40px;
        height: 40px;
    `}
    ${media["2xl"]`
        font-size: 17px;
        width: 40px;
        height: 40px;
    `}
`;

export const H3 = styled.h3`
    font-size: 20px;
    line-height: 30.12px;
    margin-bottom: 10px;
    font-weight: var(--font-weight-bold);
    color: var(--dark-blue);
    text-align: center;
    white-space: pre-line;
    ${media.xs`
        font-size: 20px;
        line-height: 30.12px;
        margin-bottom: 10px;
    `}
    ${media.sm`
        font-size: 20px;
        line-height: 30.12px;
        margin-bottom: 10px;
    `}
    ${media.md`
        font-size: 20px;
        line-height: 30.12px;
        margin-bottom: 10px;
    `}
    ${media.lg`
        font-size: 20px;
        line-height: 30.12px;
        margin-bottom: 10px;
    `}
    ${media.xl`
        font-size: 20px;
        line-height: 30.12px;
        margin-bottom: 10px;
    `}
    ${media["2xl"]`
        font-size: 20px;
        line-height: 30.12px;
        margin-bottom: 10px;
    `}
`;

export const P = styled.p`
    font-size: 14.89px;
    font-weight: var(--font-weight-medium);
    color: var(--dark-blue);
    text-align: center;
    white-space: pre-line;
    line-height: 14.89px;
    ${media.xs`
        font-size: 13.89px;
        line-height: 13.89px;
    `}
    ${media.sm`
        font-size: 13.89px;
        line-height: 13.89px;
    `}
    ${media.md`
        font-size: 13.89px;
        line-height: 13.89px;
    `}
    ${media.lg`
        font-size: 13.89px;
        line-height: 13.89px;
    `}
    ${media.xl`
        font-size: 14.89px;
        line-height: 14.89px;
    `}
    ${media["2xl"]`
        font-size: 14.89px;
        line-height: 14.89px;
    `}
`;

export const Image = styled.img`
    height: 100%;
    object-fit: cover;
    width: 100%;
    border-radius: 20px;
`;

export const Box = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px auto;
    width: 150px;
    height: 150px;
    ${media.xs`
        width: 150px;
        height: 150px;
        margin: 10px auto;
    `}
    ${media.sm`
        width: 150px;
        height: 150px;
        margin: 10px auto;
    `}
    ${media.md`
        width: 150px;
        height: 150px;
        margin: 10px auto;
    `}
    ${media.lg`
        width: 150px;
        height: 150px;
    `}
    ${media.xl`
        width: 150px;
        height: 150px;
    `}
    ${media["2xl"]`
        width: 150px;
        height: 150px;
    `}
`;

export const HorizontalLine = styled.div`
    width: 70%;
    height: 2px;
    background-color: var(--gray);
    margin: 10px auto;
    ${media.lg`
        margin: 10px auto
    `}
`;

export const Text = styled.p`
    font-size: 14.89px;
    line-height: 25.89px;
    font-weight: var(--font-weight-medium);
    color: var(--dark-blue);
    text-align: left;
    ${media.xs`
        line-height: 20.89px;
    `}
    ${media.sm`
        line-height: 20.89px;
    `}
    ${media.md`
        font-size: 14.89px;
        line-height: 25.89px;
    `}
    ${media.lg`
        font-size: 14.89px;
        line-height: 25.89px;
    `}
    ${media.xl`
        font-size: 14.89px;
        line-height: 25.89px;
    `}
    ${media["2xl"]`
        font-size: 14.89px;
        line-height: 25.89px;
    `}
`;

export const Footer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
`;