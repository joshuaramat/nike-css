import styled from 'styled-components';
import Circle from '../Circle/Circle';
import Logo from '../Logo/Logo';

export const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 350px;
  margin: 20px;
  border-radius: 20px;
  transition: 0.5s;
  transition-delay: 0.5s;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    width: 600px;
  }

  &:hover .${Circle} .${Logo} {
    transform: scale(0);
    transition-delay: 0s;
  }
`