import styled from 'styled-components';

const CardWrap = styled.div`
  padding:5px;
  width: fit-content;
  display: inline-grid;
`;

const CardGrid = styled.div`
  width:100%;
  margin-top: 10px;
  margin-bottom: 60px;
  text-align: center;
  margin-bottom: ${({ items }) => (items.length > 0 && '115px') || '60px' }
  & :after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Card = styled.div`
  background-color:white;
  border-radius:5px;
  border:1px solid #ccc;
  border-bottom:2px solid #ccc;
  width: 250px;
  height: 365px;
  position: relative;
  > div {
    padding:0 1em;
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 10px 20px;
  margin-top: 60px;
`;

const DefaultOffer = styled.span`
  font-size: 15px;
  position: absolute;
  top: 51px;
  left: 2px;
  background: #FF9800;
`;

const StyledImage = styled.img`
  height: 215px;
  display: flex;
  margin: 0 auto;
`;

export {
  CardWrap,
  CardGrid,
  Card,
  Container,
  DefaultOffer,
  StyledImage,
}
