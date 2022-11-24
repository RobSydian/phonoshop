import styled from "styled-components";

const StyledProductPage = styled.div`
  display: flex;

  h1,
  h2,
  h3 {
    margin: 0;
    padding: 0.5rem 0;
  }

  .image-col {
    height: 400px;
    width: 600px;
  }

  img {
    box-shadow: 0 0 15px 0;
  }
  .product-content-col {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }

  .product-content-col--description,
  .product-content-col--actions {
    background-color: ${(props) => props.theme.colors.tertiary};
    width: 500px;
    padding: 1.5rem;
  }

  p {
    line-height: 1.5;
  }

  .form--radio-group {
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
  }

  .form--buttons {
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
  }

  h1 {
    color: ${(props) => props.theme.colors.primary};
  }

  @media (min-width: 600px) {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;
    gap: 9rem;
    .product-content-col--description,
    .product-content-col--actions {
      background-color: ${(props) => props.theme.colors.tertiary};
      width: 600px;
      padding: 1rem 1.5rem 1.5rem 1.5rem;
    }
  }
`;

export default StyledProductPage;
