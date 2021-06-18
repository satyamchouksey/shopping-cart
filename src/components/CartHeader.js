import React, {useContext} from 'react'
import styled from 'styled-components';
import Context from '../Context';


const StyledCartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 17px;
  background-color: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.text};
`;
const CartHeader = () => {
    const state = useContext(Context);
    const itemCount = state?.state?.checkoutList.length;
    return (
        <><StyledCartHeader>
            <span>Cart</span>
            <span>{itemCount} items</span>
        </StyledCartHeader>
        <hr/></>
    );
}

export default CartHeader
