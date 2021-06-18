import React,{useContext} from 'react'
import styled from "styled-components";
import Context from "../Context";
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
`;
const StyledInput = styled.input``;
const StyledItem = styled.div`
  margin: 10px;
  padding: 5px;
  height: 40px;
  width: 90%;
  padding-top:7px;
  border: 1px solid ${({ theme }) => theme.text};
`;
const CartBody = () => {
    const state = useContext(Context);
    const checkoutList = state?.state?.checkoutList;
    console.log(checkoutList, "heeelo");
    return (
      <StyledItems>
        {checkoutList.map((item, index) => {
          return <StyledItem key={index}>{item}</StyledItem>;
        })}
      </StyledItems>
    );
}

export default CartBody
