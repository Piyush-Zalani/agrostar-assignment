import styled from 'styled-components';

const StyledLoader = styled.div`
  opacity: 0;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 8px solid #fff2f2;
  border-right-color: transparent;
  
  .spinner {
    margin: 50px;
    height: 28px;
    width: 28px;
    animation: rotate 0.8s infinite linear;
    border: 8px solid #fff;
    border-right-color: transparent;
    border-radius: 50%;
  }
  
  @keyframes rotate {
    0%    { transform: rotate(0deg); }
    100%  { transform: rotate(360deg); }
  }
`;

export {
  StyledLoader,
}
