import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <div>Homepage Title</div>
      <ul>
        <li>
          <Link to="product/1">Link1</Link>
        </li>
        <li>
          <Link to="product/2">Link2</Link>
        </li>
        <li>
          <Link to="product/3">Link3</Link>
        </li>
        <li>
          <Link to="product/4">Link4</Link>
        </li>
      </ul>
    </>
  );
}
