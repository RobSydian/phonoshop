import { Link } from "react-router-dom";
import StyledProductCard from "../styles/StyledProductCard";
import ProductImage from "./UI/ProductImage";

export default function ProductCard({ productLink, id, brand, model, price }) {
  const imageUrl =
    "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
  return (
    <StyledProductCard key={id}>
      <Link to={productLink}>
        <div className="card">
          <ProductImage src={imageUrl} width="100%" height="250" />
          <div className="card--content">
            <h1 className="card--content--brand">{brand}</h1>
            <h2 className="card--content--model">{model}</h2>
            <h2 className="card--content--price">{price}€</h2>
          </div>
        </div>
      </Link>
    </StyledProductCard>
  );
}
