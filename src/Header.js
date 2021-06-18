import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import Context from "./Context";

const HeaderInput = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  height:50px;
  width:100%;
  background-color: ${({ theme }) => theme.header};
`;
const SpanStyle = styled.span`
  margin: 10px;
  padding: 10px;
`;
const Header = () => {
  const { dispatch } = useContext(Context);
  const blueElement = useRef(null);
  const redElement = useRef(null);
  const clickHandler = (event) => {
    dispatch({ type: event.target.name });
    if (event.target.id === "blue") {
      redElement.current.checked = false;
      blueElement.current.checked = true;
    } else {
      blueElement.current.checked = false;
      redElement.current.checked = true;
    }
  };

  return (
    <HeaderInput>
      <div className="header">
        <input
          className="header-input"
          onClick={(event) => clickHandler(event)}
          type="radio"
          id="blue"
          name="BLUE_THEME"
          ref={blueElement}
        />
        <SpanStyle>blue</SpanStyle>

        <input
          className="header-input"
          onClick={(event) => clickHandler(event)}
          type="radio"
          id="red"
          name="RED_THEME"
          ref={redElement}
        />
        <SpanStyle>red</SpanStyle>
      </div>
    </HeaderInput>
  );
};

export default Header;
