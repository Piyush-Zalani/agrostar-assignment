import styled from 'styled-components';

const AppFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: white;
  border-top: 1px solid #ccc;
`;

const StyledIcon = styled.i`
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  &:after {
    display: block;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
  }
`;

const StyledButton = styled.button`
  width: 50%;
  background: none;
  outline: none;
  border: none;
`;

const ProductsButton = styled(StyledButton)`
  color: green;
  > i:after {
    content: "\\f290";
  }
`;

const MyOrdersButton = styled(StyledButton)`
  color: black;
  > i:after {
    content: "\\f07a";
  }
`;

export {
  AppFooter,
  ProductsButton,
  MyOrdersButton,
  StyledIcon
}
