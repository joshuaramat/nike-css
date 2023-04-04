import styled from 'styled-components';
import Card from '../Card/Card'

export const CircleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr);
    clip-path: circle(120px at center);
    transition: 0.5s;
  }

  ${Card}:hover &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr);
    clip-path: circle(120px at center);
    transition: 0.5s;
  }
`