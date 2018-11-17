import React from 'react';
import { AppHeader, HeaderIcons } from './style';

export default ({ getProducts }) => {
  return (
    <AppHeader>
      <HeaderIcons className="fa fa-user" />
      <HeaderIcons className="fa fa-refresh" onClick={getProducts} />
    </AppHeader>
  )
};
