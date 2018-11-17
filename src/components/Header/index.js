import React from 'react';
import { AppHeader, HeaderIcons, StyledImage } from './style';
import logo from '../../images/logo.png';

export default ({ getProducts }) => {
  return (
    <AppHeader>
      <StyledImage src={logo} />
      <HeaderIcons className="fa fa-user" />
      <HeaderIcons className="fa fa-refresh" onClick={getProducts} />
    </AppHeader>
  )
};
