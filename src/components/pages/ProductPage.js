import { useParams } from "react-router-dom";
import MainLayout from "../templates/MainLayout";

export default function ProductPage() {
  const { productId } = useParams();
  console.log(productId);
  const productUrls = {
    route1: {
      url: "/",
      name: "Home",
    },
    route2: {
      url: `/product/${productId}`,
      name: "Name of product",
    },
  };
  return (
    <MainLayout title="Product page" urls={productUrls}>
      <div>
        Product Id is:
        {productId}
      </div>
    </MainLayout>
  );
}
