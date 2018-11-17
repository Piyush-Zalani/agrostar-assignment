import React from 'react';
import { AppFooter, ProductsButton, StyledIcon, MyOrdersButton } from './style';

export default () => {
  return (
    <AppFooter>
      <ProductsButton className="products">
        <StyledIcon/>
        <span>Products</span>
      </ProductsButton>
      <MyOrdersButton className="my-orders">
        <StyledIcon/>
        <span>My Orders</span>
      </MyOrdersButton>
    </AppFooter>
  )
}
