// import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import MainLayout from "../templates/MainLayout";

export default function Homepage() {
  const homeUrl = {
    route1: {
      url: "/",
      name: "Home",
    },
  };
  return (
    <MainLayout title="Home page" urls={homeUrl}>
      {/* <ul>
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
      </ul> */}
      <ProductCard productLink="/product/1" />
    </MainLayout>
  );
}
