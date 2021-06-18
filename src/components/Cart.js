import React from 'react'
import CartBody from './CartBody'
import CartHeader from './CartHeader'
import styled from "styled-components";
const red = "#FF6347";
const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh;
  width: 50%;
`;
const Cart = () => {
    return (
      <StyledCart>
        <CartHeader />
        <CartBody />
      </StyledCart>
    );
}

export default Cart
