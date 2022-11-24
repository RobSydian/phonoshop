import ProductCard from "../ProductCard";
import MainLayout from "../templates/MainLayout";
import { useContext, useEffect, useState } from "react";
import PurchaseContext from "../../store/purchase-context";

export default function Homepage() {
  const [productsList, setProductsList] = useState([]);
  const ctx = useContext(PurchaseContext);

  useEffect(() => {
    Promise.all([ctx.storeProducts()]);
  });

  useEffect(() => {
    const finalList = ctx.products;
    if (finalList.length) {
      setProductsList(finalList);
    }
  }, [ctx, productsList]);

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
