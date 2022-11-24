const baseUrl = "https://front-test-api.herokuapp.com";

export const getAllProducts = async () => {
  const response = await fetch(`${baseUrl}/api/product`);
  const responseData = await response.json();

  const loadedProducts = [];

  for (const key in responseData) {
    loadedProducts.push({
      id: responseData[key].id,
      brand: responseData[key].brand,
      model: responseData[key].model,
      price: responseData[key].price,
      imgUrl: responseData[key].imgUrl,
    });
  }

  return loadedProducts;
};

//prepare function to getProductById

//prepare function to addToCart
