import React, { useState } from "react";
import { getAllProducts } from "../components/services/productsApi";
const PurchaseContext = React.createContext({
  counter: 0,
  products: [],
  storeProducts: (products) => {},
  updateCounter: () => {},
});

export const PurchaseContextProvider = (props) => {
  const [counter, setCounter] = useState(0);
  const [fetchedProducts, setFetchedProducts] = useState(0);

  const updateCounterHandler = () => {
    //localStorage work
    setCounter(counter + 1);
  };
  const newProducts = [];
  const setNewProductsToLocalStorage = (products) => {
    newProducts.push(JSON.stringify(products));
    localStorage.setItem("productsList", newProducts);
    console.log("localstorage productsList created");
    console.log({ newProducts });
  };

  const getProductsList = async () => {
    return await JSON.parse(localStorage.getItem("productsList"));
  };
  const storeProductsHandler = async () => {
    const fetchedProducts = await getAllProducts();
    const items = await getProductsList();
    if (!items) {
      setNewProductsToLocalStorage(fetchedProducts);
      setFetchedProducts(newProducts);
      storeProductsHandler();
    } else {
      setFetchedProducts(items);
    }
    PurchaseContext.products = fetchedProducts;
  };

  return (
    <PurchaseContext.Provider
      value={{
        counter: counter,
        products: fetchedProducts,
        storeProducts: storeProductsHandler,
        updateCounter: updateCounterHandler,
      }}
    >
      {props.children}
    </PurchaseContext.Provider>
  );
};

export default PurchaseContext;
