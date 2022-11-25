import { useContext, useEffect, useState } from "react";
import PurchaseContext from "../store/purchase-context";
import { addToCart } from "./services/productsApi";
import Button from "./UI/Button";
import RadioButton from "./UI/RadioButton";

export default function ProductDetailsForm({ product }) {
  const [selectedColor, setSelectedColor] = useState();
  const [selectedStorage, setSelectedStorage] = useState();
  const context = useContext(PurchaseContext);

  useEffect(() => {
    if (product) {
      setSelectedColor(product.options.colors[0].code);
      setSelectedStorage(product.options.storages[0].code);
    }
  }, [product]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const item = {
      id: product.id,
      colorCode: selectedColor,
      storageCode: selectedStorage,
    };
    await addToCart(item);
    context.addItemToCart(item);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <h3>Storage</h3>
      <div className="form--radio-group">
        {product?.options?.storages?.map((storage, index, array) => (
          <RadioButton
            key={index}
            id={storage.name}
            name="storage"
            value={storage.code}
            checked={index === 0 || storage.code === selectedStorage}
            onClickFn={(value) => setSelectedStorage(value)}
          />
        ))}
      </div>
      <h3>Color</h3>
      <div className="form--radio-group">
        {product?.options?.colors?.map((color, index, array) => (
          <RadioButton
            key={index}
            id={color.name}
            name="color"
            value={color.code}
            checked={index === 0 || color.code === selectedColor}
            onClickFn={(value) => setSelectedColor(value)}
          />
        ))}
      </div>
      <div className="form--buttons">
        <Button type="submit" classType="success" text="Add to Cart" />
      </div>
    </form>
  );
}
