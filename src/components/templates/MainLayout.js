import StyledMainLayout from "../../styles/templates/StyledMainLayout";
import Header from "../Header";

export default function MainLayout({
  children,
  title,
  urls,
  hasSearchBar = false,
}) {
  // console.log(urls);
  return (
    <StyledMainLayout>
      <Header breadcrumbUrls={urls} />
      <div className="titleArea">
        <h1>{title}</h1>
        {hasSearchBar && <input className="searchInput" type="input" />}
      </div>
      <div>{children}</div>
    </StyledMainLayout>
  );
}
