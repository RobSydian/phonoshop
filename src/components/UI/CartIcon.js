import { useContext, useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import PurchaseContext from "../../store/purchase-context";
import StyledCartIcon from "../../styles/UI/StyledCartIcon";

export default function CartIcon({ badge = true }) {
  const [count, setCount] = useState(0);
  const context = useContext(PurchaseContext);

  useEffect(() => {
    setCount(context.itemsInCart.length);
  }, [context.itemsInCart]);

  return (
    <StyledCartIcon>
      <FiShoppingCart size="2.5em" color="white" />
      {badge && count > 0 && (
        <div className="cart-badge">
          <div className="cart-badge--content">{count}</div>
        </div>
      )}
    </StyledCartIcon>
  );
}
