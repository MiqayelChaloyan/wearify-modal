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

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
`;

export const Column = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin: 5px auto;
`;

export const UploadButton = styled.button`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 9px;
    padding: 5px;
    margin: 5px;
    cursor: pointer;
    transition: var(--transition);
    background-color: ${({ $disabled }) => ($disabled ? 'var(--btn-text-first-color)' :  'var(--container-bg)')};
    &:hover {
        opacity: 0.65;
    }
`;

export const Text = styled.p`
    color: var(--gray);
    line-height: 13.1px;
    font-size: 10.98px;
    font-weight: var(--font-weight-medium);
`;

export const Item = styled.div`
    position: relative;
    margin: 5px;
`;

export const ItemButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    &:hover {
        border: 1px solid red;
        z-index: 5;
        opacity: 0.8;
        cursor: pointer;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
`;

export const RemoveContainer = styled.div`
    position: absolute;
    background-color: var(--dark-blue);
    width: 200px;
    height: 100px;
    transform: translate(30%, -170%);
    padding: 10px;
    border-radius: 10px;
`;

export const H4 = styled.h4`
    text-align: center;
    color: var(--white);
    line-height: 13.1px;
    font-size: 13.98px;
    font-weight: var(--font-weight-medium);
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 15px auto;
`;

export const RemoveButton = styled.button`
    background-color: var(--dark-blue);
    border: 1px solid var(--white);
    border-radius: 10px;
    color: var(--white);
    width: 50px;
    height: 30px;
    cursor: pointer;
    transition: var(--transition);
    margin: 5px;
`;