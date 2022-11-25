import ProductCard from "../ProductCard";
import MainLayout from "../templates/MainLayout";
import { useContext, useEffect, useState } from "react";
import PurchaseContext from "../../store/purchase-context";
import { getAllProducts } from "../services/productsApi";

export default function Homepage() {
  const [productsList, setProductsList] = useState([]);
  const context = useContext(PurchaseContext);

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
  });

  const homeUrl = {
    route1: {
      url: "/",
      name: "Home",
    },
  };

  return (
    <MainLayout title="Products List" urls={homeUrl} hasSearchBar={true}>
      <div className="cards-container">
        {productsList.length ? (
          productsList.map((product) => (
            <ProductCard
              key={product.id}
              productLink={`/product/${product.id}`}
              brand={product.brand}
              model={product.model}
              price={product.price}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </MainLayout>
  );
}
