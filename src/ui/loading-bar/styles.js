import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
    width: 100%;
    height: 3px;
    background-color: var(--loading-bar-color);
    position: relative;
    overflow: hidden;
`;

export const MotionBox = styled(motion.div)`
    height: 100%;
    background-color: var(--dark-blue);
`;