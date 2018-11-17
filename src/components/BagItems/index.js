import React from 'react';
import { BagNotification } from './style';

export default ({ items }) => {
  return (
    <BagNotification>
      <span>
        {items.length} items
        |
        Rs. {items.map(item => Number(Object.values(item))).reduce((a, b) => a + b, 0)}
      </span>
      <span style={{float: 'right'}}>
        View Bag >
      </span>
    </BagNotification>
  )
}
