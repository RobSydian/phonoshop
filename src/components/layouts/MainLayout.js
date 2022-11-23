import StyledMainLayout from "../../styles/layouts/StyledMainLayout";

export default function MainLayout(props) {
  console.log(props);
  return (
    <StyledMainLayout>
      <h1>Header</h1>
      <div>{props.children}</div>
    </StyledMainLayout>
  );
}
