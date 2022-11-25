import StyledHeader from "../styles/StyledHeader";
import CartIcon from "./UI/CartIcon";
import CustomBreadcrumbs from "./UI/CustomBreadcrumbs";
import { Link } from "react-router-dom";

export default function Header({ breadcrumbUrls }) {
  return (
    <StyledHeader>
      <header className="header">
        <div className="header--main-content">
          <div className="header--logo">
            <div>
              <Link to="/">PHONOSHOP</Link>
            </div>
          </div>
          <CartIcon />
        </div>
        <div className="header--breadcrumbs">
          <CustomBreadcrumbs urls={breadcrumbUrls} />
        </div>
      </header>
    </StyledHeader>
  );
}
