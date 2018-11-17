import React from 'react';
import { StyledLoader } from './style';

const Loader = () => (
  <StyledLoader className='fade in loading-backdrop modal-backdrop' >
    <div
      className="spinner"
    />
  </StyledLoader>
);

export default Loader;
