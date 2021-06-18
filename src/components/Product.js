import React, { useContext } from 'react'
import SearchBar from './SearchBar';
import Items from './Items'
import styled from 'styled-components';
import Context from '../Context';
const lightGrey = "#E2E2E2";
const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh;
  width: 50%;
`;
const Product = () => {
    const state = useContext(Context);
    console.log("ITEM",state)
    return (
        <StyledProduct>
            <SearchBar />
            <Items/>
        </StyledProduct>
    )
}

export default Product
