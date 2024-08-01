import styled from 'styled-components';

export const RangeInput = styled.input.attrs({ type: 'range' })`
    -webkit-appearance: none;
    margin: 20px 0;
    width: 100%;

    &:focus {
        outline: none;
    }

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 3px;
        cursor: pointer;
        background: var(--input-bg);
        border-radius: 25px;
        transition: background 0.2s;
    }

    &::-webkit-slider-thumb {
        height: 15.99px;
        width: 15.99px;
        border-radius: 50%;
        background: var(--dark-blue);
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -8px;
        outline: 1px solid var(--input-bg);
        outline-offset: 2px;
    }

    &:focus::-webkit-slider-runnable-track {
        background: var(--input-bg);
    }
`;
