import styled from 'styled-components';

const SearchBar = styled.div`
  position: relative;
  > input {
    text-indent: 10px;
    font-size: 22px;
    width: 100%;
  }
  .fa-search {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 16px;
  }
`;

export {
  SearchBar,
}
