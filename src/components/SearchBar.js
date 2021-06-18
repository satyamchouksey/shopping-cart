import React, { useState,useContext } from 'react'
import styled from 'styled-components'
import Context from '../Context'

const StyledSearchBar = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width:100%;
`;
const StyledInput = styled.input`
    height:50px;
    width:80%;
    font-size:20px;
    padding-left:4px;
`
const StyledButton = styled.button`
  height: 50px;
  width: 20%;
  background-color: ${({ theme }) => theme.buttonColor};
  color: ${({ theme }) => theme.text};
  border:none;
  border-radius:3px;
`;
const SearchBar = () => {
    const { dispatch } = useContext(Context)
    const [searchData, setsearchData] = useState('')
    console.log(searchData, "data");
    return (
      <StyledSearchBar>
            <StyledInput
                onChange={(event) => {
                    event.target.value.length === 0 ? dispatch({ type: 'FILTER_PRODUCT', payload: '' }) : setsearchData(event.target.value);
                }}
          type="text"
        />
        <StyledButton onClick={() => dispatch({type:'FILTER_PRODUCT',payload:searchData})}>Search</StyledButton>
      </StyledSearchBar>
    );
}

export default SearchBar
