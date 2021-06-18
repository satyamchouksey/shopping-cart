import React, {useContext} from 'react'
import styled from 'styled-components'
import Context from "../Context";
const StyledFooter = styled.div`
    position:fixed;
    bottom:0px;
    left:0px;
    width:100%;
    display:flex;
`
const StyledCheckoutButton = styled.button`
  width: 50%;
  height: 40px;
  background-color: ${({ theme }) => theme.buttonColor};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 3px;
`;
const Footer = () => {
    const { dispatch } = useContext(Context);
    const handleAddToCart = (event) => {
        console.log("pr")
        dispatch({ type: "PREPARE_CHECKOUT"});
    }
    const handleCheckout = () =>{
        
    }
    return (
      <StyledFooter>
        <StyledCheckoutButton onClick={(event) => handleAddToCart(event)}>
          Add to cart
        </StyledCheckoutButton>
        <StyledCheckoutButton onClick={(event) => handleCheckout(event)}>
          Checkout
        </StyledCheckoutButton>
      </StyledFooter>
    );
}

export default Footer
