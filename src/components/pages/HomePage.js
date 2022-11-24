// import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import MainLayout from "../templates/MainLayout";

export default function Homepage() {
  const homeUrl = {
    route1: {
      url: "/",
      name: "Home",
    },
  };
  return (
    <MainLayout title="Products List" urls={homeUrl} hasSearchBar={true}>
      <div className="cards-container">
        <ProductCard productLink="/product/1" />
        <ProductCard productLink="/product/2" />
        <ProductCard productLink="/product/3" />
        <ProductCard productLink="/product/4" />
        <ProductCard productLink="/product/5" />
      </div>
    </MainLayout>
  );
}
