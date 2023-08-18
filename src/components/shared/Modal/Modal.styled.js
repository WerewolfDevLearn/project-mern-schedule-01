import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ background }) => background};
  backdrop-filter: blur(3px);
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalDiv = styled(motion.div)`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;
