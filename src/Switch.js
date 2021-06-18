import { useContext } from "react";
import styled from "styled-components";
import Context from "./Context";

const Switch = () => {
  const { dispatch } = useContext(Context);
    const Container = styled.p`
      position: relative;
      width: 60px;
      height: 34px;
    `;
  const handleOnClick = () => {
    // Dispatch action
    dispatch({ type: "TOGGLE_THEME" });
  };

    return (
      <div>
        <input type="checkbox" onClick={handleOnClick} />
        <Container>
          <p>Hello World</p>
        </Container>
      </div>
    );
};
export default Switch;