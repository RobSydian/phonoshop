export default function ProductImage({ src, width = "auto", height }) {
  return (
    <div>
      <img src={src} alt="productImage" width={width} height={height} />
    </div>
  );
}
