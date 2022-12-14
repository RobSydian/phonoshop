/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import HomePage from "./components/pages/HomePage";
import ProductPage from "./components/pages/ProductPage";
import { handleLocalStorage } from "./components/services/localStorageHandler";
import GlobalStyle from "./styles/GlobalStyle";
// import StyledApp from "./styles/StyledApp";
import theme from "./styles/themes/theme";

function App() {
  handleLocalStorage();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
