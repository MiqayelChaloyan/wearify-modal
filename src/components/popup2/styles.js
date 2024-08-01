import styled from 'styled-components';

export const Container = styled.div`
    z-index: 30;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #b4b4b6e8;
    border-radius: 30px;
    -webkit-backdrop-filter: blur(3px);
    -moz-backdrop-filter: blur(3px);
    -ms-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);
`;

export const Modal = styled.div`
    width: 320px;
    height: 380px;
    background-color: var(--modal-bg-color);
    border-radius: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 15px 24px -15px var(--shadow-color);
`;

export const Header = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 10px 15px;
`;

export const Box = styled.div`
    display: flex;
    justify-content: center;
`;

export const ButtonVariant1 = styled.button`
    font-size: 10.98px;
    width: 92.51px;
    height: 36.43px;
    font-weight: 500;
    border-radius: 60px;
    cursor: pointer;
    text-decoration: none;
    margin: 15px 4px;
    background-color: var(--dark-blue);
    border: 1px solid var(--dark-blue);
    color: var(--text-first-color);
    &:hover {
        color: var(--dark-blue);
        background-color: var(--text-first-color);
    }
`;

export const ButtonVariant2 = styled.button`
    font-size: 10.98px;
    width: 92.51px;
    height: 36.43px;
    font-weight: 500;
    border-radius: 60px;
    cursor: pointer;
    text-decoration: none;
    margin: 15px 4px;
    background-color: var(--text-first-color);
    color: var(--dark-gray);
    border: 1px solid var(--dark-gray);
`;

export const ButtonVariant3 = styled.button`
    font-size: 10.98px;
    width: 92.51px;
    height: 36.43px;
    font-weight: 500;
    border-radius: 60px;
    cursor: pointer;
    text-decoration: none;
    margin: 15px 4px;
    background-color:  ${({ $disabled }) => ($disabled ? 'var(--text-first-color)' : 'var(--dark-blue)')};;
    border: ${({ $disabled }) => ($disabled ? '1px solid var(--dark-gray)' : '1px solid var(--dark-blue)')};;
    color: ${({ $disabled }) => ($disabled ? 'var(--dark-gray)' : 'var(--text-first-color)')};;
`;

export const H2 = styled.h2`
    font-weight: 500;
    font-size: 20px;
    line-height: 21.48px;
    text-align: center;
    margin-bottom: 20px;
`;

export const HorizontalLine = styled.div`
    width: 70%;
    height: 3px;
    margin: 0 auto;
    background-color: var(--line-color);
`;