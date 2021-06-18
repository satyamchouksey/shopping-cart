import React, { useContext } from 'react'
import styled from 'styled-components';
import Context from '../Context'
const StyledItems = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: scroll;
`;
const StyledItemCart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const StyledInput = styled.input`
    width:10%;
`;
const StyledItem = styled.div`
  margin: 10px;
  padding: 5px;
  height: 40px;
  width:90%;
  border: 1px solid ${({ theme }) => theme.text};
`;
const Items = () => {
    const state = useContext(Context);
    const { dispatch } = useContext(Context);
    console.log("check",state)
    const handleInput = (event) => {
      dispatch({ type: "CHECKOUT_PRODUCT", payload: event.target.value });
    };
    const productList = state?.state?.filteredProduct.length>0?state?.state?.filteredProduct:state?.state?.productList;
    return (
      <StyledItems>
        {productList.map((item, index) => {
          return (
            <StyledItemCart>
                  <StyledInput value={item.name} onClick={event=>handleInput(event)} type="checkbox" />
              <StyledItem key={index}>
                {item.name}
              </StyledItem>
            </StyledItemCart>
          );
        })}
      </StyledItems>
    );
}

export default Items
