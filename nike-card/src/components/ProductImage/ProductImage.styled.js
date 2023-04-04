import styled from 'styled-components';
import Card from '../Card/Card'

export const ProductImageContainer = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  height: 500px;
  transition: 0.5s;
  transition-delay: 0s;

  ${Card}:hover & {
    transform: translate(-50%, -50%) scale(1);
    left: 72%;
    transition-delay: 0.5s;
  }
`