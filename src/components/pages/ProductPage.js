import { useParams } from "react-router-dom";
import MainLayout from "../templates/MainLayout";
import StyledProductPage from "../../styles/pages/StyledProductPage";
import ProductImage from "../UI/ProductImage";
import { useEffect, useState } from "react";
import { getProductById } from "../services/productsApi";
import ProductDetailsForm from "../ProductDetailsForm";
import ProductDescriptionCard from "../ProductDescriptionCard";

export default function ProductPage() {
  const [product, setProduct] = useState();
  // const [error, setError] = useState();

  const { productId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        if (productId) {
          const fetchedProduct = await getProductById(productId);
          setProduct(fetchedProduct);
        }
      } catch (e) {
        console.error("You got errors");
      }
    })();
  }, [productId]);

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
              <ProductDescriptionCard product={product} />
            </section>
            <section className="product-content-col--actions">
              <h1>Selection</h1>
              <ProductDetailsForm product={product} />
            </section>
          </div>
        </StyledProductPage>
      ) : (
        <p>Loading...</p>
      )}
    </MainLayout>
  );
}
