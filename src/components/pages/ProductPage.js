import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { productId } = useParams();
  console.log(productId);

  return (
    <>
      <div>Homepage Title</div>
      <div>
        Product Id is:
        {productId}
      </div>
    </>
  );
}
