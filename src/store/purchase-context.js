import React, { useEffect, useState } from "react";

const PurchaseContext = React.createContext({
  itemsInCart: [],
  products: [],
  cacheProducts: (products) => {},
  addItemToCart: () => {},
});

export const PurchaseContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cachedItems = JSON.parse(localStorage.getItem("itemsInCart"));
    if (cachedItems) {
      setCartItems(cachedItems);
    }
  }, []);

  const addItemToCart = (item) => {
    const allItems = [...cartItems, item];
    setCartItems(allItems);
    PurchaseContext.itemsInCart = allItems;
    localStorage.setItem("itemsInCart", JSON.stringify(allItems));
  };

  const cacheProducts = async (products) => {
    localStorage.setItem("productsList", JSON.stringify(products));
    PurchaseContext.products = products;
  };

  return (
    <PurchaseContext.Provider
      value={{
        itemsInCart: cartItems,
        cacheProducts,
        addItemToCart,
      }}
    >
      {props.children}
    </PurchaseContext.Provider>
  );
};

export default PurchaseContext;
