import ProductCard from "../ProductCard";
import MainLayout from "../templates/MainLayout";
import { useContext, useEffect, useState } from "react";
import PurchaseContext from "../../store/purchase-context";
import { getAllProducts } from "../services/productsApi";

export default function Homepage() {
  const [productsList, setProductsList] = useState([]);
  const [userInput, setUserInput] = useState(null);

  const context = useContext(PurchaseContext);
  const onInputChange = (value) => {
    setUserInput(value);
  };
  useEffect(() => {
    (async () => {
      const cachedProducts = JSON.parse(localStorage.getItem("productsList"));
      if (cachedProducts) {
        setProductsList(cachedProducts);
      } else {
        const products = await getAllProducts();
        setProductsList(products);
        context.cacheProducts(products);
      }
    })();
  }, [context]);

  const homeUrl = {
    route1: {
      url: "/",
      name: "Home",
    },
  };
  const filteredResults = productsList
    .filter(
      (product) =>
        product.model.toLowerCase().includes(userInput) ||
        product.brand.toLowerCase().includes(userInput)
    )
    .map((product) => (
      <ProductCard
        key={product.id}
        productLink={`/product/${product.id}`}
        image={product.imgUrl}
        brand={product.brand}
        model={product.model}
        price={product.price}
      />
    ));

  const displayAllProducts = productsList.map((product) => (
    <ProductCard
      key={product.id}
      productLink={`/product/${product.id}`}
      image={product.imgUrl}
      brand={product.brand}
      model={product.model}
      price={product.price}
    />
  ));

  return (
    <MainLayout
      title="Products List"
      urls={homeUrl}
      hasSearchBar={true}
      searchBarInputFn={onInputChange}
    >
      <div className="cards-container">
        {productsList.length && userInput
          ? filteredResults
          : displayAllProducts}
      </div>
    </MainLayout>
  );
}
