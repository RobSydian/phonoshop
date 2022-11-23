import { FiShoppingCart } from "react-icons/fi";
import StyledCartIcon from "../../styles/UI/StyledCartIcon";

export default function CartIcon() {
  return (
    <StyledCartIcon>
      <FiShoppingCart size="2.5em" />
      <div className="cart-badge">
        <div className="cart-badge--content">1</div>
      </div>
    </StyledCartIcon>
  );
}
