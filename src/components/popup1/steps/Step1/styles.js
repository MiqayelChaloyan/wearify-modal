import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 20px;
    height: 200px;
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

export const ToggleBox = styled.div`
    display: flex;
    justify-content: center;
`;

export const ToggleButton = styled.button`
    width: 77px;
    height: 24px;
    border-radius: 7px;
    margin: 5px;
    cursor: pointer;
    background-color: ${({ $isactive }) => $isactive ? 'var(--btn-text-first-color)' : 'var(--btn-color)'};
    color: ${({ $isactive }) => $isactive ? 'var(--dark-blue)' : 'var(--btn-text-first-color)'};
    border: none;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:focus {
        outline: none;
    }
`;

export const RangeBox = styled.div`
    margin: 35px auto;
    width: 70%;
`;

export const Titles = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const H3 = styled.h3`
    font-size: 10.91px;
    color: var(--dark-blue);
    font-weight: 500;
    text-align: left;
`;