const baseUrl = "https://front-test-api.herokuapp.com/api";

export const getAllProducts = async () => {
  const response = await fetch(`${baseUrl}/product`);
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

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/product/${id}`);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw Error(error.message);
  }
};

//prepare function to addToCart
export const addToCart = async (product) => {
  await fetch(`${baseUrl}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
};
