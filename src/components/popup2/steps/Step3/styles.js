import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 30px;
    height: 200px;
`;

export const H3 = styled.h3`
    font-size: 10.91px;
    font-weight: var(--font-weight-medium);
    line-height: 13.02px;
    color: var(--dark-blue);
    text-align: center;
    margin: 10px auto;
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
    background-color: ${({ $isactive }) => ($isactive ? 'var(--btn-text-first-color)' : 'var(--btn-color)')};
    color:  ${({ $isactive }) => ($isactive ? 'var(--dark-blue)' : 'var(--btn-text-first-color)')};
`;

export const P = styled.p`
    line-height: 13.02px;
    color: var(--dark-blue);
    font-size: 11px;
    font-weight: var(--font-weight-medium);
    width: 68%;
    margin: 20px auto;
`;
