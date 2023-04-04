import React from 'react'
import { CardContainer } from './Card.styled';
import Circle from '../Circle/Circle';
import Content from '../Content/Content';
// import ProductImage from '../ProductImage/ProductImage.';

function Card() {
  return (
    <CardContainer>
      <Circle />
      <Content />
      {/* <ProductImage /> */}
    </CardContainer>
  )
}

export default Card