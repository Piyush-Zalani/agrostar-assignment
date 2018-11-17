import React from 'react';
import { StyledButton, AddToCartButton } from './style';

export default ({ items, product, onIncrement, onDecrement, addToCart }) => {
  if (!items.filter(item => Object.keys(item)[0] === product.skuCode).length) {
    return (
      <AddToCartButton
        onClick={addToCart}
      >
        Add
      </AddToCartButton>
    )
  } else {
    return (
      <div className="input-group">
        <span
          className="input-group-btn"
        >
          <StyledButton
            type="button"
            className="btn btn-number"
            onClick={onDecrement}
          >
            <span className="glyphicon glyphicon-minus"/>
          </StyledButton>
        </span>
        <input
          type="text"
          className="form-control input-number"
          value={items.filter(item => Object.keys(item)[0] === product.skuCode).length}
          style={{textAlign: 'center'}}
        />
        <span
          className="input-group-btn"
        >
          <StyledButton
            type="button"
            className="btn btn-number"
            onClick={onIncrement}
          >
          <span className="glyphicon glyphicon-plus"/>
          </StyledButton>
        </span>
      </div>
    )
  }
}
