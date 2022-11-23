import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Homepage from "./components/pages/Homepage";
import ProductPage from "./components/pages/ProductPage";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
