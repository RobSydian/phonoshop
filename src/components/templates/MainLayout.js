import StyledMainLayout from "../../styles/templates/StyledMainLayout";
import Header from "../Header";

export default function MainLayout({ children, title, urls }) {
  console.log(urls);
  return (
    <StyledMainLayout>
      <Header breadcrumbUrls={urls} />
      <h1>{title}</h1>
      <div>{children}</div>
    </StyledMainLayout>
  );
}
