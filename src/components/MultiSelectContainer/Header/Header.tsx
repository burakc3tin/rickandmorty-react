import React from 'react';
import logoImage from '../../../assets/images/logo.png';
import { StyledHeader, Logo } from './Header.styles';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <StyledHeader>
      <Logo src={logoImage} alt="Logo" />
    </StyledHeader>
  );
};

export default Header;
