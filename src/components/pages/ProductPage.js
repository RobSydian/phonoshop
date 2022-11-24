import { useParams } from "react-router-dom";
import MainLayout from "../templates/MainLayout";
import StyledProductPage from "../../styles/pages/StyledProductPage";
import ProductImage from "../UI/ProductImage";
import RadioButton from "../UI/RadioButton";
import Button from "../UI/Button";
import { useEffect, useState } from "react";
import { getProductById } from "../services/productsApi";

export default function ProductPage() {
  const [product, setProduct] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    console.log(productId);
    if (productId) {
      const setFetchedProduct = async () => {
        const fetchedProduct = await getProductById(productId);
        setProduct(fetchedProduct);
      };
      setFetchedProduct();
    }
  }, [productId]);

  if (product !== null) {
    console.log({ storages: product.storages });
    console.log({ url: product.imgUrl });
  }
  const productUrls = {
    route1: {
      url: "/",
      name: "Home",
    },
    route2: {
      url: `/product/${product ? product.id : ""}`,
      name: `${product ? product.model : ""}`,
    },
  };
  return (
    <MainLayout
      title={`Product details: ${product ? product.model : ""}`}
      urls={productUrls}
      backButton={true}
    >
      {product !== "undefined" ? (
        <StyledProductPage>
          <div className="image-col">
            <ProductImage src={product?.imgUrl} width="300" height="400" />
          </div>
          <div className="product-content-col">
            <section className="product-content-col--description">
              <h1>Description</h1>
              {product?.brand && <p>Brand: {product.brand}</p>}
              {product?.model && <p>Model: {product.model}</p>}
              {product?.price && <p>Price: {product.price}</p>}
              {product?.cpu && <p>CPU: {product.cpu}</p>}
              {product?.ram && <p>RAM: {product.ram}</p>}
              {product?.os && <p>OS: {product.os}</p>}
              {product?.displayResolution && (
                <p>Display Resolution: {product.displayResolution}</p>
              )}
              {product?.battery && <p>Battery: {product.battery}</p>}
              {product?.primaryCamera && (
                <p>
                  Primary Camera:&nbsp;
                  <span>
                    {Array.isArray(product.primaryCamera)
                      ? product.primaryCamera.join(" / ")
                      : product.primaryCamera}
                  </span>
                </p>
              )}
              {product?.secondaryCamera && (
                <p>
                  Secondary Camera:&nbsp;
                  <span>
                    {Array.isArray(product.secondaryCamera)
                      ? product.secondaryCmera.join(" / ")
                      : product.secondaryCmera}
                  </span>
                </p>
              )}
              {product?.dimentions && <p>Dimensions: {product.dimentions}</p>}
              {product?.weight && <p>Weight: {product.weight}g</p>}
            </section>
            <section className="product-content-col--actions">
              <h1>Selection</h1>
              <form className="form">
                <h3>Storage</h3>
                <div className="form--radio-group">
                  {product?.options?.storages?.map((storage, index, array) => {
                    if (array.length === 1) {
                      return (
                        <RadioButton
                          id={storage.name}
                          name="storage"
                          value={storage.code}
                          checkValue={true}
                        />
                      );
                    }
                    return (
                      <RadioButton
                        id={storage.name}
                        name="storage"
                        value={storage.code}
                      />
                    );
                  })}
                </div>
                <h3>Color</h3>
                <div className="form--radio-group">
                  {product?.options?.colors?.map((color, index, array) => {
                    if (array.length === 1) {
                      return (
                        <RadioButton
                          id={color.name}
                          name="color"
                          value={color.code}
                          checkValue={true}
                        />
                      );
                    }
                    return (
                      <RadioButton
                        id={color.name}
                        name="color"
                        value={color.code}
                      />
                    );
                  })}
                </div>
                <div className="form--buttons">
                  <Button
                    type="submit"
                    classType="success"
                    text="Añadir a Carrito"
                  />
                </div>
              </form>
            </section>
          </div>
        </StyledProductPage>
      ) : (
        <p>Loading...</p>
      )}
    </MainLayout>
  );
}
