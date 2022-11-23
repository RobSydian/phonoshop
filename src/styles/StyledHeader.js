import styled from "styled-components";

const StyledHeader = styled.div`
  h1 {
    color: ${(props) => props.theme.colors.primary};
  }

  .header--main-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
  }
  .header--logo {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 1.5rem;
  }

  .header--breadcrumbs {
    padding: 0.5rem;
  }
`;

export default StyledHeader;
