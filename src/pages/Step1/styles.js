import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CloseButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    font-size: 20px;
    cursor: pointer;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 5;
`;

export const Container = styled.div`
    width: 100%;
`;

export const Box = styled.div`
    margin-right: 20px;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0;
    position: absolute;
    bottom: 130px;
    right: 0;
`;

export const Button = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    color: var(--sky);
    font-size: 20px;
    margin-top: 20px;
`;

export const MotionBox = styled(motion.div)`
    padding: 12px;
    border-radius: 0 0 50px 50px;
    height: 166px; 
    position: relative;
    bottom: 140px;
`;