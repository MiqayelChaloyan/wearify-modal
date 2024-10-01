import styled from 'styled-components';

export const Button = styled.button`
    background-color: none;
    border-radius: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: var(--transition);
    border: ${({ $isactive }) => ($isactive ? '1px solid var(--dark-blue)' : '1px solid var(--white)')};
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`;