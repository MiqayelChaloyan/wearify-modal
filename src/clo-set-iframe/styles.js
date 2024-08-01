import styled from 'styled-components';

export const Box = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-51%, -50%);
`;

export const Iframe = styled.iframe`
    display: ${({ $loaded }) => ($loaded ? 'block' : 'none')};
    border-radius: 30px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 490px;
    overflow: hidden;
`;

export const HideBorder = styled.div`
    width: 100%;
    height: 490px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 25px;
    border: 2px solid rgb(236, 237, 234);
    background-color: transparent;
    pointer-events: none;
    z-index: 100000;
    display: block !important;
`;

export const ContainerClo3d = styled.div`
    position: relative;
    width: 100%;
    height: 490px;
    overflow: hidden;
`;

export const ButtonBack = styled.button`
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
    position: relative;
    top: 20px;
    left: 20px;
    z-index: 10
`;








export const Container1 = styled.div`
    z-index: 3;
    background: #fff;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 22px;
`;

export const Box1 = styled.div`
    display: grid;
    align-items: center;
    padding: 6px 1px;
    position: relative;
`;

export const Button = styled.button`
    padding: 17px 12px;
    height: 65px;
    width: 52px;    
    background-color: transparent !important;
    cursor: pointer;
    transition: var(--transition);
`;

export const HorizontalLine = styled.div`
    height: 1px;
    background-color: #ACACAC;
    min-width: 30px; 
    flex: 1;
    margin: 0 10px;
    max-width: 30px;
`;
