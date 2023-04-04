import React from 'react';
import { LogoContainer } from './Logo.styled';

function Logo({ logoName }) {
  const imageUrl = `../../../public/assets/${logoName}.png`;

  return (
    <LogoContainer>
      <img src={imageUrl} alt="Logo" className="logo" /> 
    </LogoContainer>
  );
}

export default Logo;
