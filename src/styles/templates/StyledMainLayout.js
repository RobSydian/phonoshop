import styled from "styled-components";

const StyledMainLayout = styled.main`
  min-height: 100vh;
  padding-bottom: 4rem;

  background-color: ${(props) => props.theme.colors.secondary};
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
  a:visited {
    color: inherit;
  }

  .header {
    background-color: ${(props) => props.theme.colors.primary};
    min-height: 5rem;
    padding: 1rem;
  }

  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }

  button {
    border-style: none;
    border-radius: 0;
    border-color: transparent;
  }

  .cards-container {
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 2em;
    box-sizing: border-box;
  }

  .titleArea {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin: 1.3rem 0;
  }

  .searchInput {
    width: 90%;
    padding: 12px 20px;
    box-sizing: border-box;
    font-size: 1rem;
  }

  @media (min-width: 600px) {
    .cards-container {
      width: 90%;
      margin: auto;
      justify-content: space-between;
      gap: 1em;
    }

    .titleArea {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      width: 90%;
      margin: 2rem auto;
    }

    .searchInput {
      width: 500px;
      padding: 12px 20px;
      box-sizing: border-box;
      font-size: 1rem;
    }
  }
`;

export default StyledMainLayout;
