import StyledHeader from "../styles/StyledHeader";
import CartIcon from "./UI/CartIcon";
import CustomBreadcrumbs from "./UI/CustomBreadcrumbs";

export default function Header({ breadcrumbUrls }) {
  console.log(breadcrumbUrls);
  return (
    <StyledHeader>
      <header className="header">
        <div className="header--main-content">
          <div className="header--logo">
            <div>PHONOSHOP</div>
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