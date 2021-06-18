import logo from "./logo.svg";
import "./App.css";
import reducer from "./reducer";
import Context from "./Context";
import { useReducer,useEffect } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { redTheme, blueTheme } from "./theme";
import server from './components/server';

import Switch from "./Switch";
import Header from "./Header";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
export const GlobalStyles = createGlobalStyle`
	body, #root {
		background: ${({ theme }) => theme.background};
		color: ${({ theme }) => theme.text};
    margin:8px;
		font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
	}
`;
const StyledMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const initialState = {
  isRed: false,
  isBlue: true,
  productList: [],
  checkedProduct: [],
  checkoutList: [],
  filteredProduct:[]
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchApiData = async () => {
    const res = await fetch("/api/products");
    const json = await res.json();
    dispatch({ type: 'DISPLAY_PRODUCT',payload:json });
  };

  useEffect(() => {
    server();
    fetchApiData();
  }, []);
  return (
    <div className="App">
      <Context.Provider value={{ state, dispatch }}>
        <ThemeProvider theme={state.isRed ? redTheme : blueTheme}>
          <GlobalStyles />
          <Header />
          <StyledMain>
            <Product />
            <Cart />
          </StyledMain>
          <Footer />
        </ThemeProvider>
      </Context.Provider>
    </div>
  );
}

export default App;
