import styled from 'styled-components';

const AppHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background: white;
  border-bottom: 1px solid #ccc;
  z-index: 999;
`;

const HeaderIcons = styled.span`
  float: right;
  margin: 15px;
  font-size: 20px; float: right;
  margin: 15px;
  font-size: 20px;
`;

const StyledImage = styled.img`
  height: 42px;
  margin-top: 3px;
`;

export {
  AppHeader,
  HeaderIcons,
  StyledImage
}
