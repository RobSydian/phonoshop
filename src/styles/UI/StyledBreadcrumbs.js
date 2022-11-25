import styled from "styled-components";

const StyledBreadcrumbs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  color: ${(props) => props.theme.colors.tertiary};

  .activeLink {
    font-weight: bold;
    pointer-events: none;
    cursor: none;
  }
`;

export default StyledBreadcrumbs;
