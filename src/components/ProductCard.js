import { Link } from "react-router-dom";
import StyledProductCard from "../styles/StyledProductCard";
import ProductImage from "./UI/ProductImage";

export default function ProductCard({
  productLink,
  id,
  image,
  brand,
  model,
  price,
}) {
  return (
    <StyledProductCard key={id}>
      <Link to={productLink}>
        <div className="card">
          <div className="card--img">
            <ProductImage src={image} width="100%" height="250" />
          </div>
          <div className="card--content">
            <h1 className="card--content--brand">{brand}</h1>
            <h2 className="card--content--model">{model}</h2>
            <h2 className="card--content--price">
              {price ? `${price}€` : "Not available"}
            </h2>
          </div>
        </div>
      </Link>
    </StyledProductCard>
  );
}
