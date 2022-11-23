import styled from "styled-components";

const StyledMainLayout = styled.div`
  font-family: "Verdana", "Arial", sans-serif !important;
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0.5rem;
  }
  h1 {
    color: ${(props) => props.theme.colors.primary};
  }

  .header {
    background-color: ${(props) => props.theme.colors.primary};
    min-height: 5rem;
    padding: 1rem;
  }
`;

export default StyledMainLayout;
