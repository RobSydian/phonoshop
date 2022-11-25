import React from "react";

export default function ProductDescriptionCard({ product }) {
  return (
    <>
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
    </>
  );
}
